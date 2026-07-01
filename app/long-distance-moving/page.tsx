import type { Metadata } from 'next'
import Link from 'next/link'
import { ServicePageShell } from '@/components/service-page-shell'

export const metadata: Metadata = {
  title: 'Long-Distance Moving Across Texas | Huntsville Moving Inc. | (936) 291-7230',
  description:
    'Moving across Texas? Huntsville Moving Inc. is a licensed Texas carrier for statewide long-distance moves. Serving Dallas, Houston, Austin, San Antonio & beyond. Call (936) 291-7230.',
  alternates: { canonical: 'https://www.huntsvillemovingservicetx.com/long-distance-moving' },
  openGraph: {
    title: 'Long-Distance Moving Across Texas | Huntsville Moving Inc.',
    description: 'Licensed Texas carrier for statewide moves. Flat-rate or weight-based quotes, no surprise fees at delivery. Call (936) 291-7230.',
    url: 'https://www.huntsvillemovingservicetx.com/long-distance-moving',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Huntsville Moving Service — movers loading boxes into a van' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Long-Distance Moving Across Texas',
  provider: { '@type': 'MovingCompany', name: 'Huntsville Moving Inc.', telephone: '+19362917230', url: 'https://www.huntsvillemovingservicetx.com' },
  areaServed: { '@type': 'State', name: 'Texas' },
  description: 'Licensed Texas carrier for long-distance statewide moving services.',
  url: 'https://www.huntsvillemovingservicetx.com/long-distance-moving',
}

export default function LongDistanceMovingPage() {
  return (
    <ServicePageShell
      breadcrumb={[{ label: 'Long-Distance Moving Across Texas' }]}
      headline="Long-Distance Moving Across Texas"
      subhead="A licensed Texas carrier — moving families and businesses from Huntsville to anywhere in the Lone Star State."
      jsonLd={jsonLd}
      body={
        <>
          <h2>Texas Long-Distance Movers Based in Huntsville</h2>
          <p>
            Huntsville Moving Inc. is a licensed Texas carrier authorized to transport household goods anywhere in Texas. Whether you are moving from Huntsville to Dallas, Houston to College Station, or anywhere in between, we handle the entire move under one roof — no brokering, no hand-offs to a third party.
          </p>
          <h2>Popular Texas Routes We Serve</h2>
          <ul>
            <li>Huntsville to Houston and the Houston metro area</li>
            <li>Huntsville to Dallas / Fort Worth</li>
            <li>Walker County to Austin or San Antonio</li>
            <li>College Station / Bryan to any Texas city</li>
            <li>Any Texas origin or destination — call and ask</li>
          </ul>
          <h2>Written Estimate, No Surprises</h2>
          <p>
            Long-distance moves are quoted by weight or cubic footage plus mileage. We provide a <strong>written estimate before any commitment</strong>. Call James at{' '}
            <a href="tel:+19362917230">(936) 291-7230</a> with your origin and destination.
          </p>
        </>
      }
      included={[
        'Written estimate and binding price before move day',
        'Dedicated truck — your load is not combined with another family\'s',
        'Full furniture pad-wrap and blanket protection during transit',
        'Loading at origin, unloading and placement at destination',
        'Full packing service available (quoted separately)',
        'Certificate of insurance provided on request',
      ]}
      notIncluded={[
        'Moves outside the state of Texas (we are a Texas carrier)',
        'Packing and unpacking unless added to the quote',
        'Specialty items (pianos, safes) without prior discussion',
        'Storage or warehouse holds mid-move',
        'Hazardous materials or prohibited items',
      ]}
      reviews={[
        {
          name: 'Maria G.',
          location: 'Huntsville to Austin, TX',
          body: 'James gave me a firm written quote, showed up exactly when he said, and every single item arrived in perfect condition — including my china cabinet I was terrified to move. No hidden fees at delivery. I cannot say enough good things.',
        },
        {
          name: 'Robert H.',
          location: 'College Station to Dallas, TX',
          body: 'Moved my entire 4-bedroom house to Dallas. The crew treated everything like their own furniture. James was reachable by phone the whole day. Final bill matched the estimate to the dollar. Rare in this industry.',
        },
      ]}
      faqs={[
        {
          q: 'How far in advance should I book a long-distance Texas move?',
          a: 'We recommend 3–4 weeks for long-distance moves, especially during peak summer months (May through August). That said, call us even if your timeline is shorter — we will tell you honestly whether we can accommodate you.',
        },
        {
          q: 'Is my quote binding or can the price change?',
          a: 'We provide a written not-to-exceed estimate for long-distance moves. The only time the price changes is if you add significantly more items than were listed on the walk-through — which we will discuss with you before loading, not at delivery.',
        },
        {
          q: 'Will my belongings be on the same truck the whole trip?',
          a: 'Yes. We never broker your move to another company or combine your load with another customer\'s. Your belongings are on a Huntsville Moving truck from pickup to delivery.',
        },
        {
          q: 'Do you move to cities outside Texas?',
          a: 'Our license covers intrastate Texas moves only. For interstate moves, call us and we can discuss options or refer you to a licensed interstate carrier.',
        },
        {
          q: 'Do you require a deposit?',
          a: 'We do not require a deposit to book. Payment is due at delivery. We accept cash and major credit cards.',
        },
      ]}
      relatedServices={[
        { label: 'Local Movers in Huntsville', href: '/local-movers' },
        { label: 'Packing & Unpacking', href: '/packing-unpacking' },
      ]}
      relatedCities={[
        { label: 'Movers in Huntsville, TX', href: '/areas/huntsville' },
        { label: 'Movers in College Station, TX', href: '/areas/college-station' },
      ]}
    />
  )
}
