import type { Metadata } from 'next'
import Link from 'next/link'
import { TrustStrip } from '@/components/trust-strip'
import { Breadcrumb } from '@/components/breadcrumb'

export const metadata: Metadata = {
  title: 'Areas We Serve | Huntsville Moving Inc. | Walker County & Beyond',
  description:
    'Huntsville Moving Inc. serves Huntsville, College Station, Bryan, Conroe, The Woodlands, Madisonville, Trinity, Willis, Livingston, Navasota, and all of East-Central Texas. Call (936) 291-7230.',
  alternates: { canonical: 'https://www.huntsvillemovingservicetx.com/areas-we-serve' },
  openGraph: {
    title: 'Areas We Serve | Huntsville Moving Inc.',
    description: 'Serving Huntsville, College Station, Bryan, Conroe, The Woodlands, and across East-Central Texas. Family-owned, licensed & insured since 1992.',
    url: 'https://www.huntsvillemovingservicetx.com/areas-we-serve',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Huntsville Moving Service — movers loading boxes into a van' }],
  },
}

const cities = [
  { name: 'Huntsville', href: '/areas/huntsville', county: 'Walker', note: 'Our home base' },
  { name: 'College Station', href: '/areas/college-station', county: 'Brazos', note: '~45 miles south' },
  { name: 'Bryan', href: '/areas/bryan', county: 'Brazos', note: '~50 miles south' },
  { name: 'Madisonville', href: '/areas/madisonville', county: 'Madison', note: '~35 miles north' },
  { name: 'Trinity', href: '/areas/trinity', county: 'Trinity', note: '~40 miles east' },
  { name: 'Conroe', href: '/areas/conroe', county: 'Montgomery', note: '~45 miles south' },
  { name: 'The Woodlands', href: '/areas/the-woodlands', county: 'Montgomery', note: '~55 miles south' },
  { name: 'Willis', href: '/areas/willis', county: 'Montgomery', note: '~35 miles south' },
  { name: 'Livingston', href: '/areas/livingston', county: 'Polk', note: '~40 miles east' },
  { name: 'Navasota', href: '/areas/navasota', county: 'Grimes', note: '~50 miles southwest' },
]

export default function AreasWeServePage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Areas We Serve' }]} />
      <section className="bg-[var(--color-navy)] text-white py-14 lg:py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 lg:px-6">
          <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            Areas We Serve
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-4">
            Based in Huntsville, TX — serving the Sam Houston corridor, Walker County, and communities across East-Central Texas.
          </p>
          <p className="text-white/60 text-sm max-w-lg mx-auto mb-8">
            We offer{' '}
            <Link href="/local-movers" className="text-yellow-300 hover:underline">local moves</Link>,{' '}
            <Link href="/long-distance-moving" className="text-yellow-300 hover:underline">long-distance moving across Texas</Link>,{' '}
            <Link href="/packing-unpacking" className="text-yellow-300 hover:underline">packing &amp; unpacking</Link>,{' '}
            and more — view all{' '}
            <Link href="/services" className="text-yellow-300 hover:underline font-semibold">Huntsville moving services</Link>.
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

      <div className="max-w-5xl mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cities.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="bg-white border border-[var(--color-border)] rounded-lg p-5 hover:shadow-md hover:border-[var(--color-navy-100)] transition-all group"
            >
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[var(--color-accent)] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h2 className="font-display font-bold text-[var(--color-navy)] group-hover:text-[var(--color-accent)] transition-colors">
                    {c.name}, TX
                  </h2>
                  <p className="text-[var(--color-muted-foreground)] text-xs mt-0.5">{c.county} County &middot; {c.note}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 bg-[var(--color-navy)] text-white rounded-lg px-6 py-6 text-center">
          <p className="font-semibold text-lg mb-2">
            Don&apos;t see your city?
          </p>
          <p className="text-white/70 mb-4">
            We move across Texas. Call us and we will tell you if we can reach you.
          </p>
          <a
            href="tel:+19362917230"
            className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-bold px-7 py-3 rounded transition-colors inline-block"
          >
            Call (936) 291-7230
          </a>
        </div>
      </div>
    </>
  )
}
