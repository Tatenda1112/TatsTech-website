import Link from 'next/link'
import { Phone, Mail, MapPin, Github, Linkedin, Twitter, ArrowRight, Heart, ExternalLink } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <Link href="/" className="inline-block">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">TatsTech</h2>
              </Link>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                Student? Need help with data analysis and research projects for top grades.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors group"
              >
                <Github size={18} className="text-gray-600 group-hover:text-gray-900" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors group"
              >
                <Linkedin size={18} className="text-gray-600 group-hover:text-gray-900" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors group"
              >
                <Twitter size={18} className="text-gray-600 group-hover:text-gray-900" />
              </a>
              <a 
                href="mailto:tatendatatenda1112@gmail.com"
                className="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors group"
              >
                <Mail size={18} className="text-gray-600 group-hover:text-gray-900" />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Contact</h3>
            <div className="space-y-3">
              <a 
                href="mailto:tatendatatenda1112@gmail.com"
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group cursor-pointer"
              >
                <Mail size={16} className="mr-2 text-gray-400" />
                <span className="text-sm">Email Me</span>
              </a>
              <a 
                href="tel:+263771186558"
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group cursor-pointer"
              >
                <Phone size={16} className="mr-2 text-gray-400" />
                <span className="text-sm">Call Me</span>
              </a>
              <Link 
                href="/contact"
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group cursor-pointer"
              >
                <MapPin size={16} className="mr-2 text-gray-400" />
                <span className="text-sm">Meet With Me</span>
              </Link>
            </div>
          </div>

          {/* Sitemap Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Navigation</h3>
            <div className="space-y-3">
              <Link 
                href="/"
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group cursor-pointer"
              >
                <span className="text-sm">Home</span>
                <ArrowRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link 
                href="/blog"
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group cursor-pointer"
              >
                <span className="text-sm">Blog</span>
                <ArrowRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link 
                href="/services"
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group cursor-pointer"
              >
                <span className="text-sm">For Students</span>
                <ArrowRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link 
                href="/about"
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group cursor-pointer"
              >
                <span className="text-sm">About</span>
                <ArrowRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          </div>

          {/* Blog Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Student Success</h3>
            <div className="mb-6">
              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                Real solutions for common student research challenges.
              </p>
              <p className="text-xs text-gray-500">
                Updated regularly with new insights
              </p>
            </div>
            <Link 
              href="/blog"
              className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Read Blog
              <ArrowRight size={14} className="ml-2" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-sm text-gray-500 mb-4 md:mb-0">
              <span>© 2025 Crafted with</span>
              <Heart size={16} className="mx-2 text-red-500 fill-current" />
              <span>by TatsTech</span>
            </div>
            <button className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
