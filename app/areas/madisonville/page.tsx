import type { Metadata } from 'next'
import Link from 'next/link'
import { TrustStrip } from '@/components/trust-strip'
import { Breadcrumb } from '@/components/breadcrumb'

export const metadata: Metadata = {
  title: 'Moving Services in Madisonville, TX | Huntsville Moving Service',
  description:
    'Local and long-distance movers serving Madisonville, TX and Madison County. Home, office, packing, specialty, and labor-only moves. Family-owned since 1992. Call (936) 291-7230.',
  openGraph: {
    title: 'Moving Services in Madisonville, TX | Huntsville Moving Service',
    description:
      'Local and long-distance movers serving Madisonville, TX and Madison County. Home, office, packing, specialty, and labor-only moves. Family-owned since 1992.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Huntsville Moving Service — movers loading boxes into a van' }],
  },
  alternates: { canonical: 'https://www.huntsvillemovingservicetx.com/areas/madisonville' },
}

const services = [
  {
    slug: '/local-movers',
    title: 'Local Moving in Madisonville, TX',
    description:
      'We handle local moves within Madisonville and throughout Madison County — farmhouses, ranch properties, and in-town homes alike. Our crew understands rural access situations and plans accordingly.',
  },
  {
    slug: '/long-distance-moving',
    title: 'Long-Distance Moving in Madisonville, TX',
    description:
      'Relocating from Madisonville to another Texas city? We manage the full move ourselves — load, transport, and deliver — with our own crew and no subcontractors involved.',
  },
  {
    slug: '/home-apartment-moves',
    title: 'Home & Apartment Moves in Madisonville, TX',
    description:
      'From in-town rentals to large rural properties outside Madisonville, we bring the right-size crew and equipment. Furniture disassembly and reassembly are included on every move.',
  },
  {
    slug: '/office-commercial-moves',
    title: 'Office & Commercial Moves in Madisonville, TX',
    description:
      'Small businesses and professional offices in Madison County can count on us for careful, flexible commercial moves. We schedule around your hours and handle equipment and documents with care.',
  },
  {
    slug: '/packing-unpacking',
    title: 'Packing & Unpacking in Madisonville, TX',
    description:
      'We pack your Madisonville home room by room using reinforced boxes, packing paper, and furniture protection. Unpacking at the destination is available so you are not living out of boxes for a week.',
  },
  {
    slug: '/specialty-moving',
    title: 'Piano, Antique & Specialty Moving in Madisonville, TX',
    description:
      'Rural and ranch properties often contain items that require extra care — antique furniture, pianos, large safes. We plan specialty moves carefully and bring the right equipment before anything is loaded.',
  },
  {
    slug: '/labor-only',
    title: 'Labor-Only Loading & Unloading in Madisonville, TX',
    description:
      'Supplying your own truck or portable container? We provide an experienced loading and unloading crew in Madisonville. Careful handling, efficient work — same standards as any of our full-service jobs.',
  },
]

const faqs = [
  {
    q: 'Do you serve all of Madisonville and Madison County?',
    a: 'Yes. We serve Madisonville and the surrounding Madison County area, including rural routes, farm properties, and communities outside the city limits.',
  },
  {
    q: 'How far is Madisonville from Huntsville?',
    a: 'Madisonville is about 35 miles north of Huntsville on US-190 — roughly a 35-minute drive. We are up that way regularly and travel is included in your quoted price.',
  },
  {
    q: 'Can you handle a move from a rural property or farm outside Madisonville?',
    a: 'Yes. We are experienced with rural property moves — long driveways, gravel roads, and buildings that require extra planning. James will ask about your property when you call so the crew arrives prepared.',
  },
  {
    q: 'Do you move between Madisonville and Bryan or Huntsville?',
    a: 'Yes, frequently. All three cities are close together and we handle moves between them as part of our regular service area. No added fees for moves within this corridor.',
  },
  {
    q: 'Are you licensed and insured to move in Madison County?',
    a: 'Yes. Huntsville Moving Service is a licensed Texas carrier with full cargo liability coverage. Documentation is available before your move date.',
  },
]

export default function MadisonvillePage() {
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
    areaServed: { '@type': 'City', name: 'Madisonville', addressRegion: 'TX' },
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

      <Breadcrumb items={[{ label: 'Areas We Serve', href: '/areas-we-serve' }, { label: 'Madisonville, TX' }]} />

      <section className="bg-[var(--color-navy)] text-white py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <p className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-widest mb-2">
            Serving Madisonville &amp; Madison County
          </p>
          <h1 className="font-display text-3xl lg:text-5xl font-bold text-balance leading-tight mb-4">
            Moving Services in Madisonville, TX
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Huntsville Moving Service is just 35 miles down US-190 from Madisonville. We are a family-owned, owner-operated company that handles Madison County moves the same way we handle everything else — directly, honestly, and without hand-offs to outside crews.
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
            Small Town. Serious Service.
          </h2>
          <p className="text-[var(--color-muted-foreground)] leading-relaxed mb-4">
            Madisonville is a small county seat with a mix of in-town homes and large rural properties spread across Madison County. Moving here is different from moving in a big city — longer carries, gravel driveways, and farm buildings require planning and the right equipment. We have done it many times.
          </p>
          <p className="text-[var(--color-muted-foreground)] leading-relaxed">
            James answers your call, learns the specifics of your property, and builds a plan that accounts for every detail. Your quote reflects the actual job — not a generic estimate that changes on move day.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-18 bg-[var(--color-muted)]">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-[var(--color-navy)] mb-2">
            All Services Available in Madisonville, TX
          </h2>
          <p className="text-[var(--color-muted-foreground)] mb-10">
            Every service we offer is available in Madisonville and Madison County. Call <a href="tel:+19362917230" className="text-[var(--color-accent)] font-semibold hover:underline">(936) 291-7230</a> to discuss your move.
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
            Serving Madisonville, TX
          </h2>
          <p className="text-[var(--color-muted-foreground)] mb-6">
            About 35 miles north of our Huntsville base on US-190. View our Google listing for reviews and contact information.
          </p>
          <div className="rounded-lg overflow-hidden border border-[var(--color-border)] shadow-sm aspect-video w-full">
            <iframe
              title="Madisonville, TX city center map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55052!2d-95.9058!3d30.9571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864652b5a83e8d2b%3A0x3c9e3a2f6d4e2b1a!2sMadisonville%2C%20TX!5e0!3m2!1sen!2sus!4v1"
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
            Frequently Asked Questions — Moving in Madisonville, TX
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
          <h2 className="font-display text-2xl lg:text-3xl font-bold mb-3">Moving in Madisonville? Call James.</h2>
          <p className="text-white/70 mb-6 leading-relaxed">
            A straight price from the owner, a crew that shows up on time, and a job that does not end until you are satisfied.
          </p>
          <a href="tel:+19362917230" className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-bold px-8 py-4 rounded text-xl transition-colors inline-block">
            (936) 291-7230
          </a>
          <p className="mt-4 text-white/50 text-sm">Also serving Huntsville, Bryan, Trinity &amp; Madison County</p>
        </div>
      </section>
    </>
  )
}
