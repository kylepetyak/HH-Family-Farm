declare module '*.mdx' {
  import type { MDXComponents } from 'mdx/types';

  export const metadata: {
    title: string;
    description: string;
    date: string;
    author: string;
    image?: string;
    tags?: string[];
  };

  export default function MDXContent(props: {
    components?: MDXComponents;
  }): JSX.Element;
}
