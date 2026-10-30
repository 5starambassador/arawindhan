import initialMetricsJson from '@/data/book_metrics.json';

export interface BookMetricEntry {
  reads: number;
  downloads: number;
}

export type BookMetricsMap = Record<string, BookMetricEntry>;

export const INITIAL_BOOK_METRICS: BookMetricsMap = initialMetricsJson as BookMetricsMap;

const LOCAL_STORAGE_KEY = 'arawindhan_book_metrics_v1';
const SESSION_READ_PREFIX = 'arawindhan_book_read_session_';

let memoryMetricsCache: BookMetricsMap | null = null;
let inflightFetch: Promise<BookMetricsMap> | null = null;

/**
 * Formats a number into a clean, compact display string (e.g., 2480 -> "2.5k", 890 -> "890")
 */
export function formatCompactCount(value: number): string {
  if (value >= 10000) {
    return `${(value / 1000).toFixed(1).replace(/\.0$/, '')}k`;
  }
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1).replace(/\.0$/, '')}k`;
  }
  return value.toLocaleString('en-IN');
}

/**
 * Returns baseline metric for a given book slug
 */
export function getBaselineBookMetric(slug: string): BookMetricEntry {
  return INITIAL_BOOK_METRICS[slug] || { reads: 950, downloads: 310 };
}

/**
 * Merges server/initial metrics with any optimistic local increments
 */
function mergeMetrics(base: BookMetricsMap, other?: BookMetricsMap | null): BookMetricsMap {
  const result: BookMetricsMap = { ...INITIAL_BOOK_METRICS, ...base };
  if (!other) return result;

  for (const [slug, entry] of Object.entries(other)) {
    const existing = result[slug] || getBaselineBookMetric(slug);
    result[slug] = {
      reads: Math.max(existing.reads, entry?.reads || 0),
      downloads: Math.max(existing.downloads, entry?.downloads || 0),
    };
  }
  return result;
}

export function getCachedBookMetrics(): BookMetricsMap {
  if (typeof window === 'undefined') {
    return INITIAL_BOOK_METRICS;
  }
  if (memoryMetricsCache) {
    return memoryMetricsCache;
  }
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as BookMetricsMap;
      memoryMetricsCache = mergeMetrics(INITIAL_BOOK_METRICS, parsed);
      return memoryMetricsCache;
    }
  } catch {
    // ignore storage errors
  }
  memoryMetricsCache = { ...INITIAL_BOOK_METRICS };
  return memoryMetricsCache;
}

function saveCachedBookMetrics(map: BookMetricsMap) {
  memoryMetricsCache = map;
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(map));
  } catch {
    // ignore storage errors
  }
  window.dispatchEvent(new CustomEvent('book-metrics-updated', { detail: map }));
}

/**
 * Fetches latest book metrics from `/api/books/metrics` once and caches in memory + localStorage
 */
export async function fetchAllBookMetrics(): Promise<BookMetricsMap> {
  if (typeof window === 'undefined') return INITIAL_BOOK_METRICS;
  if (inflightFetch) return inflightFetch;

  inflightFetch = fetch('/api/books/metrics', { cache: 'no-store' })
    .then(async (res) => {
      if (!res.ok) throw new Error('Failed to fetch metrics');
      const data = await res.json();
      const current = getCachedBookMetrics();
      const merged = mergeMetrics(current, data?.metrics || {});
      saveCachedBookMetrics(merged);
      return merged;
    })
    .catch(() => {
      return getCachedBookMetrics();
    })
    .finally(() => {
      inflightFetch = null;
    });

  return inflightFetch;
}

/**
 * Records a 'read' or 'download' action for a book.
 * - Deduplicates 'read' events per browser session so repeated opens don't artificially inflate counts.
 * - Updates UI optimistically and persists to `/api/books/metrics`.
 */
export async function trackBookMetric(
  slug: string,
  action: 'read' | 'download'
): Promise<BookMetricEntry> {
  const currentMap = getCachedBookMetrics();
  const currentEntry = currentMap[slug] || getBaselineBookMetric(slug);

  if (typeof window === 'undefined') {
    return currentEntry;
  }

  // Deduplicate 'read' within the same session
  if (action === 'read') {
    try {
      const sessionKey = `${SESSION_READ_PREFIX}${slug}`;
      if (sessionStorage.getItem(sessionKey) === '1') {
        return currentEntry;
      }
      sessionStorage.setItem(sessionKey, '1');
    } catch {
      // ignore sessionStorage errors
    }
  }

  // Optimistic increment
  const nextEntry: BookMetricEntry = {
    reads: action === 'read' ? currentEntry.reads + 1 : currentEntry.reads,
    downloads: action === 'download' ? currentEntry.downloads + 1 : currentEntry.downloads,
  };

  const nextMap: BookMetricsMap = {
    ...currentMap,
    [slug]: nextEntry,
  };
  saveCachedBookMetrics(nextMap);

  try {
    const res = await fetch('/api/books/metrics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug, action }),
    });
    if (res.ok) {
      const data = await res.json();
      if (data?.metric) {
        const syncedMap = mergeMetrics(getCachedBookMetrics(), { [slug]: data.metric });
        saveCachedBookMetrics(syncedMap);
        return syncedMap[slug];
      }
    }
  } catch {
    // Keep optimistic update on network failure
  }

  return nextEntry;
}

