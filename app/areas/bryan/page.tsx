import type { Metadata } from 'next'
import Link from 'next/link'
import { TrustStrip } from '@/components/trust-strip'
import { Breadcrumb } from '@/components/breadcrumb'

export const metadata: Metadata = {
  title: 'Moving Services in Bryan, TX | Huntsville Moving Service',
  description:
    'Local and long-distance movers serving Bryan, TX and Brazos County. Packing, specialty moves, labor-only, and office moves. Family-owned since 1992. Call (936) 291-7230.',
  alternates: { canonical: 'https://www.huntsvillemovingservicetx.com/areas/bryan' },
  openGraph: {
    title: 'Moving Services in Bryan, TX | Huntsville Moving Service',
    description:
      'Local and long-distance movers serving Bryan, TX and Brazos County. Packing, specialty moves, labor-only, and office moves. Family-owned since 1992.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Huntsville Moving Service — movers loading boxes into a van' }],
  },
}

const services = [
  {
    slug: '/local-movers',
    title: 'Local Moving in Bryan, TX',
    description:
      'We handle moves within Bryan and throughout Brazos County — from older neighborhoods near downtown to newer subdivisions off Boonville Road. Our crew works efficiently so your move wraps up on schedule.',
  },
  {
    slug: '/long-distance-moving',
    title: 'Long-Distance Moving in Bryan, TX',
    description:
      'Moving from Bryan to Houston, Austin, Dallas, or another Texas city? We manage the entire job in-house — no brokers, no subcontractors. One crew, one truck, one straight price.',
  },
  {
    slug: '/home-apartment-moves',
    title: 'Home & Apartment Moves in Bryan, TX',
    description:
      'From apartments near Blinn College to larger homes in Traditions or Southern Pointe, we bring the right truck and crew for the job. Furniture disassembly and reassembly come standard.',
  },
  {
    slug: '/office-commercial-moves',
    title: 'Office & Commercial Moves in Bryan, TX',
    description:
      'Relocating a Bryan office or commercial space? We coordinate around your business hours — evenings and weekends available — to keep downtime to a minimum. Equipment and filing handled carefully.',
  },
  {
    slug: '/packing-unpacking',
    title: 'Packing & Unpacking in Bryan, TX',
    description:
      'We pack room by room using double-walled boxes, packing paper, and furniture pads. Unpacking at the destination is available too, so your new Bryan or Brazos County home feels settled the same day.',
  },
  {
    slug: '/specialty-moving',
    title: 'Piano, Antique & Specialty Moving in Bryan, TX',
    description:
      'Heavy or fragile items — pianos, gun safes, antiques, grandfather clocks — need careful planning and the right equipment. We handle specialty pieces in Bryan the same way we do everywhere: methodically and without shortcuts.',
  },
  {
    slug: '/labor-only',
    title: 'Labor-Only Loading & Unloading in Bryan, TX',
    description:
      'Have your own rental truck or portable container? Our crew comes to you in Bryan, loads or unloads with care, and handles the heavy lifting so you do not have to.',
  },
]

const faqs = [
  {
    q: 'Do you serve all of Bryan, TX?',
    a: 'Yes — we serve all Bryan neighborhoods including Downtown Bryan, Boonville Road corridors, Traditions, Southern Pointe, and all of Brazos County.',
  },
  {
    q: 'How long does a local move within Bryan take?',
    a: 'A two-bedroom apartment in Bryan typically takes three to five hours with a two-person crew. Larger homes or those with more stairs and long carries take longer. James will give you a realistic time estimate when you call.',
  },
  {
    q: 'Do you move between Bryan and College Station?',
    a: 'Absolutely. Bryan and College Station are side by side and we handle cross-city moves between them regularly. Same rate, same crew, no added fees for the short distance.',
  },
  {
    q: 'Can you move a piano in Bryan?',
    a: 'Yes. We move upright and grand pianos throughout Bryan and Brazos County. We use piano boards, proper straps, and protective padding on every piano job.',
  },
  {
    q: 'Are you licensed and insured to move in Bryan?',
    a: 'Yes. Huntsville Moving Service is a licensed Texas carrier with full cargo liability insurance. We can provide a certificate of insurance before your move day.',
  },
]

export default function BryanPage() {
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
      name: 'Bryan',
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

      <Breadcrumb items={[{ label: 'Areas We Serve', href: '/areas-we-serve' }, { label: 'Bryan, TX' }]} />

      {/* ── HERO ── */}
      <section className="bg-[var(--color-navy)] text-white py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <p className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-widest mb-2">
            Serving Bryan &amp; Brazos County
          </p>
          <h1 className="font-display text-3xl lg:text-5xl font-bold text-balance leading-tight mb-4">
            Moving Services in Bryan, TX
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Huntsville Moving Service has been serving Brazos County since 1992. Whether you are moving across Bryan or relocating out of the area entirely, our family-owned crew handles every detail without brokering your job to a third party.
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

      {/* ── LOCAL INTRO ── */}
      <section className="py-14 lg:py-18 bg-[var(--color-background)]">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-[var(--color-navy)] mb-4">
            A Crew That Knows Brazos County
          </h2>
          <p className="text-[var(--color-muted-foreground)] leading-relaxed mb-4">
            Bryan sits about 50 miles from our home base in Huntsville, and we have been making the drive to serve Brazos County customers for decades. We know the area well — the older streets downtown, the newer growth on the east side, and the traffic patterns that matter on move day.
          </p>
          <p className="text-[var(--color-muted-foreground)] leading-relaxed">
            James Yaggi takes every call personally. You will get a real price and a real answer — not a quote from a form or a callback from a stranger. Our crew is our crew: trained, background-checked, and held to the same standard on every job.
          </p>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-14 lg:py-18 bg-[var(--color-muted)]">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-[var(--color-navy)] mb-2">
            All Services Available in Bryan, TX
          </h2>
          <p className="text-[var(--color-muted-foreground)] mb-10">
            We offer every type of moving service for Bryan and Brazos County. Call <a href="tel:+19362917230" className="text-[var(--color-accent)] font-semibold hover:underline">(936) 291-7230</a> to discuss which combination fits your move.
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

      {/* ── MAP ── */}
      <section className="py-14 lg:py-18 bg-[var(--color-background)]">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-[var(--color-navy)] mb-2">
            Find Us on Google Maps
          </h2>
          <p className="text-[var(--color-muted-foreground)] mb-6">
            Serving Bryan, TX from our Huntsville base. View our Google Business listing for hours, reviews, and directions.
          </p>
          <div className="rounded-lg overflow-hidden border border-[var(--color-border)] shadow-sm aspect-video w-full">
            <iframe
              title="Huntsville Moving Service — Bryan, TX service area on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55048!2d-96.3774!3d30.6744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8646848411808f9b%3A0x0!2sBryan%2C%20TX!5e0!3m2!1sen!2sus!4v1"
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
              View our Google Business listing &rarr;
            </a>
            {' '}· 4.6 stars · Licensed &amp; Insured
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-14 lg:py-18 bg-[var(--color-muted)]">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-[var(--color-navy)] mb-8">
            Frequently Asked Questions — Moving in Bryan, TX
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

      {/* ── BOTTOM CTA ── */}
      <section className="bg-[var(--color-navy)] text-white py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-2xl lg:text-3xl font-bold mb-3">
            Moving in Bryan? Call James.
          </h2>
          <p className="text-white/70 mb-6 leading-relaxed">
            Get a straight price from the owner — no middleman, no call center. James answers and gives you a real number before any work begins.
          </p>
          <a
            href="tel:+19362917230"
            className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-bold px-8 py-4 rounded text-xl transition-colors inline-block"
          >
            (936) 291-7230
          </a>
          <p className="mt-4 text-white/50 text-sm">
            Also serving College Station, Navasota, Huntsville &amp; the Brazos Valley
          </p>
        </div>
      </section>
    </>
  )
}
