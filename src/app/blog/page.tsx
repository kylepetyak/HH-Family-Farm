import { Metadata } from 'next';
import { Container, SectionHeading } from '@/components/ui';
import { BlogGrid } from '@/components/blog';
import { NewsletterForm } from '@/components/forms';
import { getAllPosts } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Stories, tips, and adventures from Haskell Homestead. Read about homesteading, farm life, animals, and family in Fallbrook, California.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Header */}
      <section className="py-16 md:py-24 bg-cream-100">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif text-charcoal-900 mb-4">
              The Journal
            </h1>
            <p className="text-lg text-charcoal-600">
              Stories, tips, and adventures from our homesteading journey.
              From chicken keeping to garden experiments, first-time failures
              to small victories—it&apos;s all here.
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-white">
        <Container>
          <BlogGrid posts={posts} />

          {posts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-charcoal-500 text-lg mb-4">
                No posts yet—but they&apos;re coming soon!
              </p>
              <p className="text-charcoal-400">
                Sign up for the newsletter to be the first to know when new content drops.
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-sage-600">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              Never Miss a Post
            </h2>
            <p className="text-lg text-sage-100 mb-8">
              Subscribe to get new articles, homesteading tips, and behind-the-scenes
              content delivered straight to your inbox.
            </p>
            <div className="max-w-md mx-auto bg-white rounded-xl p-6">
              <NewsletterForm formId="blog-newsletter" variant="default" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
