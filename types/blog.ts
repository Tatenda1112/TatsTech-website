export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  category: string;
  featured: boolean;
  published: boolean;
  readingTime: number;
  coverImage?: string;
  backgroundImage?: string;
  likes: number;
  views: number;
}

export interface BlogPostMeta {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  category: string;
  featured: boolean;
  published: boolean;
  readingTime: number;
  coverImage?: string;
  backgroundImage?: string;
  likes: number;
  views: number;
}

export interface CreateBlogPostData {
  title: string;
  content: string;
  excerpt: string;
  tags: string[];
  category: string;
  featured?: boolean;
  published?: boolean;
  coverImage?: string;
  backgroundImage?: string;
}

export interface UpdateBlogPostData extends Partial<CreateBlogPostData> {
  id: string;
}

export interface BlogFilters {
  category?: string;
  tag?: string;
  author?: string;
  published?: boolean;
  featured?: boolean;
}

export interface BlogPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface BlogResponse {
  posts: BlogPostMeta[];
  pagination: BlogPagination;
}
