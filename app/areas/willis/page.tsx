import type { Metadata } from 'next'
import Link from 'next/link'
import { TrustStrip } from '@/components/trust-strip'
import { Breadcrumb } from '@/components/breadcrumb'

export const metadata: Metadata = {
  title: 'Moving Services in Willis, TX | Huntsville Moving Service',
  description:
    'Movers serving Willis, TX and Montgomery County. Local moves, long-distance, packing, specialty items, and labor-only. Family-owned since 1992. Call (936) 291-7230.',
  openGraph: {
    title: 'Moving Services in Willis, TX | Huntsville Moving Service',
    description:
      'Movers serving Willis, TX and Montgomery County. Local moves, long-distance, packing, specialty items, and labor-only. Family-owned since 1992.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Huntsville Moving Service — movers loading boxes into a van' }],
  },
  alternates: { canonical: 'https://www.huntsvillemovingservicetx.com/areas/willis' },
}

const services = [
  {
    slug: '/local-movers',
    title: 'Local Moving in Willis, TX',
    description:
      'We handle local moves throughout Willis and the surrounding Montgomery County area — from smaller homes near the city center to lake properties along Lake Conroe. Efficient and punctual every time.',
  },
  {
    slug: '/long-distance-moving',
    title: 'Long-Distance Moving in Willis, TX',
    description:
      'Relocating out of Willis to another Texas city? We handle the full intrastate move — load, transport, and unload — entirely in-house without brokering your job to another company.',
  },
  {
    slug: '/home-apartment-moves',
    title: 'Home & Apartment Moves in Willis, TX',
    description:
      'From apartments along FM 1097 to larger homes near Lake Conroe, we bring the appropriate truck and crew for your property. Furniture disassembly, reassembly, and padding are included on every move.',
  },
  {
    slug: '/office-commercial-moves',
    title: 'Office & Commercial Moves in Willis, TX',
    description:
      'Willis businesses relocating in Montgomery County get flexible scheduling and careful handling. We work around your hours — including weekends when needed — to keep your business running.',
  },
  {
    slug: '/packing-unpacking',
    title: 'Packing & Unpacking in Willis, TX',
    description:
      'Our packing team covers your Willis home with professional-grade materials. We work room by room, label every box, and offer unpacking at the destination so you are settled sooner.',
  },
  {
    slug: '/specialty-moving',
    title: 'Piano, Antique & Specialty Moving in Willis, TX',
    description:
      'Lake-area properties near Willis often contain items that need special handling — pianos, large safes, antiques, oversized furniture. We plan specialty moves carefully before loading anything.',
  },
  {
    slug: '/labor-only',
    title: 'Labor-Only Loading & Unloading in Willis, TX',
    description:
      'Bringing a rental truck or container to your Willis property? Our crew handles the loading or unloading while you focus on everything else. Same standards as a full-service move.',
  },
]

const faqs = [
  {
    q: 'Do you serve all of Willis, TX?',
    a: 'Yes — we serve Willis proper and the surrounding Montgomery County area, including Lake Conroe waterfront properties and rural routes outside the city limits.',
  },
  {
    q: 'How far is Willis from Huntsville?',
    a: 'Willis is about 35 miles south of Huntsville on I-45. It is one of the closer cities in our service area and we are there frequently.',
  },
  {
    q: 'Do you move between Willis and Conroe or The Woodlands?',
    a: 'Yes — Willis, Conroe, and The Woodlands are all close together on the I-45 corridor and we handle moves between them regularly. No added fees for the short distance.',
  },
  {
    q: 'Can you handle a Lake Conroe property with waterfront access?',
    a: 'Yes. Waterfront and lake properties often have unique access considerations — narrow paths, stairs to the dock, or long carries from the house to the street. James will ask about your property layout when you call.',
  },
  {
    q: 'Are you licensed and insured for Willis and Montgomery County?',
    a: 'Yes. Huntsville Moving Service holds a Texas carrier license with full cargo liability insurance. Documentation available before your move date.',
  },
]

export default function WillisPage() {
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
    areaServed: {
      '@type': 'City',
      name: 'Willis',
      addressRegion: 'TX',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.6',
      reviewCount: '26',
      bestRating: '5',
    },
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

      <Breadcrumb items={[{ label: 'Areas We Serve', href: '/areas-we-serve' }, { label: 'Willis, TX' }]} />

      <section className="bg-[var(--color-navy)] text-white py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <p className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-widest mb-2">
            Serving Willis &amp; Montgomery County
          </p>
          <h1 className="font-display text-3xl lg:text-5xl font-bold text-balance leading-tight mb-4">
            Moving Services in Willis, TX
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Willis sits between Huntsville and Conroe on I-45 — right in the heart of our service corridor. We have been handling Montgomery County moves for over 30 years, and Willis residents get the same owner-operated, no-middleman service as everyone else on the route.
          </p>
  <div className="flex flex-col sm:flex-row gap-3 justify-center">
    <a
      href="tel:+19362917230"
      className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-bold px-8 py-4 rounded text-lg transition-colors inline-block"
    >
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
            Right in Our Corridor
          </h2>
          <p className="text-[var(--color-muted-foreground)] leading-relaxed mb-4">
            Willis is one of the most frequently served cities in our territory. Its location on I-45 between Huntsville and Conroe makes it a natural hub for moves in both directions — people coming from Houston looking for more space, and longtime residents heading into the city. We have seen it all and handled it all.
          </p>
          <p className="text-[var(--color-muted-foreground)] leading-relaxed">
            When you call (936) 291-7230, James answers, asks the right questions, and gives you a number you can count on. There is no bait-and-switch pricing — the quote you get on the phone is what you pay.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-18 bg-[var(--color-muted)]">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-[var(--color-navy)] mb-2">
            All Services Available in Willis, TX
          </h2>
          <p className="text-[var(--color-muted-foreground)] mb-10">
            Every service we offer is available in Willis and Montgomery County. Call <a href="tel:+19362917230" className="text-[var(--color-accent)] font-semibold hover:underline">(936) 291-7230</a> to book or get pricing.
          </p>
          <div className="space-y-6">
            {services.map((svc) => (
              <article key={svc.slug} className="bg-white rounded-lg p-6 border border-[var(--color-border)] shadow-sm">
                <h3 className="font-display text-lg font-bold text-[var(--color-navy)] mb-2">{svc.title}</h3>
                <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed mb-3">{svc.description}</p>
  <Link href={svc.slug} className="text-[var(--color-accent)] font-semibold text-sm hover:underline">
    View {svc.title} &rarr;
  </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-18 bg-[var(--color-background)]">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-[var(--color-navy)] mb-2">
            Find Us on Google Maps
          </h2>
          <p className="text-[var(--color-muted-foreground)] mb-6">
            Based in Huntsville, TX — serving Willis and Montgomery County. View our listing for reviews and directions.
          </p>
          <div className="rounded-lg overflow-hidden border border-[var(--color-border)] shadow-sm aspect-video w-full">
            <iframe
              title="Huntsville Moving Service — Willis, TX service area on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55048!2d-95.4849!3d30.4388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864735dc5b8e6c47%3A0x0!2sWillis%2C%20TX!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
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
            Frequently Asked Questions — Moving in Willis, TX
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
          <h2 className="font-display text-2xl lg:text-3xl font-bold mb-3">
            Moving in Willis? Call James.
          </h2>
          <p className="text-white/70 mb-6 leading-relaxed">
            Willis is in our backyard. Get a straight price from the owner and a crew that knows the I-45 corridor as well as anyone in the business.
          </p>
          <a href="tel:+19362917230" className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-bold px-8 py-4 rounded text-xl transition-colors inline-block">
            (936) 291-7230
          </a>
          <p className="mt-4 text-white/50 text-sm">
            Also serving Conroe, The Woodlands, Huntsville &amp; the I-45 corridor
          </p>
        </div>
      </section>
    </>
  )
}
