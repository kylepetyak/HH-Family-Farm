import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl md:text-4xl font-serif text-charcoal-950 mb-6 mt-8">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-serif text-charcoal-900 mb-4 mt-8">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-serif text-charcoal-900 mb-3 mt-6">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mb-4 leading-relaxed text-charcoal-800">{children}</p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-sage-600 underline hover:text-sage-700 transition-colors"
      >
        {children}
      </a>
    ),
    ul: ({ children }) => <ul className="list-disc mb-4 ml-6">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal mb-4 ml-6">{children}</ol>,
    li: ({ children }) => <li className="mb-2">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-sage-400 pl-4 italic my-6 text-charcoal-600">
        {children}
      </blockquote>
    ),
    img: ({ src, alt }) => (
      <Image
        src={src || ''}
        alt={alt || ''}
        width={800}
        height={450}
        className="rounded-lg my-8"
      />
    ),
    ...components,
  };
}
