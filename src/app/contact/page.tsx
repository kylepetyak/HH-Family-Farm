import { Metadata } from 'next';
import { Container, SocialIcons } from '@/components/ui';
import { ContactForm } from '@/components/forms';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Haskell Homestead. Questions, collaboration inquiries, or just want to say hi—we\'d love to hear from you.',
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="py-16 md:py-24 bg-cream-100">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif text-charcoal-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-charcoal-600">
              Have a question, want to collaborate, or just want to say hi?
              I&apos;d love to hear from you. Drop me a message below!
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-serif text-charcoal-900 mb-6">
                Send a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-cream-50 rounded-xl p-8">
                <h3 className="text-xl font-serif text-charcoal-900 mb-6">
                  Other Ways to Connect
                </h3>

                {/* Email */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-charcoal-500 uppercase tracking-wider mb-2">
                    Email
                  </h4>
                  <a
                    href="mailto:hello@haskellhomestead.com"
                    className="text-sage-600 hover:text-sage-700 transition-colors"
                  >
                    hello@haskellhomestead.com
                  </a>
                </div>

                {/* Social Media */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-charcoal-500 uppercase tracking-wider mb-2">
                    Follow Along
                  </h4>
                  <SocialIcons iconSize="md" />
                </div>

                {/* Location */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-charcoal-500 uppercase tracking-wider mb-2">
                    Location
                  </h4>
                  <p className="text-charcoal-600">
                    Fallbrook, California
                  </p>
                </div>

                {/* Response Time */}
                <div className="pt-6 border-t border-cream-200">
                  <p className="text-sm text-charcoal-500">
                    I typically respond within 48 hours. For brand inquiries,
                    please visit the{' '}
                    <a
                      href="/work-with-me"
                      className="text-sage-600 hover:text-sage-700 underline"
                    >
                      Work With Me
                    </a>{' '}
                    page.
                  </p>
                </div>
              </div>

              {/* FAQ Preview */}
              <div className="mt-8 bg-sage-50 rounded-xl p-8">
                <h3 className="text-lg font-serif text-charcoal-900 mb-4">
                  Common Questions
                </h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-medium text-charcoal-800">
                      Do you offer farm tours?
                    </p>
                    <p className="text-charcoal-600">
                      Not currently, but follow along on Instagram for virtual tours!
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-charcoal-800">
                      Can I send you products to review?
                    </p>
                    <p className="text-charcoal-600">
                      Please visit the Work With Me page for partnership inquiries.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-charcoal-800">
                      Do you sell animals or produce?
                    </p>
                    <p className="text-charcoal-600">
                      Not at this time—our homestead is primarily for our family.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
