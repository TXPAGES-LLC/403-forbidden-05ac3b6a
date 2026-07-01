import type { Metadata } from 'next'
import Link from 'next/link'
import { TrustStrip } from '@/components/trust-strip'
import { Breadcrumb } from '@/components/breadcrumb'

export const metadata: Metadata = {
  title: 'Moving Services in Navasota, TX | Huntsville Moving Service',
  description:
    'Local and long-distance movers serving Navasota, TX and Grimes County. Home, office, packing, specialty, and labor-only moves. Family-owned since 1992. Call (936) 291-7230.',
  openGraph: {
    title: 'Moving Services in Navasota, TX | Huntsville Moving Service',
    description:
      'Local and long-distance movers serving Navasota, TX and Grimes County. Home, office, packing, specialty, and labor-only moves. Family-owned since 1992.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Huntsville Moving Service — movers loading boxes into a van' }],
  },
  alternates: { canonical: 'https://www.huntsvillemovingservicetx.com/areas/navasota' },
}

const services = [
  {
    slug: '/local-movers',
    title: 'Local Moving in Navasota, TX',
    description:
      'We handle local moves within Navasota and throughout Grimes County — from in-town homes to rural properties along the Navasota River valley. Our crew is thorough, careful, and punctual.',
  },
  {
    slug: '/long-distance-moving',
    title: 'Long-Distance Moving in Navasota, TX',
    description:
      'Moving from Navasota to Houston, Dallas, Austin, or another Texas city? We run every long-distance job in-house — our crew, our trucks, and one consistent price from pickup to delivery.',
  },
  {
    slug: '/home-apartment-moves',
    title: 'Home & Apartment Moves in Navasota, TX',
    description:
      'Navasota has a mix of historic homes near downtown, newer residential developments, and rural properties throughout Grimes County. We match the crew and truck to your home\'s size and include furniture disassembly and reassembly in every move.',
  },
  {
    slug: '/office-commercial-moves',
    title: 'Office & Commercial Moves in Navasota, TX',
    description:
      'Grimes County businesses get professional, low-disruption commercial moves. We schedule around your operating hours and handle office furniture, electronics, and files with care.',
  },
  {
    slug: '/packing-unpacking',
    title: 'Packing & Unpacking in Navasota, TX',
    description:
      'We bring the materials and pack your Navasota home room by room — reinforced boxes, furniture pads, packing paper, and stretch wrap for large items. Unpacking at the destination is available to get you settled the same day.',
  },
  {
    slug: '/specialty-moving',
    title: 'Piano, Antique & Specialty Moving in Navasota, TX',
    description:
      'Navasota is known for its antique shops and the area has no shortage of high-value or fragile items that need careful handling. Pianos, antique furniture, safes — we plan these moves in detail before loading a single piece.',
  },
  {
    slug: '/labor-only',
    title: 'Labor-Only Loading & Unloading in Navasota, TX',
    description:
      'Have your own rental truck or storage unit in Navasota? Our crew handles the heavy lifting — loading and unloading with the same professional care as any full-service move.',
  },
]

const faqs = [
  {
    q: 'Do you serve all of Navasota and Grimes County?',
    a: 'Yes. We serve Navasota and the surrounding Grimes County area, including rural properties, farms, and small communities throughout the county.',
  },
  {
    q: 'How far is Navasota from Huntsville?',
    a: 'Navasota is about 50 miles southwest of Huntsville — roughly a 50-minute drive via TX-30 and TX-6. Travel is included in the price quoted upfront.',
  },
  {
    q: 'Do you move antiques or fragile items from Navasota?',
    a: 'Yes. Navasota has a well-known antique district and we regularly move antique furniture, decorative pieces, and fragile items. We use proper padding, custom crating when needed, and take our time with high-value pieces.',
  },
  {
    q: 'Can you move between Navasota and Bryan or College Station?',
    a: 'Yes. Navasota, Bryan, and College Station are all in the same regional corridor and we handle moves among all three cities regularly.',
  },
  {
    q: 'Are you licensed and insured for Grimes County moves?',
    a: 'Yes. Huntsville Moving Service is a licensed Texas carrier with full cargo liability insurance. A certificate of insurance is available before your move date.',
  },
]

export default function NavasotaPage() {
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
    areaServed: { '@type': 'City', name: 'Navasota', addressRegion: 'TX' },
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

      <Breadcrumb items={[{ label: 'Areas We Serve', href: '/areas-we-serve' }, { label: 'Navasota, TX' }]} />

      <section className="bg-[var(--color-navy)] text-white py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <p className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-widest mb-2">
            Serving Navasota &amp; Grimes County
          </p>
          <h1 className="font-display text-3xl lg:text-5xl font-bold text-balance leading-tight mb-4">
            Moving Services in Navasota, TX
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Huntsville Moving Service serves Navasota and Grimes County with over 30 years of experience moving families, businesses, and everything in between. Family-owned, owner-operated, and personally managed by James Yaggi on every job.
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
            Grimes County, Done Carefully
          </h2>
          <p className="text-[var(--color-muted-foreground)] leading-relaxed mb-4">
            Navasota sits at the crossroads of Grimes County — a city with deep historical roots, an active antique trade, and a mix of in-town homes and rural properties spread across rolling terrain. Moves here require the same care and planning we bring everywhere, with particular attention to items that carry both weight and value.
          </p>
          <p className="text-[var(--color-muted-foreground)] leading-relaxed">
            James gives you an honest price based on your specific situation — your home, your items, and your timeline. No generic estimates, no adjustments when the truck arrives.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-18 bg-[var(--color-muted)]">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-[var(--color-navy)] mb-2">
            All Services Available in Navasota, TX
          </h2>
          <p className="text-[var(--color-muted-foreground)] mb-10">
            Every service we offer is available in Navasota and Grimes County. Call <a href="tel:+19362917230" className="text-[var(--color-accent)] font-semibold hover:underline">(936) 291-7230</a> to discuss your move.
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
            Serving Navasota, TX
          </h2>
          <p className="text-[var(--color-muted-foreground)] mb-6">
            About 50 miles southwest of our Huntsville base. View our Google listing for reviews and contact information.
          </p>
          <div className="rounded-lg overflow-hidden border border-[var(--color-border)] shadow-sm aspect-video w-full">
            <iframe
              title="Navasota, TX city center map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55052!2d-96.0864!3d30.3877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864669abc123def0%3A0xabcdef0987654321!2sNavasota%2C%20TX!5e0!3m2!1sen!2sus!4v1"
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
            Frequently Asked Questions — Moving in Navasota, TX
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
          <h2 className="font-display text-2xl lg:text-3xl font-bold mb-3">Moving in Navasota? Call James.</h2>
          <p className="text-white/70 mb-6 leading-relaxed">
            A straight price, a reliable crew, and a job that gets done right. James answers the phone and handles your move personally.
          </p>
          <a href="tel:+19362917230" className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-bold px-8 py-4 rounded text-xl transition-colors inline-block">
            (936) 291-7230
          </a>
          <p className="mt-4 text-white/50 text-sm">Also serving Bryan, College Station, Huntsville &amp; Grimes County</p>
        </div>
      </section>
    </>
  )
}
