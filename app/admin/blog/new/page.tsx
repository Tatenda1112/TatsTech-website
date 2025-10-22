'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { ArrowLeft, Save, Eye, Image, Tag, Folder, Star, Type } from 'lucide-react';
import { useRouter } from 'next/navigation';
import SimpleRichTextEditor from '@/components/SimpleRichTextEditor';
import ImageSuggestions from '@/components/ImageSuggestions';

const NewBlogPostPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);
  
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    category: '',
    newCategory: '',
    tags: [] as string[],
    newTag: '',
    featured: false,
    published: true,
    coverImage: '',
    backgroundImage: ''
  });
  
  const [editorFontSize, setEditorFontSize] = useState(16);

  useEffect(() => {
    if (status === 'loading') return;
    
    if (!session) {
      router.push('/auth/login');
      return;
    }

    fetchMetadata();
  }, [session, status, router]);

  const fetchMetadata = async () => {
    try {
      const response = await fetch('/api/blog?metadata=true');
      const data = await response.json();
      setCategories(data.categories || []);
      setAllTags(data.tags || []);
    } catch (error) {
      console.error('Error fetching metadata:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleAddTag = () => {
    if (formData.newTag.trim() && !formData.tags.includes(formData.newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, prev.newTag.trim()],
        newTag: ''
      }));
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.content.trim()) {
      alert('Title and content are required');
      return;
    }

    setSaving(true);
    
    try {
      const category = formData.newCategory.trim() || formData.category;
      
      const postData = {
        title: formData.title.trim(),
        content: formData.content.trim(),
        excerpt: formData.excerpt.trim() || '', // Don't auto-generate, leave empty if not provided
        category,
        tags: formData.tags,
        featured: formData.featured,
        published: formData.published,
        coverImage: formData.coverImage.trim() || undefined,
        backgroundImage: formData.backgroundImage.trim() || undefined
      };

      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        const newPost = await response.json();
        router.push('/admin/blog');
      } else {
        const error = await response.json();
        alert(error.error || 'Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Error creating post');
    } finally {
      setSaving(false);
    }
  };

  const handlePreview = () => {
    // Store form data in sessionStorage for preview
    sessionStorage.setItem('blogPreview', JSON.stringify(formData));
    window.open('/admin/blog/preview', '_blank');
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => router.back()}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
              >
                <ArrowLeft size={20} />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Create New Blog Post</h1>
                <p className="text-gray-600">Write and publish your blog post</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePreview}
                className="inline-flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors font-medium min-h-[44px] touch-manipulation"
              >
                <Eye size={18} />
                Preview
              </button>
              <button
                type="submit"
                form="blog-form"
                disabled={saving}
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium min-h-[44px] touch-manipulation disabled:opacity-50"
              >
                <Save size={18} />
                {saving ? 'Saving...' : 'Save Post'}
              </button>
            </div>
          </div>
        </div>

        <form id="blog-form" onSubmit={handleSubmit} className="space-y-8">
          {/* Main Content */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="space-y-6">
              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter your blog post title..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg font-medium min-h-[48px]"
                  required
                />
              </div>

              {/* Excerpt */}
              <div>
                <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
                  Excerpt
                </label>
                <textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleInputChange}
                  placeholder="Brief description of your post (optional - leave empty to skip)..."
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-vertical"
                />
              </div>

              {/* Content */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                    Content *
                  </label>
                  <div className="flex items-center gap-2">
                    <Type size={16} className="text-gray-500" />
                    <button
                      type="button"
                      onClick={() => setEditorFontSize(Math.max(12, editorFontSize - 1))}
                      className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded text-sm font-bold transition-colors"
                    >
                      A-
                    </button>
                    <span className="text-sm font-medium text-gray-600 min-w-[40px] text-center">{editorFontSize}px</span>
                    <button
                      type="button"
                      onClick={() => setEditorFontSize(Math.min(24, editorFontSize + 1))}
                      className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded text-sm font-bold transition-colors"
                    >
                      A+
                    </button>
                  </div>
                </div>
                <div style={{ fontSize: `${editorFontSize}px` }}>
                  <SimpleRichTextEditor
                    value={formData.content}
                    onChange={(content) => setFormData(prev => ({ ...prev, content }))}
                    placeholder="Write your blog post content here... Use the toolbar for formatting!"
                    height="500px"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Use the toolbar above for formatting: <strong>Bold</strong>, <em>Italic</em>, Headers, Lists, Links, and more!
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar Settings */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Images */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
                  <Image size={20} />
                  Images
                </h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="coverImage" className="block text-sm font-medium text-gray-700 mb-2">
                      Cover Image URL
                    </label>
                    <input
                      type="url"
                      id="coverImage"
                      name="coverImage"
                      value={formData.coverImage}
                      onChange={handleInputChange}
                      placeholder="https://example.com/cover-image.jpg"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent min-h-[48px]"
                    />
                    <p className="text-sm text-gray-500 mt-1">Main image shown at the top of the post</p>
                  </div>
                  
                  <div>
                    <label htmlFor="backgroundImage" className="block text-sm font-medium text-gray-700 mb-2">
                      Background Image URL
                    </label>
                    <input
                      type="url"
                      id="backgroundImage"
                      name="backgroundImage"
                      value={formData.backgroundImage}
                      onChange={handleInputChange}
                      placeholder="https://example.com/background-image.jpg"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent min-h-[48px]"
                    />
                    <p className="text-sm text-gray-500 mt-1">Optional background image for the entire post</p>
                  </div>
                </div>
                
                <ImageSuggestions 
                  type="cover" 
                  onSelectImage={(url) => setFormData(prev => ({ ...prev, coverImage: url }))} 
                />
                
                <ImageSuggestions 
                  type="background" 
                  onSelectImage={(url) => setFormData(prev => ({ ...prev, backgroundImage: url }))} 
                />
              </div>
            </div>

            <div className="space-y-6">
              {/* Publish Settings */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Publish Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="published"
                      name="published"
                      checked={formData.published}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor="published" className="ml-2 text-sm text-gray-700">
                      Publish immediately
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="featured"
                      name="featured"
                      checked={formData.featured}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor="featured" className="ml-2 text-sm text-gray-700 flex items-center gap-1">
                      <Star size={14} />
                      Featured post
                    </label>
                  </div>
                </div>
              </div>

              {/* Category */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
                  <Folder size={20} />
                  Category
                </h3>
                <div className="space-y-3">
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent min-h-[48px]"
                  >
                    <option value="">Select category</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  <div>
                    <input
                      type="text"
                      name="newCategory"
                      value={formData.newCategory}
                      onChange={handleInputChange}
                      placeholder="Or create new category..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent min-h-[48px]"
                    />
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
                  <Tag size={20} />
                  Tags
                </h3>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      name="newTag"
                      value={formData.newTag}
                      onChange={handleInputChange}
                      placeholder="Add tag..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent min-h-[44px]"
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                    />
                    <button
                      type="button"
                      onClick={handleAddTag}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors min-h-[44px] touch-manipulation"
                    >
                      Add
                    </button>
                  </div>
                  
                  {formData.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {formData.tags.map(tag => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() => handleRemoveTag(tag)}
                            className="text-blue-600 hover:text-blue-800 ml-1"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {allTags.length > 0 && (
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Existing tags:</p>
                      <div className="flex flex-wrap gap-1">
                        {allTags.filter(tag => !formData.tags.includes(tag)).slice(0, 10).map(tag => (
                          <button
                            key={tag}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, tags: [...prev.tags, tag] }))}
                            className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
                          >
                            + {tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewBlogPostPage;
