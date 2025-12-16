import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image?: string;
  tags?: string[];
  readingTime: string;
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image?: string;
  tags?: string[];
  readingTime: string;
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR);
  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const filePath = path.join(BLOG_DIR, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);
      const { text } = readingTime(content);

      return {
        slug,
        title: data.title || 'Untitled',
        description: data.description || '',
        date: data.date || new Date().toISOString(),
        author: data.author || 'Haskell Homestead',
        image: data.image,
        tags: data.tags || [],
        readingTime: text,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const { text } = readingTime(content);

  return {
    slug,
    title: data.title || 'Untitled',
    description: data.description || '',
    date: data.date || new Date().toISOString(),
    author: data.author || 'Haskell Homestead',
    image: data.image,
    tags: data.tags || [],
    readingTime: text,
    content,
  };
}

export function getRelatedPosts(currentSlug: string, tags: string[] = [], limit = 3): BlogPostMeta[] {
  const allPosts = getAllPosts();

  // Filter out the current post and score by matching tags
  const scoredPosts = allPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      const matchingTags = (post.tags || []).filter((tag) => tags.includes(tag));
      return {
        ...post,
        score: matchingTags.length,
      };
    })
    .sort((a, b) => b.score - a.score || new Date(b.date).getTime() - new Date(a.date).getTime());

  return scoredPosts.slice(0, limit);
}

export function getLatestPosts(limit = 3): BlogPostMeta[] {
  return getAllPosts().slice(0, limit);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
