import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import fs from 'fs';
import path from 'path';
import { SocialPostItem } from '@/types';
import { officialSocialAccounts } from '@/data/socialFeeds';

const SYNC_SECRET = process.env.SOCIAL_SYNC_SECRET || 'arawindhan-social-sync-2026';
const DATA_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'dynamic_social_posts.json');

function readDynamicPosts(): SocialPostItem[] {
  try {
    if (fs.existsSync(DATA_FILE_PATH)) {
      const fileData = fs.readFileSync(DATA_FILE_PATH, 'utf-8');
      return JSON.parse(fileData);
    }
  } catch (err) {
    console.error('Error reading dynamic_social_posts.json:', err);
  }
  return [];
}

function saveDynamicPosts(posts: SocialPostItem[]): void {
  try {
    // Keep max 25 recent dynamic posts
    const trimmed = posts.slice(0, 25);
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(trimmed, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing dynamic_social_posts.json:', err);
  }
}

/**
 * Webhook receiver to automatically ingest new posts from Instagram, LinkedIn, or YouTube
 * Triggered by Zapier, Make.com, IFTTT, or a custom webhook whenever you post.
 */
export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization');
    const secretHeader = req.headers.get('x-social-sync-secret');
    const urlSecret = req.nextUrl.searchParams.get('secret');

    const providedSecret = secretHeader || urlSecret || (authHeader ? authHeader.replace(/^Bearer\s+/i, '') : null);

    if (providedSecret !== SYNC_SECRET) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized. Invalid or missing sync secret.' },
        { status: 401 }
      );
    }

    const body = await req.json();

    // Extract fields with full Make.com / Integromat / Zapier compatibility
    const rawUrl = body.url || body.permalink || body.link || body.shareUrl || body.postUrl || '';
    const rawContent = body.content || body.caption || body.text || body.message || body.title || 'New executive dispatch';
    const rawTitle = body.title || (typeof rawContent === 'string' && rawContent.length > 70 ? rawContent.slice(0, 70) + '...' : rawContent);
    const rawMediaUrl = body.mediaUrl || body.media_url || body.imageUrl || body.image_url || body.thumbnail_url || null;

    // Smart platform detection if not explicitly passed
    let platform = (body.platform || '').toLowerCase();
    if (!platform) {
      if (rawUrl.includes('instagram.com') || body.media_type) platform = 'instagram';
      else if (rawUrl.includes('linkedin.com')) platform = 'linkedin';
      else if (rawUrl.includes('youtube.com') || rawUrl.includes('youtu.be')) platform = 'youtube';
      else platform = 'instagram'; // default
    }

    if (!['instagram', 'linkedin', 'youtube'].includes(platform)) {
      return NextResponse.json(
        { success: false, error: 'Platform must be "instagram", "linkedin", or "youtube".' },
        { status: 400 }
      );
    }

    const postPlatform = platform as 'instagram' | 'linkedin' | 'youtube';

    // Metrics formatting (likes & comments count)
    let metrics = body.metrics;
    if (!metrics && (body.like_count !== undefined || body.likes !== undefined)) {
      metrics = {
        likes: String(body.like_count || body.likes || '0'),
        comments: String(body.comments_count || body.comments || '0'),
      };
    }

    const formattedPost: SocialPostItem = {
      id: `dyn-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      platform: postPlatform,
      title: typeof rawTitle === 'object' ? rawTitle : { en: rawTitle, ta: rawTitle },
      content: typeof rawContent === 'object' ? rawContent : { en: rawContent, ta: rawContent },
      url: rawUrl || officialSocialAccounts[postPlatform].url,
      date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      author: {
        name: officialSocialAccounts[postPlatform].name,
        handle: officialSocialAccounts[postPlatform].handle,
        avatarUrl: '/images/arawindhan_blue_shirt.jpg',
      },
      mediaType: rawMediaUrl ? 'image' : undefined,
      mediaUrl: rawMediaUrl || (postPlatform === 'instagram' ? '/images/heguru_center.jpg' : '/images/institutions/human_intelligence_ai_education.webp'),
      tag: typeof body.tag === 'object' ? body.tag : {
        en: body.tag || (postPlatform === 'instagram' ? 'Instagram Dispatch' : postPlatform === 'linkedin' ? 'LinkedIn Article' : 'YouTube Broadcast'),
        ta: body.tag || (postPlatform === 'instagram' ? 'இன்ஸ்டாகிராம் பதிவு' : postPlatform === 'linkedin' ? 'லிங்க்ட்இன் சிந்தனை' : 'யூடியூப் உரை'),
      },
      metrics: metrics || undefined,
      featured: false,
    };

    // Prepend to dynamic posts store so newest appears first
    const existing = readDynamicPosts();
    // Prevent duplicate URLs
    const filtered = existing.filter((p) => p.url !== formattedPost.url);
    const updated = [formattedPost, ...filtered];
    saveDynamicPosts(updated);

    // Instant Next.js ISR revalidation
    try {
      revalidatePath('/en');
      revalidatePath('/ta');
      revalidatePath('/');
    } catch (e) {
      // Ignored in non-production environments
    }

    return NextResponse.json({
      success: true,
      message: `Successfully ingested new ${postPlatform} post.`,
      post: formattedPost,
      totalDynamicPosts: updated.length,
    });
  } catch (error: any) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error processing webhook payload.', details: error.message },
      { status: 500 }
    );
  }
}

/**
 * Health check & setup instructions
 */
export async function GET() {
  const posts = readDynamicPosts();
  return NextResponse.json({
    status: 'online',
    endpoint: '/api/social/webhook',
    instructions: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-social-sync-secret': 'YOUR_SECRET (default: arawindhan-social-sync-2026)',
      },
      payloadExample: {
        platform: 'instagram',
        title: 'Heguru Centre Inauguration & Early Neuroplasticity',
        content: 'Decades of research brought to our 10+ South India centres...',
        url: 'https://www.instagram.com/p/CXYZ1234/',
        mediaUrl: 'https://... (optional image link)',
        tag: 'Heguru Neuroplasticity',
      },
    },
    currentDynamicPostsCount: posts.length,
  });
}
