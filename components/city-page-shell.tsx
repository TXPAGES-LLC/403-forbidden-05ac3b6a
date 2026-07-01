import { TrustStrip } from './trust-strip'
import { Breadcrumb } from './breadcrumb'
import Link from 'next/link'

interface CityPageShellProps {
  city: string
  state?: string
  county?: string
  distanceFromHuntsville?: string
  nearbyServices?: string[]
}

export function CityPageShell({
  city,
  state = 'TX',
  county,
  distanceFromHuntsville,
  nearbyServices = [],
}: CityPageShellProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Moving Company Serving ${city}, ${state}`,
    provider: {
      '@type': 'MovingCompany',
      name: 'Huntsville Moving Inc.',
      telephone: '+19362917230',
    },
    areaServed: { '@type': 'City', name: city, addressRegion: state },
    description: `Professional moving services in ${city}, ${state} from Huntsville Moving Inc.`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumb items={[{ label: 'Areas We Serve', href: '/areas-we-serve' }, { label: `${city}, ${state}` }]} />

      {/* Hero */}
      <section className="bg-[var(--color-navy)] text-white py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <p className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-widest mb-2">
            Movers in {city}, {state}
          </p>
          <h1 className="font-display text-3xl lg:text-5xl font-bold text-balance leading-tight mb-4">
            Moving Company Serving {city}, {state}
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Huntsville Moving Inc. serves {city}{county ? `, ${county} County` : ''} with the same licensed, insured, family-owned service we have provided since 1992.
            {distanceFromHuntsville ? ` Just ${distanceFromHuntsville} from our Huntsville base.` : ''}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+19362917230"
              className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-bold px-8 py-4 rounded text-lg transition-colors w-full sm:w-auto"
            >
              Call (936) 291-7230
            </a>

          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Body content */}
      <div className="max-w-4xl mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <article className="prose prose-lg max-w-none text-[var(--color-muted-foreground)] [&_h2]:font-display [&_h2]:text-[var(--color-navy)] [&_strong]:text-[var(--color-navy)]">
          <h2>Local Movers for {city}, {state}</h2>
          <p>
            Whether you are moving within {city} or relocating here from another Texas city, Huntsville Moving Inc. has the crew, the trucks, and the experience to handle it. James Yaggi has been running moves in this part of Texas since 2006 and the company has been at it since 1992.
          </p>

          <h2>Services Available in {city}</h2>
          <ul>
            <li><Link href="/local-movers" className="text-[var(--color-accent)] hover:underline">Local Moving</Link> — same-county and short-distance moves</li>
            <li><Link href="/long-distance-moving" className="text-[var(--color-accent)] hover:underline">Long-Distance Moving Across Texas</Link></li>
            <li><Link href="/home-apartment-moves" className="text-[var(--color-accent)] hover:underline">Home &amp; Apartment Moves</Link></li>
            <li><Link href="/office-commercial-moves" className="text-[var(--color-accent)] hover:underline">Office &amp; Commercial Moves</Link></li>
            <li><Link href="/packing-unpacking" className="text-[var(--color-accent)] hover:underline">Packing &amp; Unpacking</Link></li>
            <li><Link href="/specialty-moving" className="text-[var(--color-accent)] hover:underline">Piano, Antique &amp; Specialty Moving</Link></li>
            <li><Link href="/labor-only" className="text-[var(--color-accent)] hover:underline">Labor-Only Loading &amp; Unloading</Link></li>
          </ul>

          <h2>Get a Free Moving Estimate for {city}</h2>
          <p>
            Call <a href="tel:+19362917230" className="text-[var(--color-accent)] font-semibold hover:underline">(936) 291-7230</a> for a free, no-pressure estimate. James will ask a few questions about your move and give you a straight price.
          </p>

          {nearbyServices.length > 0 && (
            <>
              <h2>Also Serving Nearby</h2>
              <p>
                In addition to {city}, we regularly serve:{' '}
                {nearbyServices.map((s, i) => (
                  <span key={s}>
                    <Link href={`/areas/${s.toLowerCase().replace(/\s+/g, '-')}`} className="text-[var(--color-accent)] hover:underline">
                      {s}
                    </Link>
                    {i < nearbyServices.length - 1 ? ', ' : '.'}
                  </span>
                ))}
              </p>
            </>
          )}
        </article>
      </div>

      {/* Bottom CTA */}
      <section className="bg-[var(--color-muted)] border-t border-[var(--color-border)] py-12 text-center">
        <p className="font-display text-[var(--color-navy)] text-xl font-bold mb-2">
          Ready to move in {city}? Call James directly.
        </p>
        <a
          href="tel:+19362917230"
          className="font-display text-3xl lg:text-4xl font-bold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors block"
        >
          (936) 291-7230
        </a>

      </section>
    </>
  )
}
