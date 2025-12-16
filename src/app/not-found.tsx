import Link from 'next/link';
import { Container, Button } from '@/components/ui';

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center">
      <Container size="narrow">
        <div className="text-center">
          {/* Fun 404 illustration area */}
          <div className="mb-8">
            <span className="text-8xl md:text-9xl">🐔</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif text-charcoal-900 mb-4">
            Oops! This page flew the coop.
          </h1>

          <p className="text-lg text-charcoal-600 mb-8 max-w-md mx-auto">
            Looks like Henrietta (our escape artist chicken) led you astray.
            Let&apos;s get you back to the homestead.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/">
              Back to Home
            </Button>
            <Button href="/blog" variant="outline">
              Read the Blog
            </Button>
          </div>

          <p className="mt-8 text-sm text-charcoal-400">
            If you think this is a mistake, please{' '}
            <Link href="/contact" className="text-sage-600 hover:underline">
              let us know
            </Link>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
