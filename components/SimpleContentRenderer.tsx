'use client';

import { useEffect, useState } from 'react';

interface SimpleContentRendererProps {
  content: string;
}

const SimpleContentRenderer = ({ content }: SimpleContentRendererProps) => {
  const [processedContent, setProcessedContent] = useState('');

  useEffect(() => {
    // Simple check: if content has HTML tags, render as HTML
    // Otherwise, convert markdown-like syntax to HTML
    if (content.includes('<p>') || content.includes('<div>') || content.includes('<strong>')) {
      // It's HTML content from rich text editor
      setProcessedContent(content);
    } else {
      // Convert basic markdown to HTML
      let htmlContent = content
        // Headers
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        // Bold and Italic
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        // Paragraphs (split by double newlines)
        .split('\n\n')
        .map(paragraph => paragraph.trim())
        .filter(paragraph => paragraph.length > 0)
        .map(paragraph => {
          // Don't wrap headers in paragraphs
          if (paragraph.startsWith('<h') || paragraph.startsWith('<ul') || paragraph.startsWith('<ol')) {
            return paragraph;
          }
          return `<p>${paragraph}</p>`;
        })
        .join('\n');

      setProcessedContent(htmlContent);
    }
  }, [content]);

  return (
    <>
      <style jsx>{`
        .blog-content-simple {
          line-height: 1.8;
          color: #374151;
          font-size: 1.125rem;
        }
        .blog-content-simple h1 {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #1f2937, #4b5563);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }
        .blog-content-simple h2 {
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #1f2937, #4b5563);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-top: 2.5rem;
          margin-bottom: 1.25rem;
          line-height: 1.3;
          border-bottom: 2px solid #e5e7eb;
          padding-bottom: 0.5rem;
        }
        .blog-content-simple h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1f2937;
          margin-top: 2rem;
          margin-bottom: 1rem;
          line-height: 1.4;
        }
        .blog-content-simple p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
          text-align: justify;
        }
        .blog-content-simple ul, .blog-content-simple ol {
          margin-bottom: 1.5rem;
          padding-left: 2rem;
        }
        .blog-content-simple li {
          margin-bottom: 0.75rem;
          line-height: 1.7;
        }
        .blog-content-simple blockquote {
          border-left: 4px solid #3b82f6;
          padding: 1.5rem;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          font-style: italic;
          margin: 2rem 0;
          border-radius: 0 0.75rem 0.75rem 0;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          position: relative;
        }
        .blog-content-simple blockquote::before {
          content: '"';
          font-size: 4rem;
          color: #3b82f6;
          position: absolute;
          top: -0.5rem;
          left: 1rem;
          font-family: serif;
        }
        .blog-content-simple a {
          color: #3b82f6;
          text-decoration: none;
          border-bottom: 2px solid #93c5fd;
          transition: all 0.3s ease;
          font-weight: 500;
        }
        .blog-content-simple a:hover {
          color: #1d4ed8;
          border-bottom-color: #3b82f6;
          background-color: #eff6ff;
          padding: 0.125rem 0.25rem;
          border-radius: 0.25rem;
        }
        .blog-content-simple strong {
          font-weight: 700;
          color: #1f2937;
        }
        .blog-content-simple em {
          font-style: italic;
          color: #4b5563;
        }
        .blog-content-simple code {
          background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
          color: #1e293b;
          padding: 0.375rem 0.75rem;
          border-radius: 0.5rem;
          font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
          font-size: 0.9rem;
          border: 1px solid #cbd5e1;
          font-weight: 500;
        }
        .blog-content-simple pre {
          background: linear-gradient(135deg, #1e293b, #334155);
          color: #f1f5f9;
          padding: 1.5rem;
          border-radius: 1rem;
          overflow-x: auto;
          margin: 2rem 0;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          border: 1px solid #475569;
        }
        .blog-content-simple pre code {
          background: transparent;
          color: inherit;
          padding: 0;
          border: none;
          font-size: 0.875rem;
        }
        .blog-content-simple img {
          border-radius: 1rem;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
          margin: 2rem 0;
          max-width: 100%;
          height: auto;
        }
        .blog-content-simple table {
          width: 100%;
          border-collapse: collapse;
          margin: 2rem 0;
          background: white;
          border-radius: 0.75rem;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .blog-content-simple th {
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          color: white;
          padding: 1rem;
          text-align: left;
          font-weight: 600;
        }
        .blog-content-simple td {
          padding: 0.75rem 1rem;
          border-bottom: 1px solid #e5e7eb;
        }
        .blog-content-simple tr:hover {
          background-color: #f9fafb;
        }
      `}</style>
      <div 
        className="blog-content-simple prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: processedContent }}
      />
    </>
  );
};

export default SimpleContentRenderer;
