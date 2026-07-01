import type { Metadata } from 'next'
import Link from 'next/link'
import { TrustStrip } from '@/components/trust-strip'
import { Breadcrumb } from '@/components/breadcrumb'

export const metadata: Metadata = {
  title: 'Moving Services in Trinity, TX | Huntsville Moving Service',
  description:
    'Local and long-distance movers serving Trinity, TX and Trinity County. Home, office, packing, specialty, and labor-only moves. Family-owned since 1992. Call (936) 291-7230.',
  openGraph: {
    title: 'Moving Services in Trinity, TX | Huntsville Moving Service',
    description:
      'Local and long-distance movers serving Trinity, TX and Trinity County. Home, office, packing, specialty, and labor-only moves. Family-owned since 1992.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Huntsville Moving Service — movers loading boxes into a van' }],
  },
  alternates: { canonical: 'https://www.huntsvillemovingservicetx.com/areas/trinity' },
}

const services = [
  {
    slug: '/local-movers',
    title: 'Local Moving in Trinity, TX',
    description:
      'We handle local moves within Trinity and throughout Trinity County — in-town homes, rural properties, and lakefront cabins around Lake Livingston. Our crew plans each job around the specific access and distance involved.',
  },
  {
    slug: '/long-distance-moving',
    title: 'Long-Distance Moving in Trinity, TX',
    description:
      'Moving from Trinity to Houston, Dallas, or another Texas city? We load, transport, and deliver with our own crew and trucks — no third-party hand-offs at any point in your move.',
  },
  {
    slug: '/home-apartment-moves',
    title: 'Home & Apartment Moves in Trinity, TX',
    description:
      'From in-town homes near the Trinity town square to rural properties spread across the county, we bring the right crew and equipment every time. Furniture disassembly and reassembly included.',
  },
  {
    slug: '/office-commercial-moves',
    title: 'Office & Commercial Moves in Trinity, TX',
    description:
      'Small businesses in Trinity County get the same professional service as our larger commercial clients. We schedule around your hours and handle office furniture, equipment, and records carefully.',
  },
  {
    slug: '/packing-unpacking',
    title: 'Packing & Unpacking in Trinity, TX',
    description:
      'We pack your Trinity home using reinforced boxes, packing paper, furniture pads, and stretch wrap. Full unpacking at the destination is available so you can get settled without spending days opening boxes.',
  },
  {
    slug: '/specialty-moving',
    title: 'Piano, Antique & Specialty Moving in Trinity, TX',
    description:
      'Lake-area properties and rural homes around Trinity County often contain specialty items — pianos, gun safes, antique furniture — that need the right equipment and a careful approach. We plan these jobs thoroughly before move day.',
  },
  {
    slug: '/labor-only',
    title: 'Labor-Only Loading & Unloading in Trinity, TX',
    description:
      'Renting a truck or using a portable container in Trinity? Hire our crew for the loading and unloading. Professional handling, efficient work — you supply the truck and we take care of the rest.',
  },
]

const faqs = [
  {
    q: 'Do you serve Trinity, TX and Trinity County?',
    a: 'Yes. We serve Trinity and the surrounding Trinity County area, including rural routes, lakeshore properties near Lake Livingston, and communities throughout the county.',
  },
  {
    q: 'How far is Trinity from Huntsville?',
    a: 'Trinity is about 40 miles east of Huntsville — roughly a 45-minute drive. Travel is built into the price James quotes you, so there are no added charges on move day.',
  },
  {
    q: 'Can you move a lakeside cabin or rural property near Trinity?',
    a: 'Yes. We handle lakeshore and rural property moves regularly — long carries, limited road access, and unusual building layouts are all things we plan for before arriving.',
  },
  {
    q: 'Do you move between Trinity and Livingston or Huntsville?',
    a: 'Yes. Trinity, Livingston, and Huntsville are all close together in east-central Texas and we handle moves among all three cities regularly.',
  },
  {
    q: 'Are you licensed and insured for Trinity County moves?',
    a: 'Yes. Huntsville Moving Service is a licensed Texas carrier with full cargo liability coverage. We can provide documentation before your move date.',
  },
]

export default function TrinityPage() {
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
    areaServed: { '@type': 'City', name: 'Trinity', addressRegion: 'TX' },
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

      <Breadcrumb items={[{ label: 'Areas We Serve', href: '/areas-we-serve' }, { label: 'Trinity, TX' }]} />

      <section className="bg-[var(--color-navy)] text-white py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <p className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-widest mb-2">
            Serving Trinity &amp; Trinity County
          </p>
          <h1 className="font-display text-3xl lg:text-5xl font-bold text-balance leading-tight mb-4">
            Moving Services in Trinity, TX
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Huntsville Moving Service serves Trinity and Trinity County with the same owner-operated, family-owned professionalism we have applied since 1992. Whether you are in town or out on a rural property, our crew comes to you and handles the job from start to finish.
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
            East Texas Moves Done Right
          </h2>
          <p className="text-[var(--color-muted-foreground)] leading-relaxed mb-4">
            Trinity County sits at the edge of the Sam Houston National Forest and Lake Livingston — a region of rural homes, lake properties, and small towns where moving logistics require more planning than a standard urban job. Long carries, private roads, and buildings set back from the street are the norm, not the exception.
          </p>
          <p className="text-[var(--color-muted-foreground)] leading-relaxed">
            James asks the right questions upfront so the crew is prepared when they arrive. Your price accounts for your actual property — not a generic estimate built for a city apartment.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-18 bg-[var(--color-muted)]">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-[var(--color-navy)] mb-2">
            All Services Available in Trinity, TX
          </h2>
          <p className="text-[var(--color-muted-foreground)] mb-10">
            Every service we offer is available in Trinity and Trinity County. Call <a href="tel:+19362917230" className="text-[var(--color-accent)] font-semibold hover:underline">(936) 291-7230</a> to discuss your move.
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
            Serving Trinity, TX
          </h2>
          <p className="text-[var(--color-muted-foreground)] mb-6">
            About 40 miles east of our Huntsville base. View our Google listing for reviews and contact information.
          </p>
          <div className="rounded-lg overflow-hidden border border-[var(--color-border)] shadow-sm aspect-video w-full">
            <iframe
              title="Trinity, TX city center map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55052!2d-95.3741!3d30.9460!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864678abc123def0%3A0x1234567890abcdef!2sTrinity%2C%20TX!5e0!3m2!1sen!2sus!4v1"
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
            Frequently Asked Questions — Moving in Trinity, TX
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
          <h2 className="font-display text-2xl lg:text-3xl font-bold mb-3">Moving in Trinity? Call James.</h2>
          <p className="text-white/70 mb-6 leading-relaxed">
            A straight price, a prepared crew, and a job done right. James answers the phone and handles the details personally.
          </p>
          <a href="tel:+19362917230" className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-bold px-8 py-4 rounded text-xl transition-colors inline-block">
            (936) 291-7230
          </a>
          <p className="mt-4 text-white/50 text-sm">Also serving Huntsville, Livingston, Madisonville &amp; Trinity County</p>
        </div>
      </section>
    </>
  )
}
