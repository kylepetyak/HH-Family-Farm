import { BlogCard } from './BlogCard';
import type { BlogPostMeta } from '@/lib/mdx';

interface BlogGridProps {
  posts: BlogPostMeta[];
  columns?: 2 | 3;
}

export function BlogGrid({ posts, columns = 3 }: BlogGridProps) {
  const gridCols = columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3';

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-charcoal-500">No posts yet. Check back soon!</p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 ${gridCols} gap-8`}>
      {posts.map((post) => (
        <BlogCard
          key={post.slug}
          slug={post.slug}
          title={post.title}
          description={post.description}
          date={post.date}
          image={post.image}
          readingTime={post.readingTime}
          tags={post.tags}
        />
      ))}
    </div>
  );
}
