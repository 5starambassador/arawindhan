import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { SocialPostItem } from '@/types';
import { curatedSocialPosts } from '@/data/socialFeeds';
import { getLatestYouTubeVideos } from '@/lib/youtube';

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

export async function GET() {
  try {
    // 1. Dynamic Webhook posts (Instagram, LinkedIn, etc.)
    const dynamicPosts = readDynamicPosts();

    // 2. Live YouTube posts from RSS feed
    const ytVideos = await getLatestYouTubeVideos();
    const ytPosts: SocialPostItem[] = ytVideos.map((v, index) => ({
      id: `yt-live-${v.id}`,
      platform: 'youtube',
      youtubeId: v.id,
      title: v.title,
      content: v.description,
      url: `https://www.youtube.com/watch?v=${v.id}`,
      date: v.publishedAt || 'Recent',
      author: {
        name: 'Arawindhan Official',
        handle: '@ArawindhanOfficial',
        avatarUrl: '/images/arawindhan_blue_shirt.jpg',
      },
      tag: v.category || { en: 'YouTube Broadcast', ta: 'காணொளி உரை' },
      mediaType: 'video',
      mediaUrl: `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`,
      featured: index === 0,
    }));

    // 3. Static Curated non-YouTube baseline (seed Instagram & LinkedIn posts)
    const curatedNonYt = curatedSocialPosts.filter((p) => p.platform !== 'youtube');

    // Combine: Dynamic webhook posts first, then YouTube, then curated baseline (avoiding duplicate URLs)
    const combined: SocialPostItem[] = [...dynamicPosts];

    for (const post of [...ytPosts, ...curatedNonYt]) {
      if (!combined.some((item) => item.url === post.url || (item.youtubeId && item.youtubeId === post.youtubeId))) {
        combined.push(post);
      }
    }

    return NextResponse.json({
      success: true,
      count: combined.length,
      posts: combined,
    });
  } catch (error: any) {
    console.error('Error in /api/social/latest:', error);
    return NextResponse.json({
      success: true,
      count: curatedSocialPosts.length,
      posts: curatedSocialPosts,
    });
  }
}
