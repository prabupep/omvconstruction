'use client';

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              {/* OM VINAYAGA Logo */}
              <div className="relative w-12 h-12">
                {/* Circular base with teal and yellow sections */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 relative overflow-hidden">
                  {/* Left teal section */}
                  <div className="absolute left-0 top-0 w-6 h-12 bg-teal-700 rounded-l-full"></div>
                  {/* Right yellow section */}
                  <div className="absolute right-0 top-0 w-6 h-12 bg-yellow-400 rounded-r-full"></div>
                  {/* Diagonal line */}
                  <div className="absolute bottom-2 left-1 w-8 h-0.5 bg-yellow-400 transform rotate-12"></div>
                  {/* Ruler marks */}
                  <div className="absolute bottom-1 left-1 space-y-0.5">
                    {[0, 1, 2, 3].map((i) => (
                      <div key={i} className="w-0.5 h-1 bg-white opacity-60"></div>
                    ))}
                  </div>
                  {/* Upward extensions - skyscrapers */}
                  <div className="absolute -top-1 left-1 w-1 h-3 bg-teal-700"></div>
                  <div className="absolute -top-2 left-2 w-1 h-4 bg-teal-700"></div>
                  <div className="absolute -top-1 right-2 w-1 h-5 bg-yellow-400"></div>
                </div>
              </div>
              {/* Company Name */}
              <div className="flex flex-col">
                <span className="text-xl font-bold text-teal-700 leading-tight">OM VINAYAGA</span>
                <span className="text-sm font-semibold text-yellow-600 leading-tight">CONSTRUCTIONS</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-teal-600 p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-gray-700 hover:text-teal-600 px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-gray-700 hover:text-teal-600 px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-700 hover:text-teal-600 px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left text-gray-700 hover:text-teal-600 px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-gray-700 hover:text-teal-600 px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left bg-teal-600 hover:bg-teal-700 text-white px-3 py-2 rounded-lg font-medium transition-colors duration-200 mt-4"
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
