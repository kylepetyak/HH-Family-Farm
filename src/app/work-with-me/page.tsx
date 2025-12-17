import { Metadata } from 'next';
import { Container, SectionHeading, Button, ImagePlaceholder } from '@/components/ui';
import { BrandInquiryForm } from '@/components/forms';

export const metadata: Metadata = {
  title: 'Work With Me',
  description:
    'Partner with Haskell Homestead for authentic content creation. Sponsored posts, brand partnerships, and collaborations for homesteading, family, and lifestyle brands.',
};

const valueProps = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Engaged Community',
    description: 'An audience of moms, homesteaders, animal lovers, and families who trust my recommendations and engage with my content.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Authentic Content',
    description: "I only partner with brands I genuinely believe in and would use myself. My audience knows this, which is why they trust my recommendations.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'San Diego / SoCal Reach',
    description: 'Based in Fallbrook, California with strong local connections. Perfect for SoCal-focused campaigns and local brand partnerships.',
  },
];

const contentTypes = [
  {
    title: 'Sponsored Instagram Reels',
    description: 'Engaging short-form video content showcasing your product or service in authentic homestead moments.',
  },
  {
    title: 'Feed Posts & Carousels',
    description: 'High-quality imagery and storytelling that highlights your brand naturally within our daily life.',
  },
  {
    title: 'Instagram Stories',
    description: 'Day-in-the-life content, unboxings, tutorials, and behind-the-scenes integration with your brand.',
  },
  {
    title: 'Blog Features & Reviews',
    description: 'In-depth written content with SEO value, detailed reviews, and evergreen discoverability.',
  },
  {
    title: 'Long-form Video Content',
    description: 'YouTube-style videos, tutorials, and comprehensive product showcases for deeper engagement.',
  },
  {
    title: 'Brand Ambassador Programs',
    description: 'Ongoing partnerships with consistent content creation and long-term brand representation.',
  },
];

const brandCategories = [
  'Farm & Homesteading Supplies',
  'Kids & Family Products',
  'Animal Care & Pet Brands',
  'Outdoor & Lifestyle Gear',
  'First Responder Brands',
  'Local San Diego Businesses',
  'Home & Garden',
  'Sustainable Living',
];

const stats = [
  { label: 'Instagram Followers', value: '3,500+' },
  { label: 'Avg. Engagement Rate', value: '5.2%' },
  { label: 'Monthly Reach', value: '25K+' },
  { label: 'Email Subscribers', value: '1,000+' },
];

export default function WorkWithMePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0 z-0">
          <ImagePlaceholder
            aspectRatio="21/9"
            text="Work With Me Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/70 to-charcoal-900/30" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
              Let&apos;s Create Together
            </h1>
            <p className="text-xl text-cream-100">
              Authentic partnerships that resonate with engaged audiences who care about
              homesteading, family, and intentional living.
            </p>
          </div>
        </Container>
      </section>

      {/* Why Partner Section */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            title="Why Partner With Haskell Homestead"
            subtitle="What makes our community special"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage-100 text-sage-600 mb-4">
                  {prop.icon}
                </div>
                <h3 className="text-xl font-serif text-charcoal-900 mb-2">
                  {prop.title}
                </h3>
                <p className="text-charcoal-600">{prop.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Audience Stats */}
      <section className="py-12 bg-sage-600">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-serif font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-sage-200 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What I Offer */}
      <section className="section-padding bg-cream-100">
        <Container>
          <SectionHeading
            title="What I Offer"
            subtitle="Content types available for brand partnerships"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-serif text-charcoal-900 mb-2">
                  {type.title}
                </h3>
                <p className="text-charcoal-600 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Brands I'd Love to Work With */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal-900 mb-6">
                Brands I&apos;d Love to Work With
              </h2>
              <p className="text-lg text-charcoal-600 mb-6">
                I&apos;m passionate about partnering with brands that align with our values
                and would genuinely benefit our community. Here are some categories
                that are a natural fit:
              </p>
              <div className="flex flex-wrap gap-3">
                {brandCategories.map((category, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-cream-100 text-charcoal-700 rounded-full text-sm font-medium"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <ImagePlaceholder
                aspectRatio="4/3"
                text="Content Examples"
                className="rounded-xl"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Media Kit Download */}
      <section className="py-12 bg-terracotta-500">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-serif text-white mb-2">
                Download My Media Kit
              </h2>
              <p className="text-terracotta-100">
                Get detailed audience demographics, engagement metrics, and past collaboration examples.
              </p>
            </div>
            <Button
              href="/media-kit.pdf"
              className="bg-white text-terracotta-600 hover:bg-cream-100 whitespace-nowrap"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Media Kit (PDF)
            </Button>
          </div>
        </Container>
      </section>

      {/* Brand Inquiry Form */}
      <section className="section-padding bg-cream-50">
        <Container size="narrow">
          <SectionHeading
            title="Let&apos;s Connect"
            subtitle="Tell me about your brand and how we might work together"
          />
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <BrandInquiryForm />
          </div>
        </Container>
      </section>
    </>
  );
}
