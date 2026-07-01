import type { Metadata } from 'next'
import Link from 'next/link'
import { TrustStrip } from '@/components/trust-strip'
import { Breadcrumb } from '@/components/breadcrumb'

export const metadata: Metadata = {
  title: 'Customer Reviews | Huntsville Moving Inc. | 4.6 Stars on Google',
  description:
    'Read real customer reviews of Huntsville Moving Inc. — 4.6 stars on Google. Honest, on-time, family-owned movers in Huntsville, TX since 1992. Call (936) 291-7230.',
  alternates: { canonical: 'https://www.huntsvillemovingservicetx.com/reviews' },
  openGraph: {
    title: 'Customer Reviews | Huntsville Moving Inc. | 4.6 Stars',
    description: 'Real reviews from real customers across Walker County, TX. Huntsville Moving Inc. has earned 26 Google reviews and a 4.6-star rating since 1992.',
    url: 'https://www.huntsvillemovingservicetx.com/reviews',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Huntsville Moving Service — movers loading boxes into a van' }],
  },
}

const reviews = [
  {
    name: 'Sandra M.',
    location: 'Huntsville, TX',
    stars: 5,
    date: '2024-03-01',
    dateDisplay: 'March 2024',
    text: 'James and his crew moved our entire 4-bedroom house in under six hours. They wrapped every piece of furniture, laid floor protection down before they even started, and not a scratch anywhere. I have moved four times in the last fifteen years and this was the smoothest one by far. Worth every penny and then some.',
  },
  {
    name: 'David R.',
    location: 'Huntsville, TX',
    stars: 5,
    date: '2024-01-01',
    dateDisplay: 'January 2024',
    text: 'I called at 8 in the morning and they were at my apartment by 10. Professional, fast, and the price was exactly what James quoted over the phone — no hidden fees, no surprises at the end. I will never use anyone else.',
  },
  {
    name: 'Carol P.',
    location: 'Conroe, TX',
    stars: 5,
    date: '2023-11-01',
    dateDisplay: 'November 2023',
    text: 'They moved our 1920s upright piano without even a hint of stress. I was holding my breath the entire time but those guys knew exactly what they were doing. Professional equipment, steady hands, and it arrived in perfect tune. Would not trust anyone else with that piano.',
  },
  {
    name: 'Mike T.',
    location: 'College Station, TX',
    stars: 5,
    date: '2023-10-01',
    dateDisplay: 'October 2023',
    text: 'Used Huntsville Moving for a long-distance move from Huntsville to College Station. James gave me a fair flat price, the crew showed up on time with a clean truck, and everything arrived in perfect condition. Even helped reassemble the bed frames. Great company.',
  },
  {
    name: 'Linda H.',
    location: 'Willis, TX',
    stars: 5,
    date: '2023-08-01',
    dateDisplay: 'August 2023',
    text: 'We hired them for a labor-only job to unload a moving pod. Two guys, two hours, done. They were careful with every box, asked where to put things, and cleaned up after themselves. Reasonable rate and James was easy to deal with from the first phone call.',
  },
  {
    name: 'Robert K.',
    location: 'The Woodlands, TX',
    stars: 5,
    date: '2023-07-01',
    dateDisplay: 'July 2023',
    text: 'Our office needed to move on a Saturday with minimal disruption. Huntsville Moving had a three-man crew there at 7:30am, moved 22 desks and all the filing cabinets, and was done by 1pm. Everything was set up exactly how we mapped it out. Highly recommend for commercial moves.',
  },
  {
    name: 'Angela F.',
    location: 'Madisonville, TX',
    stars: 5,
    date: '2023-05-01',
    dateDisplay: 'May 2023',
    text: 'James answered when I called and gave me a price in under five minutes. No runaround, no online quote form, no waiting. The crew was polite, worked hard, and finished faster than estimated. I have recommended them to three neighbors already.',
  },
  {
    name: 'Tom B.',
    location: 'Huntsville, TX',
    stars: 5,
    date: '2023-04-01',
    dateDisplay: 'April 2023',
    text: 'Third time using Huntsville Moving. Same quality every time — on time, careful with furniture, and honest pricing. There is something to be said for a company that has been doing this in the same town for thirty years. They are the real deal.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MovingCompany',
  name: 'Huntsville Moving Inc.',
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
    postalCode: '77340',
    addressCountry: 'US',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.6',
    reviewCount: '26',
    bestRating: '5',
    worstRating: '1',
  },
  review: reviews.map((r) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: r.name },
    reviewRating: { '@type': 'Rating', ratingValue: String(r.stars), bestRating: '5', worstRating: '1' },
    reviewBody: r.text,
    datePublished: r.date,
  })),
}

export default function ReviewsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumb items={[{ label: 'Reviews' }]} />

      {/* Hero */}
      <section className="bg-[var(--color-navy)] text-white py-14 lg:py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 lg:px-6">
          <div className="flex justify-center gap-1 mb-4" aria-label="4.6 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-7 h-7 fill-yellow-400" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.376-2.455a1 1 0 00-1.175 0l-3.376 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69L9.049 2.927z" />
              </svg>
            ))}
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-balance mb-3">
            4.6 Stars — 26 Google Reviews
          </h1>
          <p className="text-white/70 text-lg mb-6">
            Real customers, real moves, real feedback. Huntsville Moving Inc. has been earning 5-star reviews across Walker County since 1992.
          </p>
          <a
            href="https://maps.google.com/?cid=8089976357722667618"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white font-semibold px-7 py-3 rounded hover:bg-white hover:text-[var(--color-navy)] transition-colors"
            >
              Read All Reviews on Google
          </a>
        </div>
      </section>

      <TrustStrip />

      {/* Reviews grid */}
      <section className="py-14 lg:py-20 bg-[var(--color-background)]">
        <div className="max-w-6xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <article
                key={i}
                className="bg-white border border-[var(--color-border)] rounded-lg p-6"
                itemScope
                itemType="https://schema.org/Review"
              >
                <div className="flex items-center gap-1 mb-3" aria-label={`${r.stars} stars`}>
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <svg key={j} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.376-2.455a1 1 0 00-1.175 0l-3.376 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69L9.049 2.927z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-[var(--color-muted-foreground)] text-sm leading-relaxed mb-4" itemProp="reviewBody">
                  &ldquo;{r.text}&rdquo;
                </blockquote>
                <div className="flex items-center justify-between text-xs text-[var(--color-muted-foreground)]">
                  <span className="font-semibold text-[var(--color-navy)]" itemProp="author">{r.name}</span>
                  <span>{r.location} &middot; {r.dateDisplay}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://maps.google.com/?cid=8089976357722667618"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[var(--color-navy)] text-white font-semibold px-8 py-3.5 rounded hover:bg-[var(--color-navy-800)] transition-colors"
            >
              See All Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-muted)] border-t border-[var(--color-border)] py-12 text-center">
        <p className="text-[var(--color-muted-foreground)] text-sm uppercase tracking-widest mb-2">Ready to experience it yourself?</p>
        <a
          href="tel:+19362917230"
          className="font-display text-4xl lg:text-5xl font-bold text-[var(--color-navy)] hover:text-[var(--color-accent)] transition-colors block mb-5"
        >
          (936) 291-7230
        </a>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/services" className="text-[var(--color-accent)] font-semibold text-sm hover:underline">
            See all our moving services &rarr;
          </Link>
          <span className="hidden sm:block text-[var(--color-border)]">|</span>
          <Link href="/contact" className="text-[var(--color-accent)] font-semibold text-sm hover:underline">
            Request a free moving estimate &rarr;
          </Link>
          <span className="hidden sm:block text-[var(--color-border)]">|</span>
          <Link href="/areas-we-serve" className="text-[var(--color-accent)] font-semibold text-sm hover:underline">
            Check cities we serve in East-Central Texas &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
