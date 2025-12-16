import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Container, Button, ImagePlaceholder } from '@/components/ui';
import { BlogGrid, ShareButtons, AuthorBio } from '@/components/blog';
import { NewsletterForm } from '@/components/forms';
import { getPostBySlug, getAllPosts, getRelatedPosts, formatDate } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [{ url: post.image }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(resolvedParams.slug, post.tags, 3);
  const postUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://haskellhomestead.com'}/blog/${resolvedParams.slug}`;

  return (
    <>
      {/* Featured Image */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <div className="absolute inset-0">
          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <ImagePlaceholder
              text="Featured Image"
              className="w-full h-full"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent" />
        </div>
      </section>

      {/* Article Content */}
      <article className="relative -mt-32 pb-16">
        <Container size="narrow">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-sage-600 bg-sage-50 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal-900 mb-4">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-charcoal-500 text-sm mb-8 pb-8 border-b border-charcoal-100">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>•</span>
              <span>{post.readingTime}</span>
              <span>•</span>
              <span>By {post.author}</span>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <MDXRemote source={post.content} />
            </div>

            {/* Share Buttons */}
            <div className="mt-8 pt-8 border-t border-charcoal-100">
              <ShareButtons url={postUrl} title={post.title} />
            </div>
          </div>

          {/* Author Bio */}
          <AuthorBio className="mt-8" />

          {/* Newsletter CTA */}
          <div className="mt-8 bg-sage-600 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-serif text-white mb-2">
              Enjoyed this post?
            </h3>
            <p className="text-sage-100 mb-6">
              Subscribe to get more homesteading stories and tips delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto bg-white rounded-lg p-4">
              <NewsletterForm formId="post-newsletter" variant="compact" />
            </div>
          </div>
        </Container>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-cream-100">
          <Container>
            <h2 className="text-2xl md:text-3xl font-serif text-charcoal-900 text-center mb-12">
              You Might Also Enjoy
            </h2>
            <BlogGrid posts={relatedPosts} columns={3} />
            <div className="text-center mt-8">
              <Button href="/blog" variant="outline">
                View All Posts
              </Button>
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
