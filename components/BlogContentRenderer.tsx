'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface BlogContentRendererProps {
  content: string;
}

const BlogContentRenderer = ({ content }: BlogContentRendererProps) => {
  // Function to strip HTML tags and render as text if needed
  const stripHtmlTags = (html: string) => {
    return html.replace(/<[^>]*>/g, '');
  };

  // Check if content contains HTML tags
  const containsHtml = content.includes('<') && content.includes('>');
  
  // More aggressive HTML detection for rich text editor content
  const isRichTextHtml = containsHtml && (
    content.includes('<p>') || 
    content.includes('<div>') || 
    content.includes('<strong>') || 
    content.includes('<em>') || 
    content.includes('<u>') ||
    content.includes('<span>') ||
    content.includes('style=') ||
    content.includes('<br>') ||
    content.includes('<h1>') ||
    content.includes('<h2>') ||
    content.includes('<h3>') ||
    content.includes('<ul>') ||
    content.includes('<ol>') ||
    content.includes('<li>')
  );

  console.log('Content analysis:', {
    containsHtml,
    isRichTextHtml,
    contentStart: content.substring(0, 100)
  });
  
  // If it's HTML from rich text editor, render it directly
  if (isRichTextHtml) {
    return (
      <div 
        className="blog-html-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  // Otherwise, render as Markdown
  return (
    <div className="blog-markdown-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: (props) => (
            <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {props.children}
            </h1>
          ),
          h2: (props) => (
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 mt-8 leading-tight">
              {props.children}
            </h2>
          ),
          h3: (props) => (
            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6 leading-tight">
              {props.children}
            </h3>
          ),
          h4: (props) => (
            <h4 className="text-xl font-semibold text-gray-900 mb-3 mt-5 leading-tight">
              {props.children}
            </h4>
          ),
          h5: (props) => (
            <h5 className="text-lg font-semibold text-gray-900 mb-2 mt-4 leading-tight">
              {props.children}
            </h5>
          ),
          h6: (props) => (
            <h6 className="text-base font-semibold text-gray-900 mb-2 mt-4 leading-tight">
              {props.children}
            </h6>
          ),
          p: (props) => (
            <p className="text-gray-700 mb-4 leading-relaxed text-base">
              {props.children}
            </p>
          ),
          strong: (props) => (
            <strong className="font-semibold text-gray-900">
              {props.children}
            </strong>
          ),
          em: (props) => (
            <em className="italic text-gray-700">
              {props.children}
            </em>
          ),
          ul: (props) => (
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
              {props.children}
            </ul>
          ),
          ol: (props) => (
            <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">
              {props.children}
            </ol>
          ),
          li: (props) => (
            <li className="text-gray-700 leading-relaxed">
              {props.children}
            </li>
          ),
          blockquote: (props) => (
            <blockquote className="border-l-4 border-green-500 pl-4 py-2 mb-4 italic text-gray-600 bg-gray-50 rounded-r">
              {props.children}
            </blockquote>
          ),
          code: (props) => (
            <code className="bg-gray-100 text-red-600 px-2 py-1 rounded text-sm font-mono">
              {props.children}
            </code>
          ),
          pre: (props) => (
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
              {props.children}
            </pre>
          ),
          a: (props) => (
            <a 
              href={props.href} 
              className="text-green-600 hover:text-green-700 underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.children}
            </a>
          ),
          img: (props) => (
            <img 
              src={props.src} 
              alt={props.alt} 
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

export default BlogContentRenderer;
