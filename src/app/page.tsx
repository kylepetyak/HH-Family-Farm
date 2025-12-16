import Link from 'next/link';
import { Container, SectionHeading, Button, ImagePlaceholder } from '@/components/ui';
import { NewsletterForm } from '@/components/forms';
import { BlogGrid } from '@/components/blog';
import { getLatestPosts } from '@/lib/mdx';

// JSON-LD structured data for homepage
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Haskell Homestead',
  url: 'https://haskellhomestead.com',
  logo: 'https://haskellhomestead.com/images/logo.png',
  description:
    'Raising wild kids and wilder animals on 1.5 California acres. A family homesteading in Fallbrook, CA.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Fallbrook',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  sameAs: [
    'https://instagram.com/hh.family.farm',
  ],
};

export default function HomePage() {
  const latestPosts = getLatestPosts(3);

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center -mt-20">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 z-0">
          <ImagePlaceholder
            aspectRatio="16/9"
            text="Hero Background Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/70 to-charcoal-900/30" />
        </div>

        <Container className="relative z-10 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
              Welcome to Haskell Homestead
            </h1>
            <p className="text-xl md:text-2xl text-cream-100 mb-4 font-serif italic">
              Raising wild kids and wilder animals on 1.5 California acres
            </p>
            <p className="text-lg text-cream-200 mb-8">
              Follow along as our family navigates homestead life in beautiful Fallbrook, CA—
              one adventure, one animal, and one messy day at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/newsletter" size="lg">
                Join the Homestead
              </Button>
              <Button href="/about" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Our Story
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Welcome Section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal-900 mb-6">
                Welcome to the Homestead
              </h2>
              <p className="text-lg text-charcoal-600 mb-4">
                Hey there! I&apos;m so glad you found us. I&apos;m a working mom, animal lover, and
                homesteader living on 1.5 beautiful acres in Fallbrook, California with my
                firefighter husband and our wild kiddos.
              </p>
              <p className="text-lg text-charcoal-600 mb-6">
                What started as a dream to raise our kids closer to nature has become a
                full-blown adventure involving horses, pigs, chickens, endless garden
                experiments, and more chaos than I ever imagined. But you know what?
                We wouldn&apos;t have it any other way.
              </p>
              <Button href="/about">
                Read Our Full Story
              </Button>
            </div>
            <div className="relative">
              <ImagePlaceholder
                aspectRatio="4/3"
                text="Family/Farm Image"
                className="rounded-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-sage-600 text-white p-6 rounded-xl hidden md:block">
                <p className="text-3xl font-serif font-bold">3,500+</p>
                <p className="text-sm">Instagram Family</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Blog Posts */}
      <section className="section-padding bg-cream-100">
        <Container>
          <SectionHeading
            title="From the Journal"
            subtitle="Stories, tips, and adventures from our homesteading journey"
          />
          <BlogGrid posts={latestPosts} />
          <div className="text-center mt-12">
            <Button href="/blog" variant="outline">
              View All Posts
            </Button>
          </div>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-sage-600">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              Join the Homestead Family
            </h2>
            <p className="text-lg text-sage-100 mb-8">
              Get weekly updates, homesteading tips, behind-the-scenes stories, and
              exclusive content delivered straight to your inbox. Join 1,000+ homestead
              enthusiasts already on the list!
            </p>
            <div className="max-w-md mx-auto bg-white rounded-xl p-6">
              <NewsletterForm formId="home-newsletter" variant="default" />
            </div>
            <p className="text-sm text-sage-200 mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </Container>
      </section>

      {/* Instagram Section */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            title="Follow Along on Instagram"
            subtitle="Daily farm life, animal antics, and behind-the-scenes moments"
          />
          {/* Instagram Grid Placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Link
                key={i}
                href="https://instagram.com/hh.family.farm"
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-square relative group overflow-hidden rounded-lg"
              >
                <ImagePlaceholder
                  aspectRatio="1/1"
                  text={`IG ${i}`}
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-sage-600/0 group-hover:bg-sage-600/30 transition-colors duration-300 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.017 0C8.737 0 8.336.015 7.053.072 5.775.13 4.904.333 4.14.63a5.876 5.876 0 00-2.126 1.384A5.876 5.876 0 00.63 4.14C.333 4.904.13 5.775.072 7.053.015 8.336 0 8.737 0 12.017s.015 3.681.072 4.964c.058 1.278.261 2.149.558 2.913a5.876 5.876 0 001.384 2.126 5.876 5.876 0 002.126 1.384c.764.297 1.635.5 2.913.558 1.283.057 1.684.072 4.964.072s3.681-.015 4.964-.072c1.278-.058 2.149-.261 2.913-.558a5.876 5.876 0 002.126-1.384 5.876 5.876 0 001.384-2.126c.297-.764.5-1.635.558-2.913.057-1.283.072-1.684.072-4.964s-.015-3.681-.072-4.964c-.058-1.278-.261-2.149-.558-2.913a5.876 5.876 0 00-1.384-2.126A5.876 5.876 0 0019.894.63C19.13.333 18.259.13 16.981.072 15.698.015 15.297 0 12.017 0zm0 2.166c3.223 0 3.603.014 4.874.07 1.175.054 1.814.249 2.24.413.563.219.965.481 1.387.903.422.422.684.824.903 1.387.164.426.36 1.065.413 2.24.057 1.271.07 1.651.07 4.874s-.013 3.603-.07 4.874c-.054 1.175-.249 1.814-.413 2.24a3.72 3.72 0 01-.903 1.387 3.72 3.72 0 01-1.387.903c-.426.164-1.065.36-2.24.413-1.271.057-1.651.07-4.874.07s-3.603-.013-4.874-.07c-1.175-.054-1.814-.249-2.24-.413a3.72 3.72 0 01-1.387-.903 3.72 3.72 0 01-.903-1.387c-.164-.426-.36-1.065-.413-2.24-.057-1.271-.07-1.651-.07-4.874s.013-3.603.07-4.874c.054-1.175.249-1.814.413-2.24.219-.563.481-.965.903-1.387a3.72 3.72 0 011.387-.903c.426-.164 1.065-.36 2.24-.413 1.271-.057 1.651-.07 4.874-.07z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M12.017 16.006a3.989 3.989 0 110-7.978 3.989 3.989 0 010 7.978zm0-10.133a6.144 6.144 0 100 12.289 6.144 6.144 0 000-12.289zm7.846-.203a1.435 1.435 0 11-2.87 0 1.435 1.435 0 012.87 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              href="https://instagram.com/hh.family.farm"
              variant="secondary"
              className="inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12.017 0C8.737 0 8.336.015 7.053.072 5.775.13 4.904.333 4.14.63a5.876 5.876 0 00-2.126 1.384A5.876 5.876 0 00.63 4.14C.333 4.904.13 5.775.072 7.053.015 8.336 0 8.737 0 12.017s.015 3.681.072 4.964c.058 1.278.261 2.149.558 2.913a5.876 5.876 0 001.384 2.126 5.876 5.876 0 002.126 1.384c.764.297 1.635.5 2.913.558 1.283.057 1.684.072 4.964.072s3.681-.015 4.964-.072c1.278-.058 2.149-.261 2.913-.558a5.876 5.876 0 002.126-1.384 5.876 5.876 0 001.384-2.126c.297-.764.5-1.635.558-2.913.057-1.283.072-1.684.072-4.964s-.015-3.681-.072-4.964c-.058-1.278-.261-2.149-.558-2.913a5.876 5.876 0 00-1.384-2.126A5.876 5.876 0 0019.894.63C19.13.333 18.259.13 16.981.072 15.698.015 15.297 0 12.017 0z"
                  clipRule="evenodd"
                />
              </svg>
              Follow @hh.family.farm
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
