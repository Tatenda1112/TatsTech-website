'use client';

import { useState } from 'react';
import { Image, Copy, Check } from 'lucide-react';

interface ImageSuggestionsProps {
  onSelectImage: (url: string) => void;
  type: 'cover' | 'background';
}

const ImageSuggestions = ({ onSelectImage, type }: ImageSuggestionsProps) => {
  const [copiedUrl, setCopiedUrl] = useState<string>('');

  const backgroundImages = [
    {
      name: 'Tech Abstract Blue',
      url: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop',
      description: 'Modern tech background with blue tones'
    },
    {
      name: 'Code Matrix',
      url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop',
      description: 'Digital code pattern background'
    },
    {
      name: 'Gradient Mesh',
      url: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&h=1080&fit=crop',
      description: 'Colorful gradient mesh pattern'
    },
    {
      name: 'Circuit Board',
      url: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop',
      description: 'Electronic circuit board pattern'
    },
    {
      name: 'Data Visualization',
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop',
      description: 'Abstract data visualization'
    },
    {
      name: 'Minimal Geometric',
      url: 'https://images.unsplash.com/photo-1557683304-673a23048d34?w=1920&h=1080&fit=crop',
      description: 'Clean geometric patterns'
    }
  ];

  const coverImages = [
    {
      name: 'Data Analysis',
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop',
      description: 'Charts and data visualization'
    },
    {
      name: 'Programming Setup',
      url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=630&fit=crop',
      description: 'Developer workspace with code'
    },
    {
      name: 'Technology Concept',
      url: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=630&fit=crop',
      description: 'Modern technology illustration'
    },
    {
      name: 'Learning & Education',
      url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=630&fit=crop',
      description: 'Books and learning materials'
    },
    {
      name: 'Digital Innovation',
      url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=630&fit=crop',
      description: 'Digital innovation concept'
    },
    {
      name: 'Team Collaboration',
      url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=630&fit=crop',
      description: 'Team working together'
    }
  ];

  const images = type === 'background' ? backgroundImages : coverImages;

  const handleCopyUrl = async (url: string) => {
    await navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(''), 2000);
  };

  return (
    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
      <h4 className="text-sm font-medium text-gray-900 mb-3 flex items-center gap-2">
        <Image size={16} />
        Suggested {type === 'background' ? 'Background' : 'Cover'} Images
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {images.map((image, index) => (
          <div key={index} className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="aspect-video bg-gray-100 rounded mb-2 overflow-hidden">
              <img
                src={image.url}
                alt={image.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h5 className="font-medium text-sm text-gray-900 mb-1">{image.name}</h5>
            <p className="text-xs text-gray-600 mb-2">{image.description}</p>
            <div className="flex gap-2">
              <button
                onClick={() => onSelectImage(image.url)}
                className="flex-1 px-3 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700 transition-colors"
              >
                Use This
              </button>
              <button
                onClick={() => handleCopyUrl(image.url)}
                className="px-3 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-700 transition-colors flex items-center gap-1"
              >
                {copiedUrl === image.url ? <Check size={12} /> : <Copy size={12} />}
                {copiedUrl === image.url ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-3">
        Images from Unsplash - Free to use for any purpose
      </p>
    </div>
  );
};

export default ImageSuggestions;
