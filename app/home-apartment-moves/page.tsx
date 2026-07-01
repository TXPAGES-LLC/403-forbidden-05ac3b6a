import type { Metadata } from 'next'
import Link from 'next/link'
import { ServicePageShell } from '@/components/service-page-shell'

export const metadata: Metadata = {
  title: 'Home & Apartment Movers in Huntsville, TX | (936) 291-7230',
  description:
    'Professional residential movers for homes and apartments in Huntsville, TX. Studio to 5-bedroom, local or long-distance. Licensed, insured, family-owned since 1992. Call (936) 291-7230.',
  alternates: { canonical: 'https://www.huntsvillemovingservicetx.com/home-apartment-moves' },
  openGraph: {
    title: 'Home & Apartment Movers in Huntsville, TX',
    description: 'Studio to 5-bedroom residential moves, local or long-distance. Furniture protection, disassembly, and floor coverage included. Call (936) 291-7230.',
    url: 'https://www.huntsvillemovingservicetx.com/home-apartment-moves',
    type: 'website',
    images: [{ url: '/chatgpt-image-jul-1-2026-11-05-26-am.png', width: 1344, height: 896, alt: 'Fully loaded moving truck packed with appliances and furniture for a residential move' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Home & Apartment Moving in Huntsville, TX',
  provider: { '@type': 'MovingCompany', name: 'Huntsville Moving Inc.', telephone: '+19362917230', url: 'https://www.huntsvillemovingservicetx.com' },
  areaServed: { '@type': 'State', name: 'Texas' },
  description: 'Full-service residential moving for studio apartments to large family homes in Huntsville, TX and across Texas. Licensed and insured since 1992.',
  url: 'https://www.huntsvillemovingservicetx.com/home-apartment-moves',
}

export default function HomeApartmentMovesPage() {
  return (
    <ServicePageShell
      breadcrumb={[{ label: 'Home & Apartment Moves' }]}
      jsonLd={jsonLd}
      headline="Home & Apartment Movers in Huntsville, TX"
      subhead="Full-service residential moving for studio apartments to large family homes — handled with care since 1992."
      heroImage={{
        src: '/chatgpt-image-jul-1-2026-11-05-26-am.png',
        alt: 'Fully loaded Huntsville Moving Service truck packed with appliances, furniture, and cardboard boxes ready for a home move',
      }}
      body={
        <>
          <h2>Residential Moving Done Right</h2>
          <p>
            From a one-bedroom apartment off I-45 to a five-bedroom home in a Huntsville subdivision, we have been handling residential moves in Walker County since 1992. We know how to navigate tight apartment stairwells, protect hardwood floors, and get furniture through a narrow doorway without a scratch on the wall.
          </p>
          <h2>Move Sizes We Handle</h2>
          <ul>
            <li><strong>Studio and 1-bedroom apartments</strong> — fast and efficient, often half a day or less</li>
            <li><strong>2–3 bedroom homes</strong> — our most common move type, typically 4–6 hours</li>
            <li><strong>Large family homes (4+ bedrooms)</strong> — planned crew size and multi-truck when needed</li>
            <li><strong>Condos and townhomes</strong> — freight elevators, HOA move-in rules, stairwells — handled</li>
          </ul>
          <h2>Add Packing Service</h2>
          <p>
            Do not want to box everything yourself? We offer{' '}
            <Link href="/packing-unpacking">professional packing and unpacking</Link>{' '}
            with quality materials — full home or fragile-only, your choice. Call and ask about the combined rate.
          </p>
        </>
      }
      included={[
        'Loading, transport, and unloading of all household items',
        'Furniture disassembly and reassembly',
        'Moving blanket and pad protection on all furniture pieces',
        'Floor runner and doorway frame protection',
        'Furniture placement at the destination',
        'Basic cargo liability coverage',
      ]}
      notIncluded={[
        'Packing boxes or wrapping breakables (add-on service available)',
        'Piano, safe, or pool table moves (call for specialty quote)',
        'Appliance disconnection or reconnection (water lines, gas)',
        'Storage between move-out and move-in',
        'Moves outside Walker County without prior arrangement',
      ]}
      reviews={[
        {
          name: 'Jennifer L.',
          location: 'Huntsville, TX',
          body: 'They moved our 4-bedroom house in one day without a single scratch on the walls or furniture. The crew was polite and careful with everything, including my antique bedroom set. James quoted me fairly over the phone and the final bill matched. Highly recommend.',
        },
        {
          name: 'Carlos R.',
          location: 'Willis, TX',
          body: 'I used them for my apartment move into a building with a narrow staircase. They figured it out without drama and finished faster than I expected. Will absolutely call them again when I move next year.',
        },
      ]}
      faqs={[
        {
          q: 'How do you handle apartments with no elevator?',
          a: 'Stair carries are standard for us — there is no extra fee. For buildings above the third floor, James may recommend adding a third mover to keep things moving efficiently, which he will discuss when you call.',
        },
        {
          q: 'Can you move just a few rooms, not the whole house?',
          a: 'Yes. Partial moves are fine. The two-mover, two-hour minimum still applies, but there is no requirement to move everything. Tell James what you need and he will size the crew accordingly.',
        },
        {
          q: 'Do you move appliances like refrigerators and washers?',
          a: 'We move appliances. We do not disconnect or reconnect water lines, gas lines, or electrical beyond standard plugs — you will need a plumber or appliance tech for that portion. We can move the appliances into place once disconnected.',
        },
        {
          q: 'What if my move takes longer than estimated?',
          a: 'Local moves are billed by the hour, so you pay for actual time worked. If the job is running longer than expected, the crew lead will let you know before continuing so there are no surprises at the end.',
        },
        {
          q: 'How early should I book for a weekend move?',
          a: 'Weekends book out faster than weekdays. Two weeks in advance is a safe buffer. For summer weekends (May–August), three weeks is better. Call (936) 291-7230 to check availability.',
        },
      ]}
      relatedServices={[
        { label: 'Local Movers in Huntsville', href: '/local-movers' },
        { label: 'Packing & Unpacking', href: '/packing-unpacking' },
      ]}
      relatedCities={[
        { label: 'Movers in Huntsville, TX', href: '/areas/huntsville' },
        { label: 'Movers in Conroe, TX', href: '/areas/conroe' },
      ]}
    />
  )
}
