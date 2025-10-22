import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost, BlogPostMeta, CreateBlogPostData, BlogFilters, BlogResponse } from '@/types/blog';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

// Ensure blog directory exists
export function ensureBlogDir() {
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true });
  }
}

// Generate slug from title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Calculate reading time (words per minute)
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

// Generate unique ID
export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Get all blog posts
export function getAllBlogPosts(): BlogPostMeta[] {
  ensureBlogDir();
  
  try {
    const files = fs.readdirSync(BLOG_DIR);
    const posts = files
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const filePath = path.join(BLOG_DIR, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContent);
        
        return {
          id: data.id || file.replace('.md', ''),
          title: data.title || 'Untitled',
          slug: data.slug || generateSlug(data.title || 'untitled'),
          excerpt: data.excerpt || '',
          author: data.author || 'TatsTech',
          publishedAt: data.publishedAt || new Date().toISOString(),
          updatedAt: data.updatedAt,
          tags: data.tags || [],
          category: data.category || 'General',
          featured: data.featured || false,
          published: data.published !== false, // Default to true
          readingTime: data.readingTime || 1,
          coverImage: data.coverImage,
          backgroundImage: data.backgroundImage,
          likes: data.likes || 0,
          views: data.views || 0
        } as BlogPostMeta;
      })
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    
    return posts;
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

// Get blog post by slug or ID
export function getBlogPostBySlug(slugOrId: string): BlogPost | null {
  ensureBlogDir();
  
  try {
    const files = fs.readdirSync(BLOG_DIR);
    const file = files.find(f => {
      const filePath = path.join(BLOG_DIR, f);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);
      const fileId = data.id || f.replace('.md', '');
      
      // Check by slug, generated slug from title, or ID
      return data.slug === slugOrId || 
             generateSlug(data.title || '') === slugOrId ||
             fileId === slugOrId;
    });
    
    if (!file) return null;
    
    const filePath = path.join(BLOG_DIR, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    
    return {
      id: data.id || file.replace('.md', ''),
      title: data.title || 'Untitled',
      slug: data.slug || generateSlug(data.title || 'untitled'),
      excerpt: data.excerpt || '',
      content,
      author: data.author || 'TatsTech',
      publishedAt: data.publishedAt || new Date().toISOString(),
      updatedAt: data.updatedAt,
      tags: data.tags || [],
      category: data.category || 'General',
      featured: data.featured || false,
      published: data.published !== false,
      readingTime: calculateReadingTime(content),
      coverImage: data.coverImage,
      backgroundImage: data.backgroundImage,
      likes: data.likes || 0,
      views: data.views || 0
    } as BlogPost;
  } catch (error) {
    console.error('Error reading blog post:', error);
    return null;
  }
}

// Create new blog post
export function createBlogPost(postData: CreateBlogPostData): BlogPost {
  ensureBlogDir();
  
  const id = generateId();
  const slug = generateSlug(postData.title);
  const now = new Date().toISOString();
  const readingTime = calculateReadingTime(postData.content);
  
  const frontmatter: Record<string, any> = {
    id,
    title: postData.title,
    slug,
    excerpt: postData.excerpt || '',
    author: 'TatsTech',
    publishedAt: now,
    tags: postData.tags || [],
    category: postData.category || 'General',
    featured: postData.featured || false,
    published: postData.published !== false,
    readingTime,
    likes: 0,
    views: 0
  };

  // Only add coverImage if it exists and is not empty
  if (postData.coverImage && postData.coverImage.trim()) {
    frontmatter.coverImage = postData.coverImage.trim();
  }

  // Only add backgroundImage if it exists and is not empty
  if (postData.backgroundImage && postData.backgroundImage.trim()) {
    frontmatter.backgroundImage = postData.backgroundImage.trim();
  }
  
  const fileContent = matter.stringify(postData.content, frontmatter);
  const fileName = `${slug}-${id}.md`;
  const filePath = path.join(BLOG_DIR, fileName);
  
  fs.writeFileSync(filePath, fileContent);
  
  return {
    ...frontmatter,
    content: postData.content
  } as BlogPost;
}

// Update blog post
export function updateBlogPost(id: string, updates: Partial<CreateBlogPostData>): BlogPost | null {
  ensureBlogDir();
  
  try {
    const files = fs.readdirSync(BLOG_DIR);
    const file = files.find(f => {
      const filePath = path.join(BLOG_DIR, f);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);
      const fileId = data.id || f.replace('.md', '');
      return fileId === id;
    });
    
    if (!file) return null;
    
    const filePath = path.join(BLOG_DIR, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    
    const updatedData: Record<string, any> = {
      ...data,
      updatedAt: new Date().toISOString(),
      readingTime: updates.content ? calculateReadingTime(updates.content) : data.readingTime
    };

    // Only add non-undefined values from updates
    Object.keys(updates).forEach(key => {
      const value = (updates as any)[key];
      if (value !== undefined) {
        if (key === 'coverImage' && (!value || !value.trim())) {
          // Remove coverImage if it's empty
          delete updatedData.coverImage;
        } else if (key === 'backgroundImage' && (!value || !value.trim())) {
          // Remove backgroundImage if it's empty
          delete updatedData.backgroundImage;
        } else {
          updatedData[key] = value;
        }
      }
    });
    
    if (updates.title && updates.title !== data.title) {
      updatedData.slug = generateSlug(updates.title);
    }
    
    const updatedContent = updates.content || content;
    const newFileContent = matter.stringify(updatedContent, updatedData);
    
    // If slug changed, rename file
    if (updatedData.slug !== data.slug) {
      const newFileName = `${updatedData.slug}-${id}.md`;
      const newFilePath = path.join(BLOG_DIR, newFileName);
      fs.writeFileSync(newFilePath, newFileContent);
      fs.unlinkSync(filePath);
    } else {
      fs.writeFileSync(filePath, newFileContent);
    }
    
    return {
      ...updatedData,
      content: updatedContent
    } as BlogPost;
  } catch (error) {
    console.error('Error updating blog post:', error);
    return null;
  }
}

// Delete blog post
export function deleteBlogPost(id: string): boolean {
  ensureBlogDir();
  
  try {
    const files = fs.readdirSync(BLOG_DIR);
    const file = files.find(f => {
      const filePath = path.join(BLOG_DIR, f);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);
      const fileId = data.id || f.replace('.md', '');
      return fileId === id;
    });
    
    if (!file) return false;
    
    const filePath = path.join(BLOG_DIR, file);
    fs.unlinkSync(filePath);
    return true;
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return false;
  }
}

// Filter and paginate blog posts
export function getBlogPosts(
  filters: BlogFilters = {},
  page: number = 1,
  limit: number = 10
): BlogResponse {
  let posts = getAllBlogPosts();
  
  // Apply filters
  if (filters.published !== undefined) {
    posts = posts.filter(post => post.published === filters.published);
  }
  
  if (filters.featured !== undefined) {
    posts = posts.filter(post => post.featured === filters.featured);
  }
  
  if (filters.category) {
    posts = posts.filter(post => 
      post.category.toLowerCase() === filters.category!.toLowerCase()
    );
  }
  
  if (filters.tag) {
    posts = posts.filter(post => 
      post.tags.some(tag => tag.toLowerCase() === filters.tag!.toLowerCase())
    );
  }
  
  if (filters.author) {
    posts = posts.filter(post => 
      post.author.toLowerCase() === filters.author!.toLowerCase()
    );
  }
  
  // Pagination
  const total = posts.length;
  const totalPages = Math.ceil(total / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedPosts = posts.slice(startIndex, endIndex);
  
  return {
    posts: paginatedPosts,
    pagination: {
      page,
      limit,
      total,
      totalPages
    }
  };
}

// Get all categories
export function getAllCategories(): string[] {
  const posts = getAllBlogPosts();
  const categories = [...new Set(posts.map(post => post.category))];
  return categories.sort();
}

// Get all tags
export function getAllTags(): string[] {
  const posts = getAllBlogPosts();
  const tags = [...new Set(posts.flatMap(post => post.tags))];
  return tags.sort();
}

// Increment view count for a blog post
export function incrementViews(slugOrId: string): boolean {
  ensureBlogDir();
  
  try {
    const files = fs.readdirSync(BLOG_DIR);
    const file = files.find(f => {
      const filePath = path.join(BLOG_DIR, f);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);
      const fileId = data.id || f.replace('.md', '');
      
      return data.slug === slugOrId || 
             generateSlug(data.title || '') === slugOrId ||
             fileId === slugOrId;
    });
    
    if (!file) return false;
    
    const filePath = path.join(BLOG_DIR, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    
    // Increment views
    const updatedData = {
      ...data,
      views: (data.views || 0) + 1
    };
    
    const newFileContent = matter.stringify(content, updatedData);
    fs.writeFileSync(filePath, newFileContent);
    
    return true;
  } catch (error) {
    console.error('Error incrementing views:', error);
    return false;
  }
}

// Toggle like for a blog post
export function toggleLike(slugOrId: string): { liked: boolean; likes: number } | null {
  ensureBlogDir();
  
  try {
    const files = fs.readdirSync(BLOG_DIR);
    const file = files.find(f => {
      const filePath = path.join(BLOG_DIR, f);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);
      const fileId = data.id || f.replace('.md', '');
      
      return data.slug === slugOrId || 
             generateSlug(data.title || '') === slugOrId ||
             fileId === slugOrId;
    });
    
    if (!file) return null;
    
    const filePath = path.join(BLOG_DIR, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    
    // For simplicity, we'll just increment likes (in a real app, you'd track user likes)
    const currentLikes = data.likes || 0;
    const newLikes = currentLikes + 1;
    
    const updatedData = {
      ...data,
      likes: newLikes
    };
    
    const newFileContent = matter.stringify(content, updatedData);
    fs.writeFileSync(filePath, newFileContent);
    
    return { liked: true, likes: newLikes };
  } catch (error) {
    console.error('Error toggling like:', error);
    return null;
  }
}
