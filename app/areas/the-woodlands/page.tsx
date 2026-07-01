import type { Metadata } from 'next'
import Link from 'next/link'
import { TrustStrip } from '@/components/trust-strip'
import { Breadcrumb } from '@/components/breadcrumb'

export const metadata: Metadata = {
  title: 'Moving Services in The Woodlands, TX | Huntsville Moving Service',
  description:
    'Local and long-distance movers serving The Woodlands, TX. Home, apartment, office, packing, specialty, and labor-only moves. Family-owned since 1992. Call (936) 291-7230.',
  openGraph: {
    title: 'Moving Services in The Woodlands, TX | Huntsville Moving Service',
    description:
      'Local and long-distance movers serving The Woodlands, TX. Home, apartment, office, packing, specialty, and labor-only moves. Family-owned since 1992.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Huntsville Moving Service — movers loading boxes into a van' }],
  },
  alternates: { canonical: 'https://www.huntsvillemovingservicetx.com/areas/the-woodlands' },
}

const services = [
  {
    slug: '/local-movers',
    title: 'Local Moving in The Woodlands, TX',
    description:
      'We handle local moves within The Woodlands and across the surrounding Montgomery County area — from townhomes and condos to large estate homes in the Woodlands villages. Our crew respects HOA access rules and works efficiently on gated community moves.',
  },
  {
    slug: '/long-distance-moving',
    title: 'Long-Distance Moving in The Woodlands, TX',
    description:
      'Relocating from The Woodlands to Dallas, Austin, San Antonio, or elsewhere in Texas? We manage the entire intrastate move in-house — one crew, one truck, one price agreed before anything is loaded.',
  },
  {
    slug: '/home-apartment-moves',
    title: 'Home & Apartment Moves in The Woodlands, TX',
    description:
      'The Woodlands has one of the most diverse housing markets in the Houston metro — upscale single-family homes, luxury condos, and apartment communities throughout its village system. We are experienced with the full range and include furniture disassembly and reassembly on every job.',
  },
  {
    slug: '/office-commercial-moves',
    title: 'Office & Commercial Moves in The Woodlands, TX',
    description:
      'The Woodlands hosts major corporate campuses and a thriving commercial district. We provide professional office relocations with flexible scheduling — including after hours and weekends — to minimize business disruption.',
  },
  {
    slug: '/packing-unpacking',
    title: 'Packing & Unpacking in The Woodlands, TX',
    description:
      'We pack your Woodlands home with professional materials — reinforced boxes, furniture pads, packing paper, and stretch wrap for large items. Full unpacking at the destination is available so you can get settled quickly.',
  },
  {
    slug: '/specialty-moving',
    title: 'Piano, Antique & Specialty Moving in The Woodlands, TX',
    description:
      'High-value homes in The Woodlands often contain grand pianos, antique furniture, large safes, and art pieces that require special handling. We plan each specialty move carefully and bring the right equipment — nothing is improvised.',
  },
  {
    slug: '/labor-only',
    title: 'Labor-Only Loading & Unloading in The Woodlands, TX',
    description:
      'Supplying your own truck or pod for a Woodlands move? Our crew provides professional loading and unloading. We work carefully in gated communities and respect property and landscaping throughout the job.',
  },
]

const faqs = [
  {
    q: 'Do you serve all of The Woodlands, TX?',
    a: 'Yes. We serve all Woodlands villages — Grogan\'s Mill, Panther Creek, Cochran\'s Crossing, Indian Springs, Alden Bridge, Sterling Ridge, College Park, and all surrounding areas in Montgomery County.',
  },
  {
    q: 'How far is The Woodlands from Huntsville?',
    a: 'The Woodlands is approximately 55 miles south of Huntsville on I-45 — about an hour\'s drive. Travel is factored into your quoted price with no day-of surprises.',
  },
  {
    q: 'Can you handle a move in a gated Woodlands community?',
    a: 'Yes. We are experienced with gated access requirements, HOA check-in procedures, and move-in time restrictions common in Woodlands neighborhoods. James will ask about any requirements when you call.',
  },
  {
    q: 'Do you move large or high-value items in The Woodlands?',
    a: 'Yes. We handle grand pianos, large safes, antiques, and high-value furniture regularly in The Woodlands. These items are planned and prepped before move day so nothing is rushed.',
  },
  {
    q: 'Are you insured for moves in The Woodlands?',
    a: 'Yes. We are a licensed Texas carrier with full cargo liability coverage. A certificate of insurance is available before your move date if needed by your HOA or building management.',
  },
]

export default function TheWoodlandsPage() {
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
    areaServed: { '@type': 'City', name: 'The Woodlands', addressRegion: 'TX' },
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

      <Breadcrumb items={[{ label: 'Areas We Serve', href: '/areas-we-serve' }, { label: 'The Woodlands, TX' }]} />

      <section className="bg-[var(--color-navy)] text-white py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <p className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-widest mb-2">
            Serving The Woodlands &amp; Montgomery County
          </p>
          <h1 className="font-display text-3xl lg:text-5xl font-bold text-balance leading-tight mb-4">
            Moving Services in The Woodlands, TX
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Huntsville Moving Service serves The Woodlands from our base an hour north on I-45. We bring the same family-owned, owner-operated professionalism that has defined our business since 1992 — careful handling, honest pricing, and a crew that does not leave until the job is done right.
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
            Woodlands Moves Handled With Care
          </h2>
          <p className="text-[var(--color-muted-foreground)] leading-relaxed mb-4">
            The Woodlands is a planned community with high expectations — from HOA access procedures to the quality of homes and belongings that need to be moved. We understand that a move in a Woodlands village is different from a move in a generic subdivision, and we approach it accordingly.
          </p>
          <p className="text-[var(--color-muted-foreground)] leading-relaxed">
            James quotes every Woodlands job personally. He asks about gated access, elevator requirements, and any HOA move-in windows so the crew arrives prepared. The price you are quoted is the price you pay.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-18 bg-[var(--color-muted)]">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-[var(--color-navy)] mb-2">
            All Services Available in The Woodlands, TX
          </h2>
          <p className="text-[var(--color-muted-foreground)] mb-10">
            Every service we offer is available in The Woodlands. Call <a href="tel:+19362917230" className="text-[var(--color-accent)] font-semibold hover:underline">(936) 291-7230</a> to discuss your move.
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
            Serving The Woodlands, TX
          </h2>
          <p className="text-[var(--color-muted-foreground)] mb-6">
            About 55 miles south of our Huntsville base on I-45. View our Google listing for reviews and contact information.
          </p>
          <div className="rounded-lg overflow-hidden border border-[var(--color-border)] shadow-sm aspect-video w-full">
            <iframe
              title="The Woodlands, TX city center map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55052!2d-95.4613!3d30.1658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8647359ee9d51797%3A0x98e01cfc5bba1b58!2sThe%20Woodlands%2C%20TX!5e0!3m2!1sen!2sus!4v1"
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
            Frequently Asked Questions — Moving in The Woodlands, TX
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
          <h2 className="font-display text-2xl lg:text-3xl font-bold mb-3">Moving in The Woodlands? Call James.</h2>
          <p className="text-white/70 mb-6 leading-relaxed">
            A straight price from the owner, a crew that respects your home, and a job that gets finished properly. James answers the phone and manages every detail personally.
          </p>
          <a href="tel:+19362917230" className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-bold px-8 py-4 rounded text-xl transition-colors inline-block">
            (936) 291-7230
          </a>
          <p className="mt-4 text-white/50 text-sm">Also serving Conroe, Willis, Huntsville &amp; the I-45 corridor</p>
        </div>
      </section>
    </>
  )
}
