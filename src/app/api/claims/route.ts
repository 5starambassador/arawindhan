import { NextResponse } from 'next/server';
import { MASTER_CLAIMS } from '@/data/claims';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const query = searchParams.get('q');
    const category = searchParams.get('category');

    let results = [...MASTER_CLAIMS];

    if (status) {
      results = results.filter((c) => c.verificationStatus.toLowerCase() === status.toLowerCase());
    }

    if (category) {
      results = results.filter((c) => c.category.toLowerCase().includes(category.toLowerCase()));
    }

    if (query) {
      const q = query.toLowerCase();
      results = results.filter(
        (c) =>
          c.id.toLowerCase().includes(q) ||
          c.statement.toLowerCase().includes(q) ||
          c.sourceDocument.toLowerCase().includes(q)
      );
    }

    return NextResponse.json({
      success: true,
      total: results.length,
      claims: results,
    });
  } catch (error) {
    console.error('[API CLAIMS ERROR]:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve claims register.' },
      { status: 500 }
    );
  }
}
