import { NextRequest, NextResponse } from 'next/server';
import { toggleLike } from '@/lib/blog';

// POST /api/blog/[id]/likes - Toggle like for a blog post
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const result = toggleLike(params.id);
    
    if (!result) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error toggling like:', error);
    return NextResponse.json(
      { error: 'Failed to toggle like' },
      { status: 500 }
    );
  }
}
