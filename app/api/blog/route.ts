import { NextRequest, NextResponse } from 'next/server';
import { getBlogPosts, createBlogPost, getAllCategories, getAllTags } from '@/lib/blog';
import { CreateBlogPostData } from '@/types/blog';

// GET /api/blog - Get all blog posts with filtering and pagination
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const category = searchParams.get('category') || undefined;
    const tag = searchParams.get('tag') || undefined;
    const author = searchParams.get('author') || undefined;
    const published = searchParams.get('published') ? 
      searchParams.get('published') === 'true' : undefined;
    const featured = searchParams.get('featured') ? 
      searchParams.get('featured') === 'true' : undefined;
    
    // Special endpoint for metadata
    if (searchParams.get('metadata') === 'true') {
      const categories = getAllCategories();
      const tags = getAllTags();
      return NextResponse.json({ categories, tags });
    }
    
    const result = getBlogPosts(
      { category, tag, author, published, featured },
      page,
      limit
    );
    
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}

// POST /api/blog - Create new blog post
export async function POST(request: NextRequest) {
  try {
    console.log('POST /api/blog called');
    const body = await request.json();
    console.log('Request body:', { 
      title: body.title, 
      contentLength: body.content?.length,
      hasContent: !!body.content 
    });
    
    // Basic validation
    if (!body.title || !body.content) {
      console.log('Validation failed:', { title: !!body.title, content: !!body.content });
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      );
    }
    
    const postData: CreateBlogPostData = {
      title: body.title,
      content: body.content,
      excerpt: body.excerpt || '', // Don't auto-generate excerpt
      tags: body.tags || [],
      category: body.category || 'General',
      featured: body.featured || false,
      published: body.published !== false, // Default to true
      coverImage: body.coverImage,
      backgroundImage: body.backgroundImage
    };
    
    const newPost = createBlogPost(postData);
    
    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    );
  }
}
