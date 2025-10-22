'use client';

import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ReactNode } from 'react';
import { ArrowLeft, Calendar, Clock, Tag, User } from 'lucide-react';

const BlogPreviewPage = () => {
  const [previewData, setPreviewData] = useState<any>(null);

  useEffect(() => {
    const data = sessionStorage.getItem('blogPreview');
    if (data) {
      setPreviewData(JSON.parse(data));
    }
  }, []);

  if (!previewData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">No preview data available</p>
          <button
            onClick={() => window.close()}
            className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  const estimatedReadingTime = Math.ceil(previewData.content.split(' ').length / 200);

  const backgroundStyle = previewData.backgroundImage ? {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(${previewData.backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  } : {};

  return (
    <div className="min-h-screen bg-gray-50" style={backgroundStyle}>
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => window.close()}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <div>
                <h1 className="font-semibold text-gray-900">Blog Preview</h1>
                <p className="text-sm text-gray-600">
                  Status: {previewData.published ? 'Published' : 'Draft'}
                  {previewData.featured && ' • Featured'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-sm overflow-hidden">
          {/* Cover Image */}
          {previewData.coverImage && (
            <div className="aspect-video bg-gray-200">
              <img
                src={previewData.coverImage}
                alt={previewData.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          )}

          <div className="p-8">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-1">
                <User size={16} />
                <span>TatsTech</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>{estimatedReadingTime} min read</span>
              </div>
              {previewData.category && (
                <div className="flex items-center gap-1">
                  <Tag size={16} />
                  <span>{previewData.category}</span>
                </div>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {previewData.title}
            </h1>

            {/* Excerpt */}
            {previewData.excerpt && (
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {previewData.excerpt}
              </p>
            )}

            {/* Tags */}
            {previewData.tags && previewData.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {previewData.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {previewData.content && previewData.content.includes('<') ? (
                // Content is HTML from rich text editor
                <>
                  <style jsx>{`
                    .prose-content {
                      line-height: 1.7;
                      color: #374151;
                    }
                    .prose-content h1 {
                      font-size: 2rem;
                      font-weight: bold;
                      color: #111827;
                      margin-top: 2rem;
                      margin-bottom: 1rem;
                    }
                    .prose-content h2 {
                      font-size: 1.5rem;
                      font-weight: bold;
                      color: #111827;
                      margin-top: 2rem;
                      margin-bottom: 1rem;
                    }
                    .prose-content h3 {
                      font-size: 1.25rem;
                      font-weight: bold;
                      color: #111827;
                      margin-top: 1.5rem;
                      margin-bottom: 0.75rem;
                    }
                    .prose-content p {
                      margin-bottom: 1rem;
                      line-height: 1.75;
                    }
                    .prose-content ul, .prose-content ol {
                      margin-bottom: 1rem;
                      padding-left: 1.5rem;
                    }
                    .prose-content li {
                      margin-bottom: 0.5rem;
                    }
                    .prose-content blockquote {
                      border-left: 4px solid #10b981;
                      padding-left: 1rem;
                      padding-top: 0.5rem;
                      padding-bottom: 0.5rem;
                      background-color: #f0fdf4;
                      font-style: italic;
                      margin-bottom: 1rem;
                    }
                    .prose-content a {
                      color: #059669;
                      text-decoration: underline;
                    }
                    .prose-content a:hover {
                      color: #047857;
                    }
                    .prose-content strong {
                      font-weight: 600;
                    }
                    .prose-content em {
                      font-style: italic;
                    }
                    .prose-content code {
                      background-color: #f3f4f6;
                      color: #1f2937;
                      padding: 0.25rem 0.5rem;
                      border-radius: 0.25rem;
                      font-family: 'Courier New', monospace;
                      font-size: 0.875rem;
                    }
                  `}</style>
                  <div 
                    className="prose-content"
                    dangerouslySetInnerHTML={{ __html: previewData.content }}
                  />
                </>
              ) : (
                // Content is Markdown
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ children }: { children: ReactNode }) => (
                      <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">{children}</h1>
                    ),
                    h2: ({ children }: { children: ReactNode }) => (
                      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{children}</h2>
                    ),
                    h3: ({ children }: { children: ReactNode }) => (
                      <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">{children}</h3>
                    ),
                    p: ({ children }: { children: ReactNode }) => (
                      <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
                    ),
                    ul: ({ children }: { children: ReactNode }) => (
                      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">{children}</ul>
                    ),
                    ol: ({ children }: { children: ReactNode }) => (
                      <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">{children}</ol>
                    ),
                    blockquote: ({ children }: { children: ReactNode }) => (
                      <blockquote className="border-l-4 border-green-500 pl-4 py-2 bg-green-50 text-gray-700 italic mb-4">
                        {children}
                      </blockquote>
                    ),
                    code: ({ children, className }: { children: ReactNode; className?: string }) => {
                      const isInline = !className;
                      if (isInline) {
                        return (
                          <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">
                            {children}
                          </code>
                        );
                      }
                      return (
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
                          <code className="font-mono text-sm">{children}</code>
                        </pre>
                      );
                    },
                    a: ({ children, href }: { children: ReactNode; href?: string }) => (
                      <a
                        href={href}
                        className="text-green-600 hover:text-green-700 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {children}
                      </a>
                    ),
                    img: ({ src, alt }: { src?: string; alt?: string }) => (
                      <img
                        src={src}
                        alt={alt}
                        className="w-full rounded-lg shadow-sm mb-4"
                      />
                    ),
                    table: ({ children }: { children: ReactNode }) => (
                      <div className="overflow-x-auto mb-4">
                        <table className="min-w-full border border-gray-300 rounded-lg">
                          {children}
                        </table>
                      </div>
                    ),
                    th: ({ children }: { children: ReactNode }) => (
                      <th className="border border-gray-300 px-4 py-2 bg-gray-50 font-semibold text-left">
                        {children}
                      </th>
                    ),
                    td: ({ children }: { children: ReactNode }) => (
                      <td className="border border-gray-300 px-4 py-2">{children}</td>
                    ),
                  }}
                >
                  {previewData.content}
                </ReactMarkdown>
              )}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPreviewPage;
