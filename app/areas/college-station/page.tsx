import type { Metadata } from 'next'
import Link from 'next/link'
import { TrustStrip } from '@/components/trust-strip'
import { Breadcrumb } from '@/components/breadcrumb'

export const metadata: Metadata = {
  title: 'Moving Services in College Station, TX | Huntsville Moving Service',
  description:
    'Local and long-distance movers serving College Station, TX. Home, apartment, office, packing, specialty, and labor-only moves. Family-owned since 1992. Call (936) 291-7230.',
  openGraph: {
    title: 'Moving Services in College Station, TX | Huntsville Moving Service',
    description:
      'Local and long-distance movers serving College Station, TX. Home, apartment, office, packing, specialty, and labor-only moves. Family-owned since 1992.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Huntsville Moving Service — movers loading boxes into a van' }],
  },
  alternates: { canonical: 'https://www.huntsvillemovingservicetx.com/areas/college-station' },
}

const services = [
  {
    slug: '/local-movers',
    title: 'Local Moving in College Station, TX',
    description:
      'We handle local moves throughout College Station — from off-campus apartments to homes in Pebble Creek, Castlegate, and other established neighborhoods. Our crew works efficiently and protects your belongings the same way on every job.',
  },
  {
    slug: '/long-distance-moving',
    title: 'Long-Distance Moving in College Station, TX',
    description:
      'Moving out of College Station to Houston, Dallas, Austin, or another Texas city? We run the entire job in-house — our crew, our trucks, one consistent point of contact from loading to delivery.',
  },
  {
    slug: '/home-apartment-moves',
    title: 'Home & Apartment Moves in College Station, TX',
    description:
      'College Station turns over a large volume of housing every year — student apartments, faculty housing, and family homes. We are equipped for all of it: studio to five-bedroom, complex access gates to wide suburban driveways. Furniture disassembly and reassembly included.',
  },
  {
    slug: '/office-commercial-moves',
    title: 'Office & Commercial Moves in College Station, TX',
    description:
      'Businesses relocating within the Bryan-College Station area count on us for minimal-disruption office moves. We handle everything from desks and filing systems to server equipment, and we offer weekend scheduling to keep your operations running.',
  },
  {
    slug: '/packing-unpacking',
    title: 'Packing & Unpacking in College Station, TX',
    description:
      'We bring the materials and pack your home room by room — reinforced boxes, furniture pads, packing paper, and stretch wrap. Full unpacking at your new location is available so you are settled in the same day.',
  },
  {
    slug: '/specialty-moving',
    title: 'Piano, Antique & Specialty Moving in College Station, TX',
    description:
      'Pianos, antiques, large safes, and oversized items need more than a standard moving crew. We use the right dollies, straps, and planning to move specialty pieces safely — no improvised rigging.',
  },
  {
    slug: '/labor-only',
    title: 'Labor-Only Loading & Unloading in College Station, TX',
    description:
      'Got a rental truck or portable container? Hire our crew to handle the heavy lifting. We load and unload with the same care we bring to every full-service move.',
  },
]

const faqs = [
  {
    q: 'Do you move apartments near Texas A&M University?',
    a: 'Yes. We move apartments and rental homes throughout College Station regularly, including properties near the Texas A&M campus, on Holleman Drive, and in the University Drive corridor.',
  },
  {
    q: 'How far in advance should I book for a College Station move?',
    a: 'One to two weeks is usually enough for local moves. End-of-semester periods in May and August are our busiest times — booking three to four weeks out during those windows is strongly recommended.',
  },
  {
    q: 'Do you move between College Station and Bryan?',
    a: 'Yes, frequently. Bryan and College Station are adjacent cities and we treat moves between them as local jobs. Same crew, same price structure, no added fees for the short distance.',
  },
  {
    q: 'How far is College Station from Huntsville?',
    a: 'About 50 miles southwest — roughly a 50-minute drive from our Huntsville base. Travel is factored into your quoted price upfront.',
  },
  {
    q: 'Are you licensed and insured for moves in College Station?',
    a: 'Yes. We are a licensed Texas carrier with full cargo liability coverage. A certificate of insurance is available before your move date if needed.',
  },
]

export default function CollegeStationPage() {
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
    areaServed: { '@type': 'City', name: 'College Station', addressRegion: 'TX' },
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

      <Breadcrumb items={[{ label: 'Areas We Serve', href: '/areas-we-serve' }, { label: 'College Station, TX' }]} />

      <section className="bg-[var(--color-navy)] text-white py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <p className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-widest mb-2">
            Serving College Station &amp; Brazos County
          </p>
          <h1 className="font-display text-3xl lg:text-5xl font-bold text-balance leading-tight mb-4">
            Moving Services in College Station, TX
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Huntsville Moving Service has served the Brazos Valley since 1992. We are a family-owned, owner-operated company — your move stays with our crew from the first box to the last piece of furniture placed.
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
            College Station Moves Without the Runaround
          </h2>
          <p className="text-[var(--color-muted-foreground)] leading-relaxed mb-4">
            College Station is one of the most active moving markets in Texas — the academic calendar drives a massive wave of relocations every May and August. We have worked through dozens of those cycles and know how to plan and execute under pressure. Whether you are a student clearing out before graduation or a family upgrading to a larger home on the west side of town, we handle the details.
          </p>
          <p className="text-[var(--color-muted-foreground)] leading-relaxed">
            James Yaggi answers every call himself. He asks the right questions, gives you a real price, and stands behind it. No price changes on move day, no surprise fees at the end.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-18 bg-[var(--color-muted)]">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-[var(--color-navy)] mb-2">
            All Services Available in College Station, TX
          </h2>
          <p className="text-[var(--color-muted-foreground)] mb-10">
            Every service we offer is available in College Station. Call <a href="tel:+19362917230" className="text-[var(--color-accent)] font-semibold hover:underline">(936) 291-7230</a> to discuss your move.
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
            Serving College Station, TX
          </h2>
          <p className="text-[var(--color-muted-foreground)] mb-6">
            About 50 miles southwest of our Huntsville base. View our Google Business listing for reviews and contact information.
          </p>
          <div className="rounded-lg overflow-hidden border border-[var(--color-border)] shadow-sm aspect-video w-full">
            <iframe
              title="College Station, TX city center map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55052!2d-96.3344!3d30.6002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864683b09b2fdc83%3A0x6ccc9d3fcfc2b5d0!2sCollege%20Station%2C%20TX!5e0!3m2!1sen!2sus!4v1"
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
            Frequently Asked Questions — Moving in College Station, TX
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
          <h2 className="font-display text-2xl lg:text-3xl font-bold mb-3">Moving in College Station? Call James.</h2>
          <p className="text-white/70 mb-6 leading-relaxed">
            One call gets you a straight price from the owner. No automation, no call center — James walks you through the move personally.
          </p>
          <a href="tel:+19362917230" className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-bold px-8 py-4 rounded text-xl transition-colors inline-block">
            (936) 291-7230
          </a>
          <p className="mt-4 text-white/50 text-sm">Also serving Bryan, Navasota, Huntsville &amp; the Brazos Valley</p>
        </div>
      </section>
    </>
  )
}
