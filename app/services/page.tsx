import type { Metadata } from 'next'
import Link from 'next/link'
import { TrustStrip } from '@/components/trust-strip'
import { Breadcrumb } from '@/components/breadcrumb'

export const metadata: Metadata = {
  title: 'Moving Services | Huntsville Moving Inc. | (936) 291-7230',
  description:
    'Full list of moving services from Huntsville Moving Inc. — local movers, long-distance, residential, commercial, packing, piano & specialty, and labor-only. Call (936) 291-7230.',
  alternates: { canonical: 'https://www.huntsvillemovingservicetx.com/services' },
  openGraph: {
    title: 'Moving Services | Huntsville Moving Inc.',
    description: 'Local, long-distance, residential, commercial, packing, specialty, and labor-only moving services in Huntsville, TX. Licensed & insured since 1992.',
    url: 'https://www.huntsvillemovingservicetx.com/services',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Huntsville Moving Service — movers loading boxes into a van' }],
  },
}

const services = [
  {
    title: 'Local Movers',
    desc: 'Same-day and short-notice local moves across Huntsville and Walker County.',
    href: '/local-movers',
  },
  {
    title: 'Long-Distance Moving Across Texas',
    desc: 'Licensed Texas carrier for statewide relocations of any size.',
    href: '/long-distance-moving',
  },
  {
    title: 'Home & Apartment Moves',
    desc: 'Residential moves from studios to large family homes.',
    href: '/home-apartment-moves',
  },
  {
    title: 'Office & Commercial Moves',
    desc: 'Business relocations scheduled to minimize downtime.',
    href: '/office-commercial-moves',
  },
  {
    title: 'Packing & Unpacking',
    desc: 'Full-service or fragile-only packing with quality materials.',
    href: '/packing-unpacking',
  },
  {
    title: 'Piano, Antique & Specialty Moving',
    desc: 'White-glove care for pianos, antiques, fine art, and safes.',
    href: '/specialty-moving',
  },
  {
    title: 'Labor-Only Loading & Unloading',
    desc: 'Experienced crew for your rental truck or portable container.',
    href: '/labor-only',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Services' }]} />
      <section className="bg-[var(--color-navy)] text-white py-14 lg:py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 lg:px-6">
          <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            Huntsville Moving Services
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
            Everything from a quick apartment move to a statewide business relocation — call us for a free estimate.
          </p>
          <a
            href="tel:+19362917230"
            className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-bold px-8 py-4 rounded text-xl transition-colors inline-block"
          >
            Call (936) 291-7230
          </a>
        </div>
      </section>
      <TrustStrip />
      <div className="max-w-5xl mx-auto px-4 lg:px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="bg-white border border-[var(--color-border)] rounded-lg p-6 hover:shadow-md hover:border-[var(--color-navy-100)] transition-all group"
          >
            <h2 className="font-display font-bold text-xl text-[var(--color-navy)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
              {s.title} &rarr;
            </h2>
            <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed">{s.desc}</p>
          </Link>
        ))}
      </div>
      <div className="max-w-5xl mx-auto px-4 lg:px-6 pb-12 flex flex-col sm:flex-row gap-4 justify-center text-center">
        <Link href="/areas-we-serve" className="text-[var(--color-accent)] font-semibold text-sm hover:underline">
          See every city and county we serve &rarr;
        </Link>
        <span className="hidden sm:block text-[var(--color-border)]">|</span>
        <Link href="/about" className="text-[var(--color-accent)] font-semibold text-sm hover:underline">
          Learn about our family-owned business &rarr;
        </Link>
        <span className="hidden sm:block text-[var(--color-border)]">|</span>
        <Link href="/reviews" className="text-[var(--color-accent)] font-semibold text-sm hover:underline">
          Read customer reviews &rarr;
        </Link>
      </div>
    </>
  )
}
