import { Metadata } from 'next';
import { Container, ImagePlaceholder } from '@/components/ui';
import { NewsletterForm } from '@/components/forms';

export const metadata: Metadata = {
  title: 'Newsletter',
  description:
    'Join the Haskell Homestead newsletter for weekly updates, homesteading tips, behind-the-scenes stories, and exclusive content.',
};

const benefits = [
  {
    icon: '🌱',
    title: 'Weekly Updates',
    description: 'Get a peek into our week on the homestead—the wins, the fails, and everything in between.',
  },
  {
    icon: '📚',
    title: 'Homesteading Tips',
    description: 'Practical advice from our own trial-and-error journey. Learn from our mistakes!',
  },
  {
    icon: '🎬',
    title: 'Behind the Scenes',
    description: 'Exclusive content that doesn\'t make it to social media. The real, unfiltered stuff.',
  },
  {
    icon: '🎁',
    title: 'Early Access',
    description: 'Be the first to know about new blog posts, product recommendations, and special announcements.',
  },
];

export default function NewsletterPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-cream-100">
        <Container size="narrow">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-charcoal-900 mb-4">
              Join the Homestead Family
            </h1>
            <p className="text-xl text-charcoal-600 mb-2">
              Weekly homesteading wisdom, delivered with love (and probably some dirt).
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Benefits */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-charcoal-900 mb-6">
                What You&apos;ll Get
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="text-3xl">{benefit.icon}</span>
                    <div>
                      <h3 className="font-semibold text-charcoal-900 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-charcoal-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Proof */}
              <div className="mt-8 p-6 bg-sage-50 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-serif font-bold text-sage-600">
                    1,000+
                  </div>
                  <div className="text-charcoal-600">
                    homestead enthusiasts already on the list
                  </div>
                </div>
              </div>
            </div>

            {/* Signup Form */}
            <div className="bg-cream-50 rounded-2xl p-8 md:p-10">
              <h3 className="text-xl font-serif text-charcoal-900 mb-2 text-center">
                Subscribe Now
              </h3>
              <p className="text-charcoal-600 text-center mb-6">
                It&apos;s free, and you can unsubscribe anytime.
              </p>
              <NewsletterForm formId="newsletter-page" variant="default" />
              <p className="text-xs text-charcoal-400 text-center mt-4">
                By subscribing, you agree to receive emails from Haskell Homestead.
                We respect your privacy and will never spam you.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* What to Expect */}
      <section className="section-padding bg-sage-50">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-serif text-charcoal-900 mb-6">
              A Note From Me
            </h2>
            <div className="flex justify-center mb-6">
              <ImagePlaceholder
                width={120}
                height={120}
                aspectRatio="1/1"
                text="Photo"
                className="rounded-full"
              />
            </div>
            <p className="text-lg text-charcoal-600 mb-4">
              &quot;Hey there! I&apos;m so excited you&apos;re thinking about joining our little community.
              I started this newsletter because I believe in sharing the real side of homesteading—
              not just the pretty Instagram moments, but the messy, challenging, beautiful reality of it all.
            </p>
            <p className="text-lg text-charcoal-600 mb-4">
              Every week, I&apos;ll send you stories from our homestead, tips I&apos;ve learned along the way,
              and honest reflections on this wild life we&apos;ve chosen. Whether you&apos;re a seasoned
              homesteader or just dreaming about starting, I hope these emails feel like a letter
              from a friend.
            </p>
            <p className="text-lg text-charcoal-600">
              See you in your inbox!&quot;
            </p>
            <p className="text-sage-600 font-serif text-xl mt-4">
              — Haskell Homestead
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
