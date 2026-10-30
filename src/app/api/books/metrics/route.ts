import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import {
  INITIAL_BOOK_METRICS,
  BookMetricsMap,
  getBaselineBookMetric,
} from '@/lib/bookMetrics';

const METRICS_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'book_metrics.json');

function readMetricsFromDisk(): BookMetricsMap {
  try {
    if (fs.existsSync(METRICS_FILE_PATH)) {
      const raw = fs.readFileSync(METRICS_FILE_PATH, 'utf-8');
      const parsed = JSON.parse(raw) as BookMetricsMap;
      return { ...INITIAL_BOOK_METRICS, ...parsed };
    }
  } catch (err) {
    console.error('Error reading book_metrics.json:', err);
  }
  return { ...INITIAL_BOOK_METRICS };
}

function writeMetricsToDisk(metrics: BookMetricsMap): void {
  try {
    fs.writeFileSync(METRICS_FILE_PATH, JSON.stringify(metrics, null, 2), 'utf-8');
  } catch (err) {
    // In read-only serverless environments, fallback gracefully without crashing
    console.warn('Could not write book_metrics.json to disk:', err);
  }
}

export async function GET() {
  const metrics = readMetricsFromDisk();
  return NextResponse.json({
    success: true,
    metrics,
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { slug, action } = body as { slug?: string; action?: 'read' | 'download' };

    if (!slug || typeof slug !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Book slug is required.' },
        { status: 400 }
      );
    }

    if (action !== 'read' && action !== 'download') {
      return NextResponse.json(
        { success: false, error: 'Action must be "read" or "download".' },
        { status: 400 }
      );
    }

    const metrics = readMetricsFromDisk();
    const current = metrics[slug] || getBaselineBookMetric(slug);

    const updated = {
      reads: action === 'read' ? current.reads + 1 : current.reads,
      downloads: action === 'download' ? current.downloads + 1 : current.downloads,
    };

    metrics[slug] = updated;
    writeMetricsToDisk(metrics);

    return NextResponse.json({
      success: true,
      slug,
      metric: updated,
    });
  } catch (error: any) {
    console.error('Error in POST /api/books/metrics:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update book metrics.' },
      { status: 500 }
    );
  }
}

