import { NextResponse } from 'next/server';
import { getLatestYouTubeVideos } from '@/lib/youtube';
import { youtubeChannelInfo } from '@/data/videos';

export async function GET() {
  try {
    const videos = await getLatestYouTubeVideos();
    return NextResponse.json({
      success: true,
      channel: youtubeChannelInfo,
      count: videos.length,
      videos,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch YouTube videos' },
      { status: 500 }
    );
  }
}
