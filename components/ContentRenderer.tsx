'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ReactNode } from 'react';

interface ContentRendererProps {
  content: string;
  className?: string;
}

const ContentRenderer = ({ content, className = "prose prose-lg max-w-none" }: ContentRendererProps) => {
  // Check if content is HTML (contains HTML tags but not just markdown)
  const isHTML = content.includes('<') && content.includes('>') && 
    (content.includes('<p>') || content.includes('<div>') || content.includes('<span>') || 
     content.includes('<strong>') || content.includes('<em>') || content.includes('<u>') ||
     content.includes('<h1>') || content.includes('<h2>') || content.includes('<h3>') ||
     content.includes('style=') || content.includes('color:'));

  // Debug logging (remove in production)
  console.log('Content type:', isHTML ? 'HTML' : 'Markdown');
  console.log('Content preview:', content.substring(0, 200));

  if (isHTML) {
    // Render HTML content directly with proper styling
    return (
      <div 
        className={`${className} blog-content`}
        dangerouslySetInnerHTML={{ __html: content }}
        style={{
          lineHeight: '1.7',
          fontSize: '16px'
        }}
      />
    );
  }

  // Render Markdown content
  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }: { children: ReactNode }) => (
            <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {children}
            </h1>
          ),
          h2: ({ children }: { children: ReactNode }) => (
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 mt-8 leading-tight">
              {children}
            </h2>
          ),
          h3: ({ children }: { children: ReactNode }) => (
            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6 leading-tight">
              {children}
            </h3>
          ),
          h4: ({ children }: { children: ReactNode }) => (
            <h4 className="text-xl font-semibold text-gray-900 mb-3 mt-5 leading-tight">
              {children}
            </h4>
          ),
          h5: ({ children }: { children: ReactNode }) => (
            <h5 className="text-lg font-semibold text-gray-900 mb-2 mt-4 leading-tight">
              {children}
            </h5>
          ),
          h6: ({ children }: { children: ReactNode }) => (
            <h6 className="text-base font-semibold text-gray-900 mb-2 mt-4 leading-tight">
              {children}
            </h6>
          ),
          p: ({ children }: { children: ReactNode }) => (
            <p className="text-gray-700 mb-4 leading-relaxed text-base">
              {children}
            </p>
          ),
          strong: ({ children }: { children: ReactNode }) => (
            <strong className="font-semibold text-gray-900">
              {children}
            </strong>
          ),
          em: ({ children }: { children: ReactNode }) => (
            <em className="italic text-gray-700">
              {children}
            </em>
          ),
          ul: ({ children }: { children: ReactNode }) => (
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
              {children}
            </ul>
          ),
          ol: ({ children }: { children: ReactNode }) => (
            <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">
              {children}
            </ol>
          ),
          li: ({ children }: { children: ReactNode }) => (
            <li className="text-gray-700 leading-relaxed">
              {children}
            </li>
          ),
          blockquote: ({ children }: { children: ReactNode }) => (
            <blockquote className="border-l-4 border-green-500 pl-4 py-2 mb-4 italic text-gray-600 bg-gray-50 rounded-r">
              {children}
            </blockquote>
          ),
          code: ({ children }: { children: ReactNode }) => (
            <code className="bg-gray-100 text-red-600 px-2 py-1 rounded text-sm font-mono">
              {children}
            </code>
          ),
          pre: ({ children }: { children: ReactNode }) => (
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
              {children}
            </pre>
          ),
          a: ({ href, children }: { href?: string; children: ReactNode }) => (
            <a 
              href={href} 
              className="text-green-600 hover:text-green-700 underline font-medium"
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
              className="w-full h-auto rounded-lg shadow-md mb-4"
            />
          )
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default ContentRenderer;
