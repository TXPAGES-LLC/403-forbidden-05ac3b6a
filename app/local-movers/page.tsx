import type { Metadata } from 'next'
import Link from 'next/link'
import { ServicePageShell } from '@/components/service-page-shell'

export const metadata: Metadata = {
  title: 'Local Movers in Huntsville, TX | Same-Day Moving | (936) 291-7230',
  description:
    'Looking for local movers in Huntsville, TX? Huntsville Moving Inc. offers same-day and short-notice local moves across Walker County. Licensed, insured & family-owned since 1992. Call (936) 291-7230.',
  alternates: { canonical: 'https://www.huntsvillemovingservicetx.com/local-movers' },
  openGraph: {
    title: 'Local Movers in Huntsville, TX | Same-Day Moving',
    description: 'Same-day and short-notice local moves across Walker County. Family-owned, hourly pricing, no hidden fees. Call James at (936) 291-7230.',
    url: 'https://www.huntsvillemovingservicetx.com/local-movers',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Huntsville Moving Service — movers loading boxes into a van' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Local Moving Services in Huntsville, TX',
  provider: { '@type': 'MovingCompany', name: 'Huntsville Moving Inc.', telephone: '+19362917230', url: 'https://www.huntsvillemovingservicetx.com' },
  areaServed: { '@type': 'City', name: 'Huntsville', sameAs: 'https://www.wikidata.org/wiki/Q977430' },
  description: 'Professional local moving services in Huntsville, TX and Walker County.',
  url: 'https://www.huntsvillemovingservicetx.com/local-movers',
}

export default function LocalMoversPage() {
  return (
    <ServicePageShell
      breadcrumb={[{ label: 'Local Movers' }]}
      headline="Local Movers in Huntsville, TX"
      subhead="Fast, affordable local moves across Huntsville and Walker County — by a crew that knows every street."
      jsonLd={jsonLd}
      body={
        <>
          <h2>Huntsville&apos;s Local Moving Experts Since 1992</h2>
          <p>
            When you need to move across town or across Walker County, Huntsville Moving Inc. is the crew people have trusted for over thirty years. We are not a franchise dispatching strangers — James Yaggi answers the phone, builds your quote, and often leads the crew on move day. You know exactly who you are dealing with from the first call.
          </p>
          <h2>How We Price Local Moves</h2>
          <p>
            Local moves are billed by the hour based on crew size and the number of trucks. A typical 2-bedroom apartment runs 3–4 hours with a two-person crew; a 4-bedroom home may take 6–8 hours with three movers.{' '}
            <a href="tel:+19362917230">(936) 291-7230</a> — James will give you an honest range in under five minutes.
          </p>
          <h2>Same-Day and Short-Notice Moves</h2>
          <p>
            Life does not always give you a month of lead time. We take last-minute moves when the schedule allows. Call first thing in the morning and we will tell you honestly whether we can fit you in.             See all the communities we cover on our{' '}
            <Link href="/areas-we-serve">cities and counties we serve across East-Central Texas</Link> page.
          </p>
        </>
      }
      included={[
        'Loading, transport, and unloading of all items',
        'Furniture disassembly and reassembly',
        'Moving blanket and pad protection on all furniture',
        'Floor and doorway protection',
        'Furniture placement at the destination',
        'Basic cargo liability coverage',
      ]}
      notIncluded={[
        'Packing boxes or wrapping breakables (available as add-on — ask)',
        'Specialty items: pianos, safes, pool tables (separate quote required)',
        'Moves outside Walker County without prior arrangement',
        'Hazardous materials or flammable items',
        'Storage (we can recommend local options)',
      ]}
      reviews={[
        {
          name: 'Sarah M.',
          location: 'Huntsville, TX',
          body: 'James and his crew moved our 3-bedroom house across town in one morning. They wrapped every piece of furniture without being asked, and nothing was damaged. Pricing was exactly what he quoted on the phone. Will use them again without question.',
        },
        {
          name: 'Derek T.',
          location: 'Walker County, TX',
          body: 'Called on a Tuesday for a Thursday move — they made it work. Two-man crew showed up on time, worked fast, and were careful with my grandmother\'s antique dresser. Solid local company, exactly what Huntsville needs.',
        },
      ]}
      faqs={[
        {
          q: 'How far in advance do I need to book a local move?',
          a: 'We recommend at least one week for weekday moves and two weeks for weekend moves during peak season (May–August). That said, we do take short-notice and same-day calls when the schedule allows — always worth a call to (936) 291-7230 even if your timeline is tight.',
        },
        {
          q: 'Do you charge extra for stairs or elevators?',
          a: 'We do not charge a separate stair fee on local hourly moves — stairs simply add to the total time. For apartments above the third floor without a freight elevator, we may add an additional mover to the crew; James will mention this when you call.',
        },
        {
          q: 'What is the minimum charge for a local move?',
          a: 'Our minimum is a two-mover crew for two hours. Most apartments and smaller homes fall within that window; larger homes bill beyond the minimum at the hourly rate.',
        },
        {
          q: 'Do you move on weekends?',
          a: 'Yes — we work Monday through Saturday, 8am to 6pm. Sunday moves are not available.',
        },
        {
          q: 'Is my stuff covered if something is damaged?',
          a: 'Yes. We carry basic cargo liability on every move. For high-value items we recommend declaring them before move day so we can take extra precautions. We are also happy to provide a certificate of insurance to your apartment complex or building manager.',
        },
      ]}
      relatedServices={[
        { label: 'Home & Apartment Moves', href: '/home-apartment-moves' },
        { label: 'Packing & Unpacking', href: '/packing-unpacking' },
      ]}
      relatedCities={[
        { label: 'Movers in Huntsville, TX', href: '/areas/huntsville' },
        { label: 'Movers in Conroe, TX', href: '/areas/conroe' },
      ]}
    />
  )
}
