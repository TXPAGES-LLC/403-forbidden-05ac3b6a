import type { Metadata } from 'next'
import Link from 'next/link'
import { TrustStrip } from '@/components/trust-strip'
import { Breadcrumb } from '@/components/breadcrumb'
import { VerifiedProfiles } from '@/components/verified-profiles'

export const metadata: Metadata = {
  title: 'Contact Huntsville Moving Inc. | Call (936) 291-7230 | Huntsville, TX',
  description:
    'Contact Huntsville Moving Inc. Call or text (936) 291-7230. James Yaggi answers personally, Mon–Sat 8am–6pm. Based in Huntsville, TX. Licensed, insured, family-owned since 1992.',
  alternates: { canonical: 'https://www.huntsvillemovingservicetx.com/contact' },
  openGraph: {
    title: 'Contact Huntsville Moving Inc. | Call (936) 291-7230',
    description: 'Call or text James Yaggi directly at (936) 291-7230, Mon–Sat 8am–6pm. No call center — the owner answers.',
    url: 'https://www.huntsvillemovingservicetx.com/contact',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Huntsville Moving Service — movers loading boxes into a van' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MovingCompany',
  name: 'Huntsville Moving Inc.',
  url: 'https://www.huntsvillemovingservicetx.com',
  sameAs: [
    'https://maps.google.com/?cid=8089976357722667618',
    'https://www.yelp.com/biz/huntsville-moving-huntsville',
  ],
  telephone: '+19362917230',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Huntsville',
    addressRegion: 'TX',
    postalCode: '77340',
    addressCountry: 'US',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumb items={[{ label: 'Contact' }]} />

      {/* Hero */}
      <section className="bg-[var(--color-navy)] text-white py-14 lg:py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 lg:px-6">
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-balance mb-3">
            Contact Huntsville Moving Inc.
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Call or text James directly. He answers the phone himself — no call center, no dispatcher.
          </p>
        </div>
      </section>

      <TrustStrip />

      {/* Contact cards */}
      <section className="py-14 lg:py-20 bg-[var(--color-background)]">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {/* Call */}
            <div className="bg-white border border-[var(--color-border)] rounded-lg p-6 text-center" data-gtag-location="contact_page">
              <div className="w-12 h-12 bg-[var(--color-accent)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h2 className="font-display font-bold text-[var(--color-navy)] text-lg mb-1">Call Us</h2>
              <p className="text-[var(--color-muted-foreground)] text-sm mb-3">Answered by James, owner</p>
              <a
                href="tel:+19362917230"
                className="font-display text-xl font-bold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors block"
              >
                (936) 291-7230
              </a>
              <p className="text-xs text-[var(--color-muted-foreground)] mt-2">Mon–Sat 8am–6pm</p>
            </div>

            {/* Text */}
            <div className="bg-white border border-[var(--color-border)] rounded-lg p-6 text-center" data-gtag-location="contact_page">
              <div className="w-12 h-12 bg-[var(--color-navy)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h2 className="font-display font-bold text-[var(--color-navy)] text-lg mb-1">Text Us</h2>
              <p className="text-[var(--color-muted-foreground)] text-sm mb-3">Same number — quick questions welcome</p>
              <a
                href="sms:+19362917230"
                className="font-display text-xl font-bold text-[var(--color-navy)] hover:text-[var(--color-navy-700)] transition-colors block"
              >
                (936) 291-7230
              </a>
              <p className="text-xs text-[var(--color-muted-foreground)] mt-2">Tap to open your texting app</p>
            </div>

            {/* Google Maps */}
            <div className="bg-white border border-[var(--color-border)] rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-[var(--color-warm-gray)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[var(--color-navy)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="font-display font-bold text-[var(--color-navy)] text-lg mb-1">Find Us on Google</h2>
              <p className="text-[var(--color-muted-foreground)] text-sm mb-3">See reviews &amp; get directions</p>
              <a
                href="https://maps.google.com/?cid=8089976357722667618"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[var(--color-navy)] hover:text-[var(--color-accent)] transition-colors text-sm underline"
              >
                View on Google Maps &rarr;
              </a>
              <p className="text-xs text-[var(--color-muted-foreground)] mt-2">Read our 4.6-star reviews</p>
            </div>
          </div>
        </div>
      </section>

      <VerifiedProfiles />

      {/* Contact bottom NAP */}
      <section className="py-14 lg:py-20 bg-[var(--color-background)]">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          {/* NAP block */}
          <div className="bg-[var(--color-navy)] text-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8" data-gtag-location="contact_page">
            <div>
              <h2 className="font-display text-xl font-bold mb-4">Business Information</h2>
              <address className="not-italic text-white/70 space-y-2 text-sm leading-relaxed">
                <p className="text-white font-semibold text-base">Huntsville Moving Inc.</p>
                <p>James &amp; Yvonne Yaggi, Owners</p>
                <p>Huntsville, TX 77340</p>
                <p className="pt-1">
                  <a href="tel:+19362917230" className="text-white font-bold text-lg hover:text-[var(--color-accent)] transition-colors">
                    (936) 291-7230
                  </a>
                </p>
                <p>
                  <a href="sms:+19362917230" className="text-white/60 hover:text-white transition-colors text-xs">
                    Text the same number
                  </a>
                </p>
                <p className="pt-1">
                  <a
                    href="https://maps.google.com/?cid=8089976357722667618"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-accent)] hover:text-white transition-colors text-sm font-semibold"
                  >
                    View on Google Maps &rarr;
                  </a>
                </p>
              </address>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold mb-4">Hours &amp; Licensing</h2>
              <div className="text-white/70 text-sm space-y-1.5">
                <p><span className="text-white font-medium">Monday–Saturday:</span> 8:00am – 6:00pm</p>
                <p><span className="text-white font-medium">Sunday:</span> Closed</p>
                <div className="mt-4 pt-4 border-t border-white/10 space-y-1">
                  <p>Licensed · Insured · Bonded</p>
                  <p>Family-Owned Since 1992</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
