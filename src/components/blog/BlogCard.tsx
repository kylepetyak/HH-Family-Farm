import Link from 'next/link';
import Image from 'next/image';
import { ImagePlaceholder } from '@/components/ui';
import { formatDate } from '@/lib/mdx';

interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  readingTime: string;
  tags?: string[];
}

export function BlogCard({
  slug,
  title,
  description,
  date,
  image,
  readingTime,
  tags,
}: BlogCardProps) {
  return (
    <article className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <Link href={`/blog/${slug}`} className="block">
        <div className="aspect-[16/10] relative overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <ImagePlaceholder
              aspectRatio="16/10"
              text="Blog Image"
              className="h-full"
            />
          )}
        </div>
      </Link>
      <div className="p-6">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-sage-600 bg-sage-50 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <Link href={`/blog/${slug}`}>
          <h3 className="text-xl font-serif text-charcoal-900 mb-2 group-hover:text-sage-600 transition-colors duration-200">
            {title}
          </h3>
        </Link>
        <p className="text-charcoal-600 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between text-sm text-charcoal-500">
          <time dateTime={date}>{formatDate(date)}</time>
          <span>{readingTime}</span>
        </div>
      </div>
    </article>
  );
}
