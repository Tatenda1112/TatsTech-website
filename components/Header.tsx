'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-md">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <div className="ml-3">
              <h1 className="text-lg font-bold text-gray-900 leading-tight">TatsTech</h1>
              <p className="text-xs text-gray-500">Data Analyst</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300"
            >
              Home
            </Link>
            
            <Link 
              href="/services" 
              className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300"
            >
              For Students
            </Link>

            <Link 
              href="/blog" 
              className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300"
            >
              Blog
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300"
            >
              About
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link 
              href="https://wa.me/263771186558"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300"
            >
              <Phone size={16} />
              <span className="text-sm">Call</span>
            </Link>
            <Link 
              href="/contact" 
              className="bg-gray-900 text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-all duration-300 font-medium"
            >
              Work With Me
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white">
            <nav className="flex flex-col space-y-1">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-gray-900 py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300 font-medium min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              <Link 
                href="/services" 
                className="text-gray-700 hover:text-gray-900 py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300 font-medium min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                For Students
              </Link>

              <Link 
                href="/blog" 
                className="text-gray-700 hover:text-gray-900 py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300 font-medium min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-gray-900 py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300 font-medium min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>

              {/* Mobile CTA Section */}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Phone size={16} />
                  <span className="font-medium">+263 771 186 558</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <Link 
                    href="https://wa.me/263771186558"
                    className="bg-gray-100 text-gray-900 px-4 py-3 rounded-lg hover:bg-gray-200 transition-all duration-300 text-center font-medium min-h-[44px] flex items-center justify-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    WhatsApp
                  </Link>
                  <Link 
                    href="/contact" 
                    className="bg-gray-900 text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 text-center font-medium min-h-[44px] flex items-center justify-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header