import type { Metadata } from 'next'
import Link from 'next/link'
import { TrustStrip } from '@/components/trust-strip'
import { Breadcrumb } from '@/components/breadcrumb'

export const metadata: Metadata = {
  title: 'Moving Services in Huntsville, TX | Huntsville Moving Service',
  description:
    'Full-service movers based in Huntsville, TX. Local moves, long-distance, packing, specialty items, labor-only, and office moves. Family-owned since 1992. Call (936) 291-7230.',
  alternates: { canonical: 'https://www.huntsvillemovingservicetx.com/areas/huntsville' },
  openGraph: {
    title: 'Moving Services in Huntsville, TX | Huntsville Moving Service',
    description:
      'Full-service movers based in Huntsville, TX. Local moves, long-distance, packing, specialty items, labor-only, and office moves. Family-owned since 1992.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Huntsville Moving Service — movers loading boxes into a van' }],
  },
}

const services = [
  {
    slug: '/local-movers',
    title: 'Local Moving in Huntsville, TX',
    description:
      'We handle moves within Huntsville and throughout Walker County — apartment to apartment, house to house, or storage unit runs. Our crew knows the neighborhoods and works efficiently so your day stays on schedule.',
  },
  {
    slug: '/long-distance-moving',
    title: 'Long-Distance Moving in Huntsville, TX',
    description:
      'Relocating out of Huntsville to Dallas, Houston, Austin, or anywhere else in Texas? We load, transport, and unload under one roof — no brokers, no third-party hand-offs, no surprises.',
  },
  {
    slug: '/home-apartment-moves',
    title: 'Home & Apartment Moves in Huntsville, TX',
    description:
      'From studio apartments near Sam Houston State University to large family homes in the Elkins Lake area, we bring the right-size truck and crew for your home. Furniture disassembly and reassembly included.',
  },
  {
    slug: '/office-commercial-moves',
    title: 'Office & Commercial Moves in Huntsville, TX',
    description:
      'Relocating a downtown Huntsville office or commercial space? We work around your schedule — evenings and weekends available — to minimize downtime. Desks, filing cabinets, and equipment handled with care.',
  },
  {
    slug: '/packing-unpacking',
    title: 'Packing & Unpacking in Huntsville, TX',
    description:
      'Our team packs room by room with quality materials — double-walled boxes, packing paper, furniture pads, and stretch wrap. We unpack at the destination too, so you can settle in the same day.',
  },
  {
    slug: '/specialty-moving',
    title: 'Piano, Antique & Specialty Moving in Huntsville, TX',
    description:
      'Pianos, grandfather clocks, gun safes, antiques, and oversized items require a different approach. We use the right equipment and techniques to move high-value or heavy specialty pieces without damage.',
  },
  {
    slug: '/labor-only',
    title: 'Labor-Only Loading & Unloading in Huntsville, TX',
    description:
      'Renting your own truck or using a portable container? Hire our crew to do the heavy lifting. We load and unload efficiently and handle your belongings the same way we would on a full-service move.',
  },
]

const faqs = [
  {
    q: 'Do you serve all of Huntsville, TX?',
    a: 'Yes — we are based in Huntsville and serve the entire city including Elkins Lake, Woodland Hills, the Sam Houston State University area, and all surrounding Walker County neighborhoods.',
  },
  {
    q: 'How far in advance should I call to book a move in Huntsville?',
    a: 'For local Huntsville moves, 1–2 weeks is usually enough. For moves during summer or end-of-month — the two busiest periods — calling 3–4 weeks out gives you the best date selection.',
  },
  {
    q: 'Do you charge extra for stairs or long carries in Huntsville?',
    a: 'We are upfront about all charges before the job starts. Stairs, elevator waits, or long-carry situations are discussed when you call so there are no surprises on move day.',
  },
  {
    q: 'Can you move my piano within Huntsville?',
    a: 'Yes. We move upright and grand pianos regularly in Huntsville and Walker County. We use piano boards, straps, and proper dollies — not improvised rigging.',
  },
  {
    q: 'Are you licensed and insured for moves in Huntsville?',
    a: 'Yes. Huntsville Moving Service is fully licensed and insured. We carry cargo liability coverage and can provide a certificate of insurance before your move day — just ask.',
  },
]

export default function HuntsvillePage() {
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
      name: 'Huntsville',
      addressRegion: 'TX',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.6',
      reviewCount: '26',
      bestRating: '5',
    },
    description:
      'Full-service movers based in Huntsville, TX. Local moves, long-distance, packing, specialty items, labor-only, and office moves. Family-owned since 1992.',
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

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.huntsvillemovingservicetx.com' },
      { '@type': 'ListItem', position: 2, name: 'Areas We Serve', item: 'https://www.huntsvillemovingservicetx.com/areas-we-serve' },
      { '@type': 'ListItem', position: 3, name: 'Huntsville, TX', item: 'https://www.huntsvillemovingservicetx.com/areas/huntsville' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <Breadcrumb items={[{ label: 'Areas We Serve', href: '/areas-we-serve' }, { label: 'Huntsville, TX' }]} />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-navy)] text-white py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <p className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-widest mb-2">
            Based in Huntsville · Serving Walker County &amp; Beyond
          </p>
          <h1 className="font-display text-3xl lg:text-5xl font-bold text-balance leading-tight mb-4">
            Moving Services in Huntsville, TX
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Huntsville Moving Service is your local, family-owned moving company — based right here in Huntsville since 1992. We handle every type of move in town, from a single-bedroom apartment near SHSU to a full estate in Elkins Lake.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+19362917230"
              className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-bold px-8 py-4 rounded text-lg transition-colors inline-block"
            >
              Call (936) 291-7230
            </a>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded text-lg transition-colors inline-block border border-white/30"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* ── LOCAL INTRO ───────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-18 bg-[var(--color-background)]">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-[var(--color-navy)] mb-4">
            Your Neighbor — Not a Franchise
          </h2>
          <p className="text-[var(--color-muted-foreground)] leading-relaxed mb-4">
            James Yaggi has been running moves in Huntsville since 2006. His mother Yvonne founded the company in 1992. When you call, you get James — not a dispatcher, not an answering service. He knows Huntsville streets, he knows which neighborhoods have tricky driveways, and he gives you a straight price before any work begins.
          </p>
          <p className="text-[var(--color-muted-foreground)] leading-relaxed">
            We are a licensed, insured Texas carrier. We do not broker your move to another company. The crew that shows up is our crew — and they do not leave until you are satisfied.
          </p>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-18 bg-[var(--color-muted)]">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-[var(--color-navy)] mb-2">
            All Services Available in Huntsville, TX
          </h2>
          <p className="text-[var(--color-muted-foreground)] mb-10">
            We offer every type of moving service from our Huntsville base. Call <a href="tel:+19362917230" className="text-[var(--color-accent)] font-semibold hover:underline">(936) 291-7230</a> to discuss which combination fits your move.
          </p>

          <div className="space-y-6">
            {services.map((svc) => (
              <article key={svc.slug} className="bg-white rounded-lg p-6 border border-[var(--color-border)] shadow-sm">
                <h3 className="font-display text-lg font-bold text-[var(--color-navy)] mb-2">
                  {svc.title}
                </h3>
                <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed mb-3">
                  {svc.description}
                </p>
                <Link
                  href={svc.slug}
                  className="text-[var(--color-accent)] font-semibold text-sm hover:underline"
                >
                  View {svc.title} &rarr;
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAP ───────────────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-18 bg-[var(--color-background)]">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-[var(--color-navy)] mb-2">
            Find Us in Huntsville, TX
          </h2>
          <p className="text-[var(--color-muted-foreground)] mb-6">
            Based in Walker County and serving Huntsville and the surrounding region. View our Google Business listing for hours, reviews, and directions.
          </p>
          <div className="rounded-lg overflow-hidden border border-[var(--color-border)] shadow-sm aspect-video w-full">
            <iframe
              title="Huntsville Moving Service location in Huntsville, TX on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.2!2d-95.5508!3d30.7235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x70410f2b571059e2!2sHuntsville%20Moving%20Service!5e0!3m2!1sen!2sus!4v1!5m2!1sen!2sus&cid=8089976357722667618"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-4 text-sm text-[var(--color-muted-foreground)]">
            <a
              href="https://maps.google.com/?cid=8089976357722667618"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] font-semibold hover:underline"
            >
              View on Google Maps &rarr;
            </a>
            {' '}· 4.6 stars · Licensed &amp; Insured
          </p>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-18 bg-[var(--color-muted)]">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-[var(--color-navy)] mb-8">
            Frequently Asked Questions — Moving in Huntsville, TX
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

      {/* ── BOTTOM CTA ────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-navy)] text-white py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-2xl lg:text-3xl font-bold mb-3">
            Moving in Huntsville? Call James.
          </h2>
          <p className="text-white/70 mb-6 leading-relaxed">
            Get a straight, honest price from the owner. No call center, no middleman — just James on the phone, ready to talk through your move.
          </p>
          <a
            href="tel:+19362917230"
            className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-bold px-8 py-4 rounded text-xl transition-colors inline-block"
          >
            (936) 291-7230
          </a>
          <p className="mt-4 text-white/50 text-sm">
            Also serving Willis, Madisonville, Trinity, Conroe &amp; the Sam Houston corridor
          </p>
        </div>
      </section>
    </>
  )
}
