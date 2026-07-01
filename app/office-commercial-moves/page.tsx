import type { Metadata } from 'next'
import Link from 'next/link'
import { ServicePageShell } from '@/components/service-page-shell'

export const metadata: Metadata = {
  title: 'Office & Commercial Movers in Huntsville, TX | (936) 291-7230',
  description:
    'Huntsville Moving Inc. handles office and commercial relocations across Walker County and Texas. Scheduled to minimize downtime. Licensed, insured. Call (936) 291-7230.',
  alternates: { canonical: 'https://www.huntsvillemovingservicetx.com/office-commercial-moves' },
  openGraph: {
    title: 'Office & Commercial Movers in Huntsville, TX',
    description: 'Commercial and office relocations scheduled to minimize your downtime. Licensed, insured, family-owned. Call James at (936) 291-7230.',
    url: 'https://www.huntsvillemovingservicetx.com/office-commercial-moves',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Huntsville Moving Service — movers loading boxes into a van' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Office & Commercial Moving in Huntsville, TX',
  provider: { '@type': 'MovingCompany', name: 'Huntsville Moving Inc.', telephone: '+19362917230', url: 'https://www.huntsvillemovingservicetx.com' },
  areaServed: { '@type': 'State', name: 'Texas' },
  description: 'Office and commercial moving services in Huntsville, TX and across Walker County. Scheduled around your business hours to minimize downtime.',
  url: 'https://www.huntsvillemovingservicetx.com/office-commercial-moves',
}

export default function OfficeCommercialMovesPage() {
  return (
    <ServicePageShell
      breadcrumb={[{ label: 'Office & Commercial Moves' }]}
      jsonLd={jsonLd}
      headline="Office & Commercial Movers in Huntsville, TX"
      subhead="Business relocations scheduled around your hours — minimizing downtime and disruption for Walker County businesses."
      body={
        <>
          <h2>Commercial Moving That Works Around Your Business</h2>
          <p>
            Every hour your office is shut down costs money. We schedule commercial moves during evenings, early mornings, or weekends so your operations stay running. We have moved law offices, medical practices, retail locations, and warehouses across Walker County and surrounding counties.
          </p>
          <h2>What We Move for Business Clients</h2>
          <ul>
            <li>Desks, cubicles, filing cabinets, conference tables, and workstations</li>
            <li>Computers, monitors, servers, and printers (packed and protected)</li>
            <li>Medical and dental office equipment</li>
            <li>Retail fixtures and display cases</li>
            <li>Warehouse pallets and inventory (call to discuss scope)</li>
          </ul>
          <h2>Written Not-to-Exceed Estimate</h2>
          <p>
            We start with a site walk-through — in person for Huntsville-area moves, by phone for out-of-area jobs. From that we give you a <strong>written not-to-exceed price</strong> on most commercial jobs. Call             <a href="tel:+19362917230">(936) 291-7230</a> to get the process started.
          </p>
        </>
      }
      included={[
        'Site walk-through and written not-to-exceed estimate',
        'Furniture and equipment disassembly and reassembly',
        'Pad and blanket protection on all items',
        'Floor runner and door frame protection',
        'Evenings, early mornings, or weekends available to reduce downtime',
        'Certificate of insurance provided to property manager on request',
      ]}
      notIncluded={[
        'IT wiring, server rack disconnection, or cable management',
        'Appliance line disconnection (gas, water, dedicated circuits)',
        'Packing electronics or sensitive equipment (available as add-on)',
        'Moves requiring a loading dock or freight elevator without prior coordination',
        'Hazardous materials, chemicals, or regulated medical waste',
      ]}
      reviews={[
        {
          name: 'Patricia W.',
          location: 'Huntsville, TX (law office relocation)',
          body: 'James moved our entire law office over a weekend so we were back in business Monday morning. His crew was professional, careful with our file cabinets and equipment, and finished under the quoted price. We will use them for every office move going forward.',
        },
        {
          name: 'Tom B.',
          location: 'Conroe, TX (retail relocation)',
          body: 'We relocated our retail store on a Sunday and were open Tuesday. The crew knew what they were doing — they had moved retail fixtures before. Nothing damaged, no drama. Exactly what a business needs.',
        },
      ]}
      faqs={[
        {
          q: 'Can you move us on a weekend or after hours?',
          a: 'Yes. We work Monday through Saturday, 8am to 6pm. After-hours and early-morning starts can sometimes be arranged for commercial clients — call James at (936) 291-7230 to discuss your specific timing needs.',
        },
        {
          q: 'Do you disconnect and reconnect office equipment?',
          a: 'We move equipment but do not perform IT work, cabling, or any electrical or plumbing disconnection. We recommend having your IT team handle computer disconnection and reconnection; we handle the physical moving.',
        },
        {
          q: 'How is a commercial move priced?',
          a: 'Most commercial moves are priced hourly for local jobs or by a flat written estimate for larger relocations. We always provide a written not-to-exceed quote before the job begins so there are no surprises.',
        },
        {
          q: 'Can you provide a certificate of insurance for our building?',
          a: 'Yes. We carry commercial cargo liability insurance and can provide a certificate naming your property manager or landlord as certificate holder before move day.',
        },
        {
          q: 'Do you move medical or dental offices?',
          a: 'Yes, we have experience with medical and dental office relocations. Call early to discuss the specific equipment involved — some heavy or sensitive items require additional crew or equipment.',
        },
      ]}
      relatedServices={[
        { label: 'Long-Distance Moving Across Texas', href: '/long-distance-moving' },
        { label: 'Labor-Only Loading & Unloading', href: '/labor-only' },
      ]}
      relatedCities={[
        { label: 'Movers in Huntsville, TX', href: '/areas/huntsville' },
        { label: 'Movers in Conroe, TX', href: '/areas/conroe' },
      ]}
    />
  )
}
