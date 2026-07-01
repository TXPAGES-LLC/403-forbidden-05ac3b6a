import type { Metadata } from 'next'
import Link from 'next/link'
import { TrustStrip } from '@/components/trust-strip'
import { Breadcrumb } from '@/components/breadcrumb'

export const metadata: Metadata = {
  title: 'Moving Services in Conroe, TX | Huntsville Moving Service',
  description:
    'Local and long-distance movers serving Conroe, TX. Home, apartment, office, packing, specialty, and labor-only moves. Family-owned since 1992. Call (936) 291-7230.',
  openGraph: {
    title: 'Moving Services in Conroe, TX | Huntsville Moving Service',
    description:
      'Local and long-distance movers serving Conroe, TX. Home, apartment, office, packing, specialty, and labor-only moves. Family-owned since 1992.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Huntsville Moving Service — movers loading boxes into a van' }],
  },
  alternates: { canonical: 'https://www.huntsvillemovingservicetx.com/areas/conroe' },
}

const services = [
  {
    slug: '/local-movers',
    title: 'Local Moving in Conroe, TX',
    description:
      'We handle local moves throughout Conroe and Montgomery County — from older neighborhoods near the historic square to the master-planned communities expanding north and east of town. Our crew is on time and works at a steady, careful pace.',
  },
  {
    slug: '/long-distance-moving',
    title: 'Long-Distance Moving in Conroe, TX',
    description:
      'Moving from Conroe to Houston, San Antonio, Austin, or another Texas city? We manage the full job with our own crew and trucks — no brokering, one straight price.',
  },
  {
    slug: '/home-apartment-moves',
    title: 'Home & Apartment Moves in Conroe, TX',
    description:
      'Conroe\'s housing stock ranges from lakeside properties on Lake Conroe to high-density apartment complexes near the I-45 corridor. We size the crew and truck to your home and include furniture disassembly and reassembly on every move.',
  },
  {
    slug: '/office-commercial-moves',
    title: 'Office & Commercial Moves in Conroe, TX',
    description:
      'Conroe businesses get flexible scheduling — evenings and weekends available — so office relocations do not interrupt your operations. We handle desks, filing systems, electronics, and commercial equipment carefully.',
  },
  {
    slug: '/packing-unpacking',
    title: 'Packing & Unpacking in Conroe, TX',
    description:
      'We bring the packing materials and work room by room — reinforced boxes, packing paper, furniture pads, and stretch wrap. Full unpacking at your Conroe destination is available so you can settle in the same day.',
  },
  {
    slug: '/specialty-moving',
    title: 'Piano, Antique & Specialty Moving in Conroe, TX',
    description:
      'Heavy or fragile specialty items — pianos, gun safes, antiques, oversized furniture — need proper equipment and planning. We handle them methodically, not with improvised solutions.',
  },
  {
    slug: '/labor-only',
    title: 'Labor-Only Loading & Unloading in Conroe, TX',
    description:
      'Renting your own truck or using a storage container? Our crew provides professional loading and unloading in Conroe. Same standards as a full-service move — you supply the truck, we handle the heavy work.',
  },
]

const faqs = [
  {
    q: 'Do you serve all of Conroe, TX including Lake Conroe?',
    a: 'Yes. We serve Conroe proper and the surrounding Montgomery County area, including Lake Conroe communities, newer subdivisions north of downtown, and rural properties outside city limits.',
  },
  {
    q: 'How far is Conroe from Huntsville?',
    a: 'About 40 miles south of Huntsville on I-45 — roughly a 40-minute drive. Travel is included in the price James quotes you.',
  },
  {
    q: 'Can you move furniture to or from a lakefront home near Conroe?',
    a: 'Yes. We are used to properties with unique access — narrow lanes, distance from the street, stairs. James asks about your property layout when you call so the crew arrives prepared.',
  },
  {
    q: 'Do you handle moves between Conroe and The Woodlands?',
    a: 'Yes — Conroe and The Woodlands are adjacent on the I-45 corridor and we move between them regularly. No added fees for the short distance.',
  },
  {
    q: 'Are you licensed and insured to move in Montgomery County?',
    a: 'Yes. We are a fully licensed Texas carrier with cargo liability insurance. A certificate of insurance is available on request before your move date.',
  },
]

export default function ConroePage() {
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
    areaServed: { '@type': 'City', name: 'Conroe', addressRegion: 'TX' },
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

      <Breadcrumb items={[{ label: 'Areas We Serve', href: '/areas-we-serve' }, { label: 'Conroe, TX' }]} />

      <section className="bg-[var(--color-navy)] text-white py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <p className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-widest mb-2">
            Serving Conroe &amp; Montgomery County
          </p>
          <h1 className="font-display text-3xl lg:text-5xl font-bold text-balance leading-tight mb-4">
            Moving Services in Conroe, TX
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Huntsville Moving Service has served Conroe and Montgomery County for over 30 years. Every move is handled personally — our crew, our trucks, no third parties. James quotes you directly and stands behind every job.
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
            Conroe Moves Handled Personally
          </h2>
          <p className="text-[var(--color-muted-foreground)] leading-relaxed mb-4">
            Conroe has grown fast over the past decade — new subdivisions, a booming commercial district, and an influx of families relocating from Houston for more space. We have been part of that growth, handling moves across every corner of the city and out into the county.
          </p>
          <p className="text-[var(--color-muted-foreground)] leading-relaxed">
            James handles every quote himself. The price he gives you on the phone is what you pay — it does not change when the truck arrives. Our crew does not leave until you are satisfied with how the job was done.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-18 bg-[var(--color-muted)]">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-[var(--color-navy)] mb-2">
            All Services Available in Conroe, TX
          </h2>
          <p className="text-[var(--color-muted-foreground)] mb-10">
            Every service we offer is available in Conroe and Montgomery County. Call <a href="tel:+19362917230" className="text-[var(--color-accent)] font-semibold hover:underline">(936) 291-7230</a> to discuss your move.
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
            Serving Conroe, TX
          </h2>
          <p className="text-[var(--color-muted-foreground)] mb-6">
            About 40 miles south of our Huntsville base on I-45. View our Google listing for reviews and contact details.
          </p>
          <div className="rounded-lg overflow-hidden border border-[var(--color-border)] shadow-sm aspect-video w-full">
            <iframe
              title="Conroe, TX city center map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55052!2d-95.4560!3d30.3119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8647388b0c9a58b7%3A0x7a8e3c9f6d4e2b1a!2sConroe%2C%20TX!5e0!3m2!1sen!2sus!4v1"
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
            Frequently Asked Questions — Moving in Conroe, TX
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
          <h2 className="font-display text-2xl lg:text-3xl font-bold mb-3">Moving in Conroe? Call James.</h2>
          <p className="text-white/70 mb-6 leading-relaxed">
            Get a straight price from the owner. No call center, no middleman — James picks up and walks you through your move personally.
          </p>
          <a href="tel:+19362917230" className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-bold px-8 py-4 rounded text-xl transition-colors inline-block">
            (936) 291-7230
          </a>
          <p className="mt-4 text-white/50 text-sm">Also serving The Woodlands, Willis, Huntsville &amp; the I-45 corridor</p>
        </div>
      </section>
    </>
  )
}
