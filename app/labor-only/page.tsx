import type { Metadata } from 'next'
import Link from 'next/link'
import { ServicePageShell } from '@/components/service-page-shell'

export const metadata: Metadata = {
  title: 'Labor-Only Loading & Unloading in Huntsville, TX | (936) 291-7230',
  description:
    'Need movers to load or unload your rental truck or POD? Huntsville Moving Inc. provides labor-only moving crews in Huntsville, TX. Licensed & insured. Call (936) 291-7230.',
  alternates: { canonical: 'https://www.huntsvillemovingservicetx.com/labor-only' },
  openGraph: {
    title: 'Labor-Only Loading & Unloading in Huntsville, TX',
    description: 'Have your own truck or POD? We supply the crew. Licensed & insured, hourly rate, no equipment rental needed. Call (936) 291-7230.',
    url: 'https://www.huntsvillemovingservicetx.com/labor-only',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Huntsville Moving Service — movers loading boxes into a van' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Labor-Only Loading & Unloading in Huntsville, TX',
  provider: { '@type': 'MovingCompany', name: 'Huntsville Moving Inc.', telephone: '+19362917230', url: 'https://www.huntsvillemovingservicetx.com' },
  areaServed: { '@type': 'City', name: 'Huntsville', sameAs: 'https://www.wikidata.org/wiki/Q977430' },
  description: 'Labor-only moving crew for loading and unloading rental trucks, PODs, and containers in Huntsville, TX.',
  url: 'https://www.huntsvillemovingservicetx.com/labor-only',
}

export default function LaborOnlyPage() {
  return (
    <ServicePageShell
      breadcrumb={[{ label: 'Labor-Only Loading & Unloading' }]}
      jsonLd={jsonLd}
      headline="Labor-Only Loading & Unloading in Huntsville, TX"
      subhead="You rented the truck or container — we bring the crew. Experienced movers by the hour, no truck charge."
      body={
        <>
          <h2>What Is Labor-Only Moving?</h2>
          <p>
            Sometimes you have already rented a U-Haul, Penske, or PODS container and just need strong, experienced hands. Huntsville Moving Inc. can send a crew to load your truck, unload it at the destination, or both. We do not charge for a truck you do not need.
          </p>
          <h2>When Labor-Only Makes Sense</h2>
          <ul>
            <li>You rented a moving truck and need help loading or unloading</li>
            <li>You have a PODS, U-Box, or similar portable container</li>
            <li>You are moving out of a storage unit and need loading help</li>
            <li>You need a crew to move heavy furniture within the same home</li>
          </ul>
          <h2>How Pricing Works</h2>
          <p>
            Labor-only jobs are billed by the hour per crew member. A two-man crew can load a 26-foot truck with a 3-bedroom home in 3–4 hours. Call James at{' '}
            <a href="tel:+19362917230">(936) 291-7230</a> with the room count and we will give you a realistic time and price range.
          </p>
        </>
      }
      included={[
        'Loading your rented truck, container, or trailer',
        'Unloading at the destination (labor only)',
        'Furniture pad protection (you supply pads, or we bring them for a small fee)',
        'Furniture placement inside the destination as directed',
        'Basic cargo liability on items handled',
      ]}
      notIncluded={[
        'Truck, trailer, or container rental — that\'s yours to arrange',
        'Packing boxes or wrapping breakables (available as add-on)',
        'Driving the truck to the destination (labor-only means we load/unload only)',
        'Moves that require a Huntsville Moving truck',
        'Items outside Walker County without prior arrangement',
      ]}
      reviews={[
        {
          name: 'Kevin D.',
          location: 'Huntsville, TX',
          body: 'I rented a 26-foot U-Haul and hired their two-man crew to load it. They packed that truck better than I could have in three days by myself — not a single wasted inch. Took them under 3 hours for a full 3-bedroom. Worth every dollar.',
        },
        {
          name: 'Rachel S.',
          location: 'Walker County, TX',
          body: 'Used them to unload my PODS after it was delivered to my new address. Two guys, two hours, everything in the right rooms. Exactly what I needed. I will use them again for the next move.',
        },
      ]}
      faqs={[
        {
          q: 'Do you drive the rental truck, or just load and unload it?',
          a: 'Labor-only means we load and/or unload the truck — we do not drive your rented vehicle. If you need us to drive and move you, book our full local moving service instead.',
        },
        {
          q: 'Do I need to supply moving blankets?',
          a: 'If you rented a truck, the rental company often includes blankets. If you do not have them, we can bring furniture pads for a small additional fee — just mention it when you call.',
        },
        {
          q: 'Can you load and then follow me to the destination to unload?',
          a: 'Yes. We can load your truck at the origin and unload at the destination on the same day. Just give us both addresses when you call so we can estimate the total time.',
        },
        {
          q: 'What is the minimum charge for a labor-only job?',
          a: 'The same as our full-service minimum: two movers for two hours. Most rental truck loading or unloading jobs fall within that window.',
        },
        {
          q: 'Can you move heavy furniture within the same house — no truck needed?',
          a: 'Yes. Within-home furniture moves are a common labor-only request. We use furniture dollies and sliders to reposition pieces without damaging floors.',
        },
      ]}
      relatedServices={[
        { label: 'Local Movers in Huntsville', href: '/local-movers' },
        { label: 'Home & Apartment Moves', href: '/home-apartment-moves' },
      ]}
      relatedCities={[
        { label: 'Movers in Huntsville, TX', href: '/areas/huntsville' },
        { label: 'Movers in Conroe, TX', href: '/areas/conroe' },
      ]}
    />
  )
}
