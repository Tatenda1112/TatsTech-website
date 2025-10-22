'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

interface SimpleRichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  height?: string;
}

const SimpleRichTextEditor = ({ 
  value, 
  onChange, 
  placeholder = "Write your blog post content...", 
  height = "400px" 
}: SimpleRichTextEditorProps) => {
  const [editorHtml, setEditorHtml] = useState('');

  useEffect(() => {
    setEditorHtml(value || '');
  }, [value]);

  const handleChange = (html: string) => {
    setEditorHtml(html);
    onChange(html);
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'align': [] }],
      ['blockquote', 'code-block'],
      ['link'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'color', 'background',
    'list', 'bullet',
    'align',
    'blockquote', 'code-block',
    'link'
  ];

  return (
    <div className="simple-rich-text-editor">
      <style jsx global>{`
        .simple-rich-text-editor .ql-editor {
          min-height: ${height};
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          font-size: 16px;
          line-height: 1.6;
        }
        .simple-rich-text-editor .ql-toolbar {
          border-top: 1px solid #ccc;
          border-left: 1px solid #ccc;
          border-right: 1px solid #ccc;
          border-radius: 8px 8px 0 0;
        }
        .simple-rich-text-editor .ql-container {
          border-bottom: 1px solid #ccc;
          border-left: 1px solid #ccc;
          border-right: 1px solid #ccc;
          border-radius: 0 0 8px 8px;
        }
        .simple-rich-text-editor .ql-editor.ql-blank::before {
          color: #9ca3af;
          font-style: normal;
        }
        .simple-rich-text-editor .ql-editor u {
          text-decoration: underline !important;
        }
        .simple-rich-text-editor .ql-formats {
          margin-right: 15px;
        }
        .simple-rich-text-editor .ql-color-picker,
        .simple-rich-text-editor .ql-background-picker {
          width: 28px;
          height: 28px;
        }
      `}</style>
      <ReactQuill
        theme="snow"
        value={editorHtml}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SimpleRichTextEditor;
