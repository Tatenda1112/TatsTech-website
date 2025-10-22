'use client';

import { useState, useEffect } from 'react';
import { BlogPost } from '@/types/blog';
import { Calendar, User, Clock, Tag, Share2, List, Star, Eye, Heart, ThumbsUp } from 'lucide-react';
import { motion } from 'framer-motion';
import SimpleContentRenderer from './SimpleContentRenderer';

interface EnhancedBlogPostProps {
  post: BlogPost;
}

interface TableOfContentsItem {
  id: string;
  text: string;
  level: number;
}

const EnhancedBlogPost = ({ post }: EnhancedBlogPostProps) => {
  const [showTOC, setShowTOC] = useState(false);
  const [tableOfContents, setTableOfContents] = useState<TableOfContentsItem[]>([]);
  const [activeSection, setActiveSection] = useState<string>('');
  const [likes, setLikes] = useState(post.likes || 0);
  const [views, setViews] = useState(post.views || 0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    // Generate table of contents from content
    generateTableOfContents();
    
    // Increment view count when component mounts
    incrementViewCount();
    
    // Set up intersection observer for active section tracking
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -35% 0px' }
    );

    // Observe all headings
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, [post.content]);

  const incrementViewCount = async () => {
    try {
      const response = await fetch(`/api/blog/${post.slug}/views`, {
        method: 'POST',
      });
      if (response.ok) {
        setViews(prev => prev + 1);
      }
    } catch (error) {
      console.error('Error incrementing view count:', error);
    }
  };

  const handleLike = async () => {
    try {
      const response = await fetch(`/api/blog/${post.slug}/likes`, {
        method: 'POST',
      });
      if (response.ok) {
        const result = await response.json();
        setLikes(result.likes);
        setHasLiked(true);
      }
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const generateTableOfContents = () => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = post.content;
    
    const headings = tempDiv.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const toc: TableOfContentsItem[] = [];

    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      const text = heading.textContent || '';
      const id = `heading-${index}`;
      
      // Add ID to the actual heading in the content
      heading.id = id;
      
      toc.push({ id, text, level });
    });

    setTableOfContents(toc);
    
    // Update the post content with IDs
    const updatedContent = tempDiv.innerHTML;
    // Note: In a real implementation, you'd want to update the content rendering
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleShare = async () => {
    const url = window.location.href;
    const title = post.title;
    const text = post.excerpt;

    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
      } catch (error) {
        console.log('Error sharing:', error);
        // Fallback to copy
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
      }
    } else {
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const backgroundStyle = post.backgroundImage ? {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(${post.backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  } : {};

  return (
    <div className="min-h-screen" style={backgroundStyle}>
      <article className="max-w-4xl mx-auto px-4 py-8 relative">
        {/* TOC Control */}
        {tableOfContents.length > 0 && (
          <div className="fixed top-20 right-4 z-50 bg-white rounded-lg shadow-lg p-3">
            <button
              onClick={() => setShowTOC(!showTOC)}
              className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm"
            >
              <List size={16} />
              TOC
            </button>
          </div>
        )}

        {/* Table of Contents Sidebar */}
        {showTOC && tableOfContents.length > 0 && (
          <div className="fixed top-32 right-4 w-64 bg-white rounded-lg shadow-lg p-4 max-h-96 overflow-y-auto z-40">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <List size={16} />
              Table of Contents
            </h3>
            <nav className="space-y-1">
              {tableOfContents.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-2 py-1 rounded text-sm transition-colors ${
                    activeSection === item.id
                      ? 'bg-green-100 text-green-800 font-medium'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  style={{ paddingLeft: `${(item.level - 1) * 12 + 8}px` }}
                >
                  {item.text}
                </button>
              ))}
            </nav>
          </div>
        )}

        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-white/50">
          {/* Cover Image */}
          {post.coverImage && (
            <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              
              {/* Featured badge on cover */}
              {post.featured && (
                <div className="absolute top-6 right-6">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                    <Star className="w-4 h-4" />
                    FEATURED
                  </span>
                </div>
              )}
            </div>
          )}

          <div className="p-10">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm mb-8">
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full">
                <User size={16} className="text-gray-500" />
                <span className="font-medium text-gray-700">{post.author}</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full">
                <Calendar size={16} className="text-gray-500" />
                <span className="font-medium text-gray-700">{formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-2 bg-green-100 px-3 py-2 rounded-full">
                <Clock size={16} className="text-green-600" />
                <span className="font-medium text-green-700">{post.readingTime} min read</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-100 px-3 py-2 rounded-full">
                <Eye size={16} className="text-blue-600" />
                <span className="font-medium text-blue-700">{views} views</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-2 rounded-full">
                <Tag size={16} />
                <span className="font-medium">{post.category}</span>
              </div>
            </div>

            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight"
            >
              {post.title}
            </motion.h1>

            {/* Excerpt */}
            {post.excerpt && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-2xl border-l-4 border-blue-500 mb-8"
              >
                <p className="text-xl text-gray-700 leading-relaxed font-medium italic">
                  "{post.excerpt}"
                </p>
              </motion.div>
            )}

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-10"
              >
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Topics Covered</h3>
                <div className="flex flex-wrap gap-3">
                  {post.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium hover:shadow-lg transition-shadow duration-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <SimpleContentRenderer content={post.content} />
            </motion.div>

            {/* Like Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h3 className="text-lg font-semibold text-gray-900">Did you enjoy this article?</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Eye size={16} />
                    <span>{views} views</span>
                  </div>
                </div>
                <button
                  onClick={handleLike}
                  disabled={hasLiked}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    hasLiked 
                      ? 'bg-red-500 text-white cursor-not-allowed' 
                      : 'bg-white text-gray-700 hover:bg-red-500 hover:text-white hover:scale-105 shadow-md hover:shadow-lg'
                  }`}
                >
                  <Heart size={20} className={hasLiked ? 'fill-current' : ''} />
                  <span>{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
                </button>
              </div>
            </motion.div>

            {/* Footer */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  {post.updatedAt && (
                    <p>Last updated: {formatDate(post.updatedAt)}</p>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleShare()}
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
                  >
                    <Share2 size={16} />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default EnhancedBlogPost;
