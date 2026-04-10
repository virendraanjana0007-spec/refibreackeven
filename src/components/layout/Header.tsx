'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import AdPlaceholder from './AdPlaceholder';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      {/* Top Ad Banner */}
      <div className="max-w-7xl mx-auto px-4 pt-4">
        <AdPlaceholder slot="header-banner" format="horizontal" className="my-0" />
      </div>

      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            RefiBreakEven
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Home
            </Link>
            <Link href="/calculator" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Calculator
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Blog
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary font-medium py-2 min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/calculator"
                className="text-gray-700 hover:text-primary font-medium py-2 min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Calculator
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-primary font-medium py-2 min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
