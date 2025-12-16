'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from '@/components/ui';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Work With Me', href: '/work-with-me' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-serif font-bold text-charcoal-900">
              Haskell Homestead
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? 'text-sage-600'
                    : 'text-charcoal-700 hover:text-sage-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/newsletter"
              className="px-4 py-2 bg-sage-600 text-white text-sm font-medium rounded-lg hover:bg-sage-700 transition-colors duration-200"
            >
              Subscribe
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-charcoal-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col space-y-4 pt-4 border-t border-cream-200">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-base font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? 'text-sage-600'
                    : 'text-charcoal-700 hover:text-sage-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/newsletter"
              className="inline-flex justify-center px-4 py-2 bg-sage-600 text-white text-base font-medium rounded-lg hover:bg-sage-700 transition-colors duration-200"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
