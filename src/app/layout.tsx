import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://haskellhomestead.com'),
  title: {
    default: 'Haskell Homestead | California Homesteading Family',
    template: '%s | Haskell Homestead',
  },
  description:
    'Raising wild kids and wilder animals on 1.5 California acres. Follow our homesteading journey in Fallbrook, CA.',
  keywords: [
    'homesteading',
    'homestead',
    'Fallbrook',
    'California',
    'family farm',
    'farm life',
    'raising animals',
    'chickens',
    'pigs',
    'horses',
    'homestead blog',
  ],
  authors: [{ name: 'Haskell Homestead' }],
  creator: 'Haskell Homestead',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Haskell Homestead',
    title: 'Haskell Homestead | California Homesteading Family',
    description:
      'Raising wild kids and wilder animals on 1.5 California acres. Follow our homesteading journey in Fallbrook, CA.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Haskell Homestead - California Homesteading Family',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haskell Homestead | California Homesteading Family',
    description:
      'Raising wild kids and wilder animals on 1.5 California acres. Follow our homesteading journey in Fallbrook, CA.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-cream-50 text-charcoal-900">
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
