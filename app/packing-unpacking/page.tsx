import type { Metadata } from 'next'
import Link from 'next/link'
import { ServicePageShell } from '@/components/service-page-shell'

export const metadata: Metadata = {
  title: 'Packing & Unpacking Services in Huntsville, TX | (936) 291-7230',
  description:
    'Professional packing and unpacking in Huntsville, TX. Full-service or fragile-only packing with quality materials. Huntsville Moving Inc. — family-owned since 1992. Call (936) 291-7230.',
  alternates: { canonical: 'https://www.huntsvillemovingservicetx.com/packing-unpacking' },
  openGraph: {
    title: 'Packing & Unpacking Services in Huntsville, TX',
    description: 'Full-service or fragile-only packing with quality materials. Nothing arrives broken, nothing gets left behind. Call (936) 291-7230.',
    url: 'https://www.huntsvillemovingservicetx.com/packing-unpacking',
    type: 'website',
    images: [{ url: '/chatgpt-image-jul-1-2026-11-04-10-am.png', width: 1344, height: 896, alt: 'Professional mover taping a cardboard box with packing tape' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Packing & Unpacking Services in Huntsville, TX',
  provider: { '@type': 'MovingCompany', name: 'Huntsville Moving Inc.', telephone: '+19362917230', url: 'https://www.huntsvillemovingservicetx.com' },
  areaServed: { '@type': 'City', name: 'Huntsville', sameAs: 'https://www.wikidata.org/wiki/Q977430' },
  description: 'Professional full-service and fragile-only packing and unpacking in Huntsville, TX. Quality materials, careful handling.',
  url: 'https://www.huntsvillemovingservicetx.com/packing-unpacking',
}

export default function PackingUnpackingPage() {
  return (
    <ServicePageShell
      breadcrumb={[{ label: 'Packing & Unpacking' }]}
      jsonLd={jsonLd}
      headline="Professional Packing & Unpacking in Huntsville, TX"
      subhead="Quality materials and an experienced crew — so nothing arrives broken and nothing gets left behind."
      heroImage={{
        src: '/chatgpt-image-jul-1-2026-11-04-10-am.png',
        alt: 'Huntsville Moving Service packer taping a cardboard box in a living room surrounded by moving boxes',
      }}
      body={
        <>
          <h2>Why Professional Packing Makes a Difference</h2>
          <p>
            Most move damage happens during packing, not during transport. An improperly boxed dish, a mirror wrapped in newsprint, a lamp in an oversized box — we have seen the results. Our crew uses the right material for every item type and packs boxes to the industry standard so nothing shifts in transit.
          </p>
          <h2>Packing Options</h2>
          <p>
            <strong>Full-service packing:</strong> We pack every room, every closet, every cabinet. You leave in the morning and come home to a fully packed, labeled home ready for move day.
          </p>
          <p>
            <strong>Fragile-only or partial packing:</strong> You pack the easy stuff; we handle the breakables — china, glassware, artwork, mirrors, lamps.
          </p>
          <p>
            <strong>Unpacking service:</strong> We unbox, unwrap, and place items in your new home. Boxes are broken down and removed. Ask about the combined move-plus-unpack rate when you call.
          </p>
          <h2>Packing Supplies Sold Separately</h2>
          <p>
            Prefer to pack yourself? Call <a href="tel:+19362917230">(936) 291-7230</a> to ask about our current supply inventory and pricing.
          </p>
        </>
      }
      included={[
        'All packing labor and time',
        'Standard moving boxes in multiple sizes',
        'Packing paper and bubble wrap for fragile items',
        'Dish and glass pack cell kits for kitchenware',
        'Mirror and picture boxes for wall art and mirrors',
        'Wardrobe boxes for hanging clothes',
        'Box labeling by room',
      ]}
      notIncluded={[
        'Moving the packed boxes (add the move service to your quote)',
        'Disassembly of furniture prior to packing',
        'Specialty crating for fine art or antiques (call to discuss)',
        'Unpacking unless specifically added to the quote',
        'Disposal of packing materials after delivery (we remove boxes if unpacking is included)',
      ]}
      reviews={[
        {
          name: 'Amanda K.',
          location: 'Huntsville, TX',
          body: 'The packing crew arrived, assessed what needed wrapping versus boxing, and finished our entire 3-bedroom house in one day. Not a single broken item. Worth every penny for the time and stress it saved us.',
        },
        {
          name: 'Phil S.',
          location: 'College Station, TX',
          body: 'We hired them for fragile-only packing — china, crystal, and artwork. They brought proper dish pack kits and mirror boxes, not just extra newspaper. Everything arrived intact including a large framed print I was worried about. Great crew.',
        },
      ]}
      faqs={[
        {
          q: 'How much does professional packing cost?',
          a: 'Packing is priced by the hour for labor plus the cost of materials. A typical 3-bedroom home takes a two-person team 4–6 hours to pack. Call (936) 291-7230 and James will give you a realistic estimate based on your home size and what needs wrapping.',
        },
        {
          q: 'Do you bring all the packing materials or do I need to supply boxes?',
          a: 'We bring everything — boxes in all sizes, packing paper, bubble wrap, dish pack kits, wardrobe boxes, tape, and markers. You do not need to supply anything.',
        },
        {
          q: 'Can I pack some rooms myself and have you pack the fragile things?',
          a: 'Yes. Partial or fragile-only packing is a common option. Just tell James which rooms you will handle and we will focus on the breakables.',
        },
        {
          q: 'Do you unpack at the destination?',
          a: 'Yes, unpacking is available as an add-on. We unbox, unwrap, and place items. Boxes are broken down and removed. Most clients add it on move day — ask James about the combined rate when you book.',
        },
        {
          q: 'How far in advance should I book packing?',
          a: 'Book packing at the same time as your move. If you need packing done the day before moving, that is common — just let us know when you call so we can schedule the packing crew day.',
        },
      ]}
      relatedServices={[
        { label: 'Home & Apartment Moves', href: '/home-apartment-moves' },
        { label: 'Piano, Antique & Specialty Moving', href: '/specialty-moving' },
      ]}
      relatedCities={[
        { label: 'Movers in Huntsville, TX', href: '/areas/huntsville' },
        { label: 'Movers in College Station, TX', href: '/areas/college-station' },
      ]}
    />
  )
}
