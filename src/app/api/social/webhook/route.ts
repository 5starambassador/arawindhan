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
    const { platform, title, content, caption, url, mediaUrl, imageUrl, tag, metrics } = body;

    if (!platform || !['instagram', 'linkedin', 'youtube'].includes(platform.toLowerCase())) {
      return NextResponse.json(
        { success: false, error: 'Platform must be "instagram", "linkedin", or "youtube".' },
        { status: 400 }
      );
    }

    const postPlatform = platform.toLowerCase() as 'instagram' | 'linkedin' | 'youtube';
    const textContent = content || caption || title || 'New executive dispatch';
    const postTitle = title || (textContent.length > 60 ? textContent.slice(0, 60) + '...' : textContent);
    const postMediaUrl = mediaUrl || imageUrl || null;

    const formattedPost: SocialPostItem = {
      id: `dyn-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      platform: postPlatform,
      title: typeof postTitle === 'object' ? postTitle : { en: postTitle, ta: postTitle },
      content: typeof textContent === 'object' ? textContent : { en: textContent, ta: textContent },
      url: url || officialSocialAccounts[postPlatform].url,
      date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      author: {
        name: officialSocialAccounts[postPlatform].name,
        handle: officialSocialAccounts[postPlatform].handle,
        avatarUrl: '/images/arawindhan_blue_shirt.jpg',
      },
      mediaType: postMediaUrl ? 'image' : undefined,
      mediaUrl: postMediaUrl || (postPlatform === 'instagram' ? '/images/heguru_center.jpg' : '/images/institutions/human_intelligence_ai_education.webp'),
      tag: typeof tag === 'object' ? tag : {
        en: tag || (postPlatform === 'instagram' ? 'Instagram Dispatch' : postPlatform === 'linkedin' ? 'LinkedIn Article' : 'YouTube Broadcast'),
        ta: tag || (postPlatform === 'instagram' ? 'இன்ஸ்டாகிராம் பதிவு' : postPlatform === 'linkedin' ? 'லிங்க்ட்இன் சிந்தனை' : 'யூடியூப் உரை'),
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
