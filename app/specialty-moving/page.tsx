import type { Metadata } from 'next'
import { ServicePageShell } from '@/components/service-page-shell'

export const metadata: Metadata = {
  title: 'Piano, Antique & Specialty Item Movers in Huntsville, TX | (936) 291-7230',
  description:
    'Expert piano movers and specialty item moving in Huntsville, TX. Pianos, antiques, fine art, safes, and more. Huntsville Moving Inc. — licensed & insured since 1992. Call (936) 291-7230.',
  alternates: { canonical: 'https://www.huntsvillemovingservicetx.com/specialty-moving' },
  openGraph: {
    title: 'Piano, Antique & Specialty Item Movers in Huntsville, TX',
    description: 'Pianos, antiques, gun safes, fine art, and pool tables. Extra equipment, extra care, same honest pricing. Call James at (936) 291-7230.',
    url: 'https://www.huntsvillemovingservicetx.com/specialty-moving',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Huntsville Moving Service — movers loading boxes into a van' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Piano, Antique & Specialty Item Moving in Huntsville, TX',
  provider: { '@type': 'MovingCompany', name: 'Huntsville Moving Inc.', telephone: '+19362917230', url: 'https://www.huntsvillemovingservicetx.com' },
  areaServed: { '@type': 'State', name: 'Texas' },
  description: 'Specialty moving services for pianos, antiques, fine art, gun safes, and pool tables in Texas. Proper equipment, experienced crew.',
  url: 'https://www.huntsvillemovingservicetx.com/specialty-moving',
}

export default function SpecialtyMovingPage() {
  return (
    <ServicePageShell
      breadcrumb={[{ label: 'Piano, Antique & Specialty Moving' }]}
      jsonLd={jsonLd}
      headline="Piano, Antique & Specialty Item Movers in Texas"
      subhead="Extra care for the items that cannot be replaced — from a crew that has been moving irreplaceable pieces since 1992."
      body={
        <>
          <h2>When Standard Moving Is Not Enough</h2>
          <p>
            Pianos, antique furniture, fine art, and heavy safes require specific equipment, proper technique, and a crew that has done it before. Huntsville Moving Inc. has been handling specialty items in Huntsville and across Texas for over thirty years. We are honest about what we can move safely — if an item needs a specialist conservator, we will tell you upfront.
          </p>
          <h2>Piano Moving</h2>
          <p>
            Upright pianos weigh 400–800 lbs. Grand pianos require leg disassembly, lid removal, specialized padding, and a dolly rated for the weight. We have moved uprights, spinets, baby grands, and full concert grands. Call us rather than risking it with a general moving crew.
          </p>
          <h2>Antique &amp; Fine Furniture</h2>
          <p>
            An antique armoire or a century-old roll-top desk cannot be replaced at a furniture store. We take extra time to pad and position antiques so they leave exactly as they arrive.
          </p>
          <h2>Other Specialty Items We Move</h2>
          <ul>
            <li>Fine art and large framed mirrors</li>
            <li>Gun safes and fireproof safes (weight-rated equipment required)</li>
            <li>Pool tables (disassembly and reassembly available)</li>
            <li>Grandfather clocks and antique china cabinets</li>
            <li>Large aquariums (drained by owner)</li>
          </ul>
        </>
      }
      included={[
        'Assessment of item dimensions and weight before quoting',
        'Specialty dollies and weight-rated equipment for heavy pieces',
        'Thick furniture blankets and custom padding',
        'Extra crew members as required by item weight',
        'Careful placement at destination',
        'Piano leg disassembly and reassembly for grand pianos',
      ]}
      notIncluded={[
        'Piano tuning after the move (owner\'s responsibility)',
        'Pool table felt replacement or re-leveling (recommend a billiards tech)',
        'Fine art crating or climate-controlled transport',
        'Moving aquariums with water — must be drained by owner before we arrive',
        'Items that cannot be safely moved without professional crating',
      ]}
      reviews={[
        {
          name: 'Linda F.',
          location: 'Huntsville, TX',
          body: 'They moved my baby grand piano from our old house to the new one without a scratch on the finish or a single key out of tune. James warned me it would need a day to settle before tuning, which was exactly right. A+ experience.',
        },
        {
          name: 'Greg M.',
          location: 'Bryan, TX',
          body: 'I had a 700 lb gun safe on the second floor. James said it was doable, brought the right equipment and crew, and got it down the stairs and into the truck without damage to the safe or my walls. Incredible crew.',
        },
      ]}
      faqs={[
        {
          q: 'How much does it cost to move a piano?',
          a: 'Piano moves are quoted individually based on piano type (upright vs. grand), access (stairs, tight doorways), and distance. Call (936) 291-7230 with the piano type and pickup/delivery addresses and James will give you a firm price.',
        },
        {
          q: 'Do you move grand pianos as well as uprights?',
          a: 'Yes. Grand and baby grand pianos require leg disassembly, lid removal, and an upright board — we have the equipment and experience for both types. Concert grands require a call to discuss crew size.',
        },
        {
          q: 'Will moving my piano put it out of tune?',
          a: 'Movement always affects piano tuning to some degree. We recommend waiting 48–72 hours after delivery before scheduling a tuning appointment, which allows the piano to acclimate to the new environment.',
        },
        {
          q: 'Can you move a safe down stairs?',
          a: 'Yes. We have moved safes from second-floor bedrooms and basements. The weight, dimensions, and stair configuration determine the crew and equipment required. Call with those details for an accurate quote.',
        },
        {
          q: 'Do you move antique furniture that is too fragile for standard wrapping?',
          a: 'We use the same thick furniture blankets and take additional time on antiques. For extremely fragile or high-value pieces that require custom crating, we will tell you honestly if the item is beyond our standard process — we will not risk it.',
        },
      ]}
      relatedServices={[
        { label: 'Home & Apartment Moves', href: '/home-apartment-moves' },
        { label: 'Packing & Unpacking', href: '/packing-unpacking' },
      ]}
      relatedCities={[
        { label: 'Movers in Huntsville, TX', href: '/areas/huntsville' },
        { label: 'Movers in Bryan, TX', href: '/areas/bryan' },
      ]}
    />
  )
}
