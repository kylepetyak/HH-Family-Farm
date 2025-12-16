import { Metadata } from 'next';
import Link from 'next/link';
import { Container, SectionHeading, Button, ImagePlaceholder } from '@/components/ui';
import { NewsletterForm } from '@/components/forms';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Meet the family behind Haskell Homestead. Learn about our journey from city life to homesteading on 1.5 acres in Fallbrook, California.',
};

const animals = [
  {
    name: 'Luna',
    type: 'Quarter Horse',
    description: 'Our 12-year-old mare and undisputed boss of the homestead.',
  },
  {
    name: 'Biscuit',
    type: 'Paint Gelding',
    description: "The goofiest horse you'll ever meet. Basically a giant golden retriever.",
  },
  {
    name: 'Maple',
    type: 'Kunekune Pig',
    description: 'The adventurous sister, always exploring new corners of the pasture.',
  },
  {
    name: 'Rosie',
    type: 'Kunekune Pig',
    description: 'The snuggler who will fall asleep in your lap (all 150 pounds of her).',
  },
  {
    name: 'The Flock',
    type: '8 Chickens',
    description: 'Rhode Island Reds, Buff Orpingtons, Easter Eggers, and one ridiculous Silkie.',
  },
  {
    name: 'Henrietta',
    type: 'Escape Artist',
    description: 'Our most determined chicken who lives by her own rules.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0 z-0">
          <ImagePlaceholder
            aspectRatio="21/9"
            text="About Hero Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/60 to-charcoal-900/20" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
              Our Story
            </h1>
            <p className="text-xl text-cream-100">
              From suburban dreamers to homesteaders on 1.5 California acres
            </p>
          </div>
        </Container>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal-900 mb-6">
                How It All Began
              </h2>
              <p className="text-lg text-charcoal-600 mb-4">
                It started with a Pinterest board, a dream, and probably way too much optimism.
                A few years ago, my husband (a firefighter) and I were living the typical
                suburban life—nice neighborhood, busy schedules, kids glued to screens.
              </p>
              <p className="text-lg text-charcoal-600 mb-4">
                But something felt off. We wanted our kids to know where food comes from,
                to get their hands dirty, to understand hard work and the satisfaction of
                caring for animals. We wanted a different kind of life.
              </p>
              <p className="text-lg text-charcoal-600">
                So we did the thing—we found 1.5 beautiful acres in Fallbrook, California,
                and jumped in headfirst. Was it terrifying? Absolutely. Did we know what
                we were doing? Not even a little bit. Would we do it all again? In a heartbeat.
              </p>
            </div>
            <div>
              <ImagePlaceholder
                aspectRatio="4/3"
                text="Family Photo"
                className="rounded-xl"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* The Firefighter + Homesteader Life */}
      <section className="section-padding bg-cream-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <ImagePlaceholder
                aspectRatio="4/3"
                text="Firefighter/Family Image"
                className="rounded-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal-900 mb-6">
                The Firefighter + Homesteader Life
              </h2>
              <p className="text-lg text-charcoal-600 mb-4">
                My husband works 48-hour shifts at the fire station, which means I&apos;m often
                solo-parenting AND solo-homesteading. It&apos;s a lot. But it&apos;s also taught me
                incredible resilience—and given our kids amazing role models for service
                and hard work.
              </p>
              <p className="text-lg text-charcoal-600 mb-4">
                When he&apos;s home, he&apos;s all in—building fences, fixing things I&apos;ve
                broken, and teaching the kids that being tough and being gentle aren&apos;t
                opposites.
              </p>
              <p className="text-lg text-charcoal-600">
                First responder families understand a unique kind of chaos, and adding
                homestead life to that mix has been... an adventure. But it&apos;s our adventure.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Meet the Animals */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeading
            title="Meet the Animals"
            subtitle="The real stars of Haskell Homestead"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {animals.map((animal) => (
              <div
                key={animal.name}
                className="bg-cream-50 rounded-xl overflow-hidden"
              >
                <ImagePlaceholder
                  aspectRatio="4/3"
                  text={animal.name}
                  className="w-full"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif text-charcoal-900 mb-1">
                    {animal.name}
                  </h3>
                  <p className="text-sm text-sage-600 font-medium mb-2">
                    {animal.type}
                  </p>
                  <p className="text-charcoal-600">{animal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Fallbrook */}
      <section className="section-padding bg-sage-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal-900 mb-6">
                Why Fallbrook?
              </h2>
              <p className="text-lg text-charcoal-600 mb-4">
                Fallbrook is known as the &quot;Avocado Capital of the World,&quot; but to us,
                it&apos;s so much more. It&apos;s rolling hills, perfect weather, and a community
                that still waves when they drive by.
              </p>
              <p className="text-lg text-charcoal-600 mb-4">
                Located in northern San Diego County, we get the best of both worlds—
                rural homestead life with easy access to beaches, mountains, and everything
                Southern California has to offer.
              </p>
              <p className="text-lg text-charcoal-600 mb-4">
                The climate is ideal for year-round gardening and raising animals.
                Our livestock enjoy mild winters and we never have to worry about
                snow or extreme cold.
              </p>
              <p className="text-lg text-charcoal-600">
                Plus, the sunsets here? Absolutely unreal. Every single evening.
              </p>
            </div>
            <div>
              <ImagePlaceholder
                aspectRatio="4/3"
                text="Fallbrook Landscape"
                className="rounded-xl"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-terracotta-500">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              Want to Work Together?
            </h2>
            <p className="text-lg text-terracotta-100 mb-8">
              Whether you&apos;re a brand looking for authentic partnerships or just
              want to say hi, I&apos;d love to connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/work-with-me" className="bg-white text-terracotta-600 hover:bg-cream-100">
                View Partnership Options
              </Button>
              <Button href="/contact" variant="outline" className="border-white text-white hover:bg-white/10">
                Get in Touch
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-cream-100">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal-900 mb-4">
              Join Our Journey
            </h2>
            <p className="text-lg text-charcoal-600 mb-8">
              Get weekly updates from the homestead—stories, tips, and behind-the-scenes
              moments delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterForm formId="about-newsletter" variant="inline" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
