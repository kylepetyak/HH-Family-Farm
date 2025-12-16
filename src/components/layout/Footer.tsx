import Link from 'next/link';
import { Container, SocialIcons } from '@/components/ui';

const footerNavigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Work With Me', href: '/work-with-me' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Newsletter', href: '/newsletter' },
    { name: 'Media Kit', href: '/media-kit.pdf' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Use', href: '/terms' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-900 text-white">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="md:col-span-2">
              <Link href="/" className="inline-block mb-4">
                <span className="text-2xl font-serif font-bold text-white">
                  Haskell Homestead
                </span>
              </Link>
              <p className="text-charcoal-300 mb-6 max-w-md">
                Raising wild kids and wilder animals on 1.5 California acres.
                Follow along as we share our journey of homesteading, family,
                and life in beautiful Fallbrook, CA.
              </p>
              <SocialIcons className="[&_a]:text-charcoal-400 [&_a:hover]:text-sage-400" />
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-cream-200 uppercase tracking-wider mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {footerNavigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-charcoal-300 hover:text-sage-400 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold text-cream-200 uppercase tracking-wider mb-4">
                Resources
              </h3>
              <ul className="space-y-3">
                {footerNavigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-charcoal-300 hover:text-sage-400 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="text-sm font-semibold text-cream-200 uppercase tracking-wider mb-4 mt-8">
                Legal
              </h3>
              <ul className="space-y-3">
                {footerNavigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-charcoal-300 hover:text-sage-400 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-charcoal-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-charcoal-400 text-sm">
                &copy; {currentYear} Haskell Homestead. All rights reserved.
              </p>
              <p className="text-charcoal-500 text-sm mt-2 md:mt-0">
                Fallbrook, California
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
