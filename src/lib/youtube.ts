import { YouTubeVideoItem } from '@/types';
import { curatedVideos, youtubeChannelInfo } from '@/data/videos';

/**
 * Parses XML tags using simple regex to avoid heavy DOM parser dependencies.
 */
function extractTagContent(xml: string, tag: string): string {
  const match = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'));
  return match ? match[1].trim() : '';
}

/**
 * Fetches the latest videos directly from YouTube's public RSS feed for the official channel.
 * Uses Next.js ISR cache (revalidates every hour).
 * Merges with curated local metadata so seeded titles remain rich & bilingual,
 * while any newly uploaded YouTube video automatically shows up at the top!
 */
export async function getLatestYouTubeVideos(): Promise<YouTubeVideoItem[]> {
  try {
    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${youtubeChannelInfo.channelId}`;
    const res = await fetch(rssUrl, {
      next: { revalidate: 3600 }, // Background revalidation every 1 hour
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ArawindhanWebsite/1.0',
      },
    });

    if (!res.ok) {
      console.warn(`YouTube RSS fetch responded with status ${res.status}. Falling back to curated list.`);
      return curatedVideos;
    }

    const xml = await res.text();
    const entryMatches = xml.match(/<entry>[\s\S]*?<\/entry>/gi) || [];

    const fetchedVideos: YouTubeVideoItem[] = [];

    for (const entry of entryMatches) {
      const id = extractTagContent(entry, 'yt:videoId');
      const title = extractTagContent(entry, 'title');
      const published = extractTagContent(entry, 'published');
      const desc = extractTagContent(entry, 'media:description');

      if (!id) continue;

      // Check if we already have curated bilingual metadata for this video
      const existing = curatedVideos.find((v) => v.id === id);
      if (existing) {
        fetchedVideos.push(existing);
      } else {
        // Format published date
        const pubDate = published ? new Date(published).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) : 'Recent';

        fetchedVideos.push({
          id,
          title: {
            en: title || 'Arawindhan Official Broadcast',
            ta: title || 'அரவிந்தன் அதிகாரப்பூர்வ வெளியீடு',
          },
          description: {
            en: desc ? (desc.length > 200 ? desc.slice(0, 200) + '...' : desc) : 'Official video broadcast by Dr. J. Arawindhan.',
            ta: desc ? (desc.length > 200 ? desc.slice(0, 200) + '...' : desc) : 'முனைவர் ஜே. அரவிந்தன் அவர்களின் அதிகாரப்பூர்வ வீடியோ பகிர்வு.',
          },
          category: {
            en: 'Latest Broadcast',
            ta: 'புதிய வெளியீடு',
          },
          publishedAt: pubDate,
          featured: fetchedVideos.length === 0, // Make the newest video featured
        });
      }
    }

    // Merge in any curated videos that may not have appeared in the recent RSS list (e.g. unlisted/shorts)
    const combined = [...fetchedVideos];
    for (const cv of curatedVideos) {
      if (!combined.some((v) => v.id === cv.id)) {
        combined.push(cv);
      }
    }

    return combined.length > 0 ? combined : curatedVideos;
  } catch (error) {
    console.error('Error fetching YouTube RSS feed:', error);
    return curatedVideos;
  }
}
