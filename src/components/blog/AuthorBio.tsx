import Link from 'next/link';
import { ImagePlaceholder } from '@/components/ui';

interface AuthorBioProps {
  className?: string;
}

export function AuthorBio({ className = '' }: AuthorBioProps) {
  return (
    <div className={`bg-cream-100 rounded-xl p-6 md:p-8 ${className}`}>
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <div className="flex-shrink-0">
          <ImagePlaceholder
            width={100}
            height={100}
            aspectRatio="1/1"
            text="Author"
            className="rounded-full"
          />
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-serif text-charcoal-900 mb-2">
            About the Author
          </h3>
          <p className="text-charcoal-600 mb-4">
            Hi there! I&apos;m the face behind Haskell Homestead. I&apos;m a working mom,
            animal lover, and homesteader living on 1.5 acres in Fallbrook, California
            with my firefighter husband and our wild kids. Follow along as we navigate
            homestead life one adventure at a time.
          </p>
          <Link
            href="/about"
            className="text-sage-600 font-medium hover:text-sage-700 transition-colors"
          >
            Read more about us &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
