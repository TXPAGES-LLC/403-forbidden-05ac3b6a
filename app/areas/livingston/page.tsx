import type { Metadata } from 'next'
import Link from 'next/link'
import { TrustStrip } from '@/components/trust-strip'
import { Breadcrumb } from '@/components/breadcrumb'

export const metadata: Metadata = {
  title: 'Moving Services in Livingston, TX | Huntsville Moving Service',
  description:
    'Local and long-distance movers serving Livingston, TX and Polk County. Home, office, packing, specialty, and labor-only moves. Family-owned since 1992. Call (936) 291-7230.',
  openGraph: {
    title: 'Moving Services in Livingston, TX | Huntsville Moving Service',
    description:
      'Local and long-distance movers serving Livingston, TX and Polk County. Home, office, packing, specialty, and labor-only moves. Family-owned since 1992.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Huntsville Moving Service — movers loading boxes into a van' }],
  },
  alternates: { canonical: 'https://www.huntsvillemovingservicetx.com/areas/livingston' },
}

const services = [
  {
    slug: '/local-movers',
    title: 'Local Moving in Livingston, TX',
    description:
      'We handle local moves in Livingston and throughout Polk County — from neighborhoods near downtown to lakefront properties on Lake Livingston. Our crew plans around your specific site and works efficiently from start to finish.',
  },
  {
    slug: '/long-distance-moving',
    title: 'Long-Distance Moving in Livingston, TX',
    description:
      'Relocating from Livingston to Houston, Dallas, or another Texas city? We keep the job entirely in-house — our crew and our trucks from origin to destination, with one price agreed upfront.',
  },
  {
    slug: '/home-apartment-moves',
    title: 'Home & Apartment Moves in Livingston, TX',
    description:
      'Livingston and Polk County include a wide variety of housing — town homes, rural properties, and lake cabins along the shores of Lake Livingston. We bring the right equipment for each and include furniture disassembly and reassembly on every job.',
  },
  {
    slug: '/office-commercial-moves',
    title: 'Office & Commercial Moves in Livingston, TX',
    description:
      'Businesses in Livingston and Polk County can count on careful, schedule-aware commercial moves. We work around your business hours and handle office furniture, equipment, and files with appropriate care.',
  },
  {
    slug: '/packing-unpacking',
    title: 'Packing & Unpacking in Livingston, TX',
    description:
      'We supply the materials and pack your home room by room — reinforced boxes, furniture pads, stretch wrap, and packing paper. Unpacking at your new Livingston location is available so you are settled quickly.',
  },
  {
    slug: '/specialty-moving',
    title: 'Piano, Antique & Specialty Moving in Livingston, TX',
    description:
      'Lake Livingston properties often hold specialty items — pianos, large safes, antique furniture — that need careful planning and the right tools. We do not improvise on specialty jobs; we plan them.',
  },
  {
    slug: '/labor-only',
    title: 'Labor-Only Loading & Unloading in Livingston, TX',
    description:
      'Supplying your own truck or container in Livingston? Our crew provides the labor — careful loading and unloading with the same standards we apply to every full-service move.',
  },
]

const faqs = [
  {
    q: 'Do you serve Livingston and all of Polk County?',
    a: 'Yes. We serve Livingston and the broader Polk County area, including Lake Livingston shoreline communities and rural properties throughout the county.',
  },
  {
    q: 'How far is Livingston from Huntsville?',
    a: 'Livingston is about 40 miles east of Huntsville — roughly a 45-minute drive. Travel is included in your quoted price and there are no surprise charges on move day.',
  },
  {
    q: 'Can you move to or from a Lake Livingston cabin or waterfront property?',
    a: 'Yes. We handle lake property moves regularly and know the access challenges they often involve — steep slopes, narrow roads, and long carries. James will ask about your property layout when you call.',
  },
  {
    q: 'Do you move between Livingston and Huntsville or Trinity?',
    a: 'Yes, frequently. All three cities are within our regular service corridor and we handle moves among them as standard local or short-distance jobs.',
  },
  {
    q: 'Are you licensed and insured for Polk County moves?',
    a: 'Yes. We are a fully licensed Texas carrier with cargo liability coverage. Documentation is available on request before your move date.',
  },
]

export default function LivingstonPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    name: 'Huntsville Moving Service',
    url: 'https://www.huntsvillemovingservicetx.com',
    telephone: '+19362917230',
    sameAs: [
      'https://maps.google.com/?cid=8089976357722667618',
      'https://www.yelp.com/biz/huntsville-moving-huntsville',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Huntsville',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    areaServed: { '@type': 'City', name: 'Livingston', addressRegion: 'TX' },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.6', reviewCount: '26', bestRating: '5' },
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Breadcrumb items={[{ label: 'Areas We Serve', href: '/areas-we-serve' }, { label: 'Livingston, TX' }]} />

      <section className="bg-[var(--color-navy)] text-white py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <p className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-widest mb-2">
            Serving Livingston &amp; Polk County
          </p>
          <h1 className="font-display text-3xl lg:text-5xl font-bold text-balance leading-tight mb-4">
            Moving Services in Livingston, TX
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Huntsville Moving Service serves Livingston and Polk County from our base 40 miles west on US-190. We are family-owned, licensed, and we handle every move personally — no subcontractors, no surprises.
          </p>
  <div className="flex flex-col sm:flex-row gap-3 justify-center">
    <a href="tel:+19362917230" className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-bold px-8 py-4 rounded text-lg transition-colors inline-block">
      Call (936) 291-7230
    </a>
    <Link href="/contact" className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded text-lg transition-colors inline-block border border-white/30">
      Get a Free Estimate
    </Link>
  </div>
  </div>
  </section>

      <TrustStrip />

      <section className="py-14 lg:py-18 bg-[var(--color-background)]">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-[var(--color-navy)] mb-4">
            Lake Livingston and Beyond
          </h2>
          <p className="text-[var(--color-muted-foreground)] leading-relaxed mb-4">
            Livingston is the seat of Polk County and the gateway to Lake Livingston — one of the largest lakes in Texas. The area draws a steady stream of relocating retirees, seasonal residents converting cabins to year-round homes, and families moving to get more space. We have worked in all of these situations and understand the unique logistics that come with them.
          </p>
          <p className="text-[var(--color-muted-foreground)] leading-relaxed">
            James gives you a price that reflects your actual move — not a call-center quote that gets revised on arrival day. Every crew member we send is our own, trained to the same standard on every job.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-18 bg-[var(--color-muted)]">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-[var(--color-navy)] mb-2">
            All Services Available in Livingston, TX
          </h2>
          <p className="text-[var(--color-muted-foreground)] mb-10">
            Every service we offer is available in Livingston and Polk County. Call <a href="tel:+19362917230" className="text-[var(--color-accent)] font-semibold hover:underline">(936) 291-7230</a> to discuss your move.
          </p>
          <div className="space-y-6">
            {services.map((svc) => (
              <article key={svc.slug} className="bg-white rounded-lg p-6 border border-[var(--color-border)] shadow-sm">
                <h3 className="font-display text-lg font-bold text-[var(--color-navy)] mb-2">{svc.title}</h3>
                <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed mb-3">{svc.description}</p>
                <Link href={svc.slug} className="text-[var(--color-accent)] font-semibold text-sm hover:underline">View {svc.title} &rarr;</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-18 bg-[var(--color-background)]">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-[var(--color-navy)] mb-2">
            Serving Livingston, TX
          </h2>
          <p className="text-[var(--color-muted-foreground)] mb-6">
            About 40 miles east of our Huntsville base on US-190. View our Google listing for reviews and contact information.
          </p>
          <div className="rounded-lg overflow-hidden border border-[var(--color-border)] shadow-sm aspect-video w-full">
            <iframe
              title="Livingston, TX city center map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55052!2d-94.9357!3d30.7135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864779abc123def0%3A0xabcdef1234567890!2sLivingston%2C%20TX!5e0!3m2!1sen!2sus!4v1"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-4 text-sm text-[var(--color-muted-foreground)]">
            <a href="https://maps.google.com/?cid=8089976357722667618" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] font-semibold hover:underline">
              View our Google Business listing &rarr;
            </a>
            {' '}· 4.6 stars · Licensed &amp; Insured
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-18 bg-[var(--color-muted)]">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-[var(--color-navy)] mb-8">
            Frequently Asked Questions — Moving in Livingston, TX
          </h2>
          <dl className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border-b border-[var(--color-border)] pb-6 last:border-0 last:pb-0">
                <dt className="font-display font-bold text-[var(--color-navy)] mb-2">{q}</dt>
                <dd className="text-[var(--color-muted-foreground)] leading-relaxed text-sm">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-[var(--color-navy)] text-white py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-2xl lg:text-3xl font-bold mb-3">Moving in Livingston? Call James.</h2>
          <p className="text-white/70 mb-6 leading-relaxed">
            Get a straight price from the owner — no call center, no surprises. James picks up and walks you through every detail of your move.
          </p>
          <a href="tel:+19362917230" className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-bold px-8 py-4 rounded text-xl transition-colors inline-block">
            (936) 291-7230
          </a>
          <p className="mt-4 text-white/50 text-sm">Also serving Huntsville, Trinity, Conroe &amp; Polk County</p>
        </div>
      </section>
    </>
  )
}
