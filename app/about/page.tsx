import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { TrustStrip } from '@/components/trust-strip'
import { Breadcrumb } from '@/components/breadcrumb'
import { VerifiedProfiles } from '@/components/verified-profiles'

export const metadata: Metadata = {
  title: 'About Huntsville Moving Inc. | Family-Owned Since 1992 | James & Yvonne Yaggi',
  description:
    'Meet James and Yvonne Yaggi, owners of Huntsville Moving Inc. Family-owned and operated in Huntsville, TX since 1992. Licensed, insured, bonded. Call (936) 291-7230.',
  alternates: { canonical: 'https://www.huntsvillemovingservicetx.com/about' },
  openGraph: {
    title: 'About Huntsville Moving Inc. | Family-Owned Since 1992',
    description: 'Meet James and Yvonne Yaggi — owner-operators of Huntsville Moving Inc. since 1992. Licensed, insured, and always personally accountable.',
    url: 'https://www.huntsvillemovingservicetx.com/about',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Huntsville Moving Service — movers loading boxes into a van' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MovingCompany',
  name: 'Huntsville Moving Inc.',
  url: 'https://www.huntsvillemovingservicetx.com',
  telephone: '+19362917230',
  foundingDate: '1992',
  founder: { '@type': 'Person', name: 'Yvonne Yaggi' },
  employee: [
    { '@type': 'Person', name: 'James Yaggi', jobTitle: 'Owner' },
    { '@type': 'Person', name: 'Yvonne Yaggi', jobTitle: 'Co-Owner' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Huntsville',
    addressRegion: 'TX',
    postalCode: '77340',
    addressCountry: 'US',
  },
  description:
    'Family-owned moving company in Huntsville, TX. Founded in 1992 by Yvonne Yaggi and operated today by James Yaggi. Licensed, insured, and bonded.',
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumb items={[{ label: 'About' }]} />

      {/* Hero */}
      <section className="bg-[var(--color-navy)] text-white py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <p className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-widest mb-2">
            Family-Owned Since 1992
          </p>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-balance mb-4">
            About Huntsville Moving Inc.
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Since 1992, we&apos;ve been helping families and businesses move forward with confidence. Whether you&apos;re planning a local move across town or a long-distance relocation, our experienced professionals bring the care and attention to detail that only comes from decades of service.
          </p>
          <p className="text-white/50 text-base max-w-xl mx-auto mt-4 leading-relaxed">
            We believe in honesty, reliability, and putting you first — values that have guided us through every move, every year, and every milestone in our company&apos;s history.
          </p>
        </div>
      </section>

      <TrustStrip />

      {/* Story */}
      <section className="py-14 lg:py-20 bg-[var(--color-background)]">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <p className="text-[var(--color-accent)] text-xs font-semibold uppercase tracking-widest mb-2">Our Story</p>
          <h2 className="font-display text-3xl font-bold text-[var(--color-navy)] mb-3 text-balance">
            Discover How Our Huntsville Team Makes Moving Easier
          </h2>
          <p className="text-[var(--color-muted-foreground)] text-base leading-relaxed mb-10 max-w-2xl">
            For you and your family, every move is a milestone. We treat it that way.
          </p>

          {/* Photo + leadership text side by side */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
            {/* Photo */}
            <div className="w-full lg:w-80 xl:w-96 flex-shrink-0">
              <Image
                src="/chatgpt-image-jul-1-2026-11-07-02-am.png"
                alt="James and Yvonne Yaggi, owners of Huntsville Moving Service"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg object-cover shadow-sm"
              />
            </div>

            {/* Leadership text */}
            <div className="flex-1">
              <h3 className="font-display text-2xl font-bold text-[var(--color-navy)] mb-4">
                Leadership That Understands Service and Dedication
              </h3>
              <div className="space-y-4 text-[var(--color-muted-foreground)] leading-relaxed">
                <p>
                  In 2006, James and Yvonne Yaggi took the helm, bringing a unique perspective shaped by their careers with the Texas Department of Criminal Justice. After James&apos;s impressive 38-year tenure, they brought discipline, integrity, and a commitment to excellence that transformed the way we serve our community.
                </p>
                <p>
                  You&apos;ll notice the difference the moment you work with us. From Huntsville&apos;s historic downtown charm to the sprawling neighborhoods near Sam Houston State University, we know this city&apos;s streets, its rhythm, and the care it takes to move through it safely and efficiently.
                </p>
                <p>
                  We&apos;re proud to be American-owned and operated, and we&apos;re honored to support homeowners and businesses across Huntsville as they transition to their next chapter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[var(--color-muted)] border-y border-[var(--color-border)] py-14 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <h2 className="font-display text-3xl font-bold text-[var(--color-navy)] text-center mb-10">
            How We Do Business
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Straight Pricing',
                body: 'We quote you a number and we stick to it. No hidden fees, no fuel surcharges added at the end, no bait-and-switch.',
              },
              {
                title: 'Show Up On Time',
                body: 'We give you a start window and we hit it. If something changes, you hear from James — not a call center.',
              },
              {
                title: 'Your Stuff, Our Responsibility',
                body: 'We wrap it, we protect your floors and doorways, and we handle it as if it is our own. That is not marketing — it is how we have kept customers for thirty years.',
              },
              {
                title: 'Licensed & Insured',
                body: 'Full cargo liability. We are happy to email a certificate of insurance before move day — just ask.',
              },
              {
                title: 'Local Knowledge',
                body: 'We know Walker County, the Sam Houston State area, the neighborhoods in Conroe, the roads in and out of College Station. That matters on move day.',
              },
              {
                title: 'No Subcontracting',
                body: 'Every crew member works for Huntsville Moving Inc. We do not broker your move to a third party. You get the same team from start to finish.',
              },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-lg border border-[var(--color-border)] p-6">
                <h3 className="font-display font-bold text-[var(--color-navy)] mb-2">{v.title}</h3>
                <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VerifiedProfiles compact />

      {/* CTA */}
      <section className="py-12 text-center bg-[var(--color-background)]">
        <p className="text-[var(--color-muted-foreground)] text-sm uppercase tracking-widest mb-2">Learn more about how we can support your next move</p>
        <a
          href="tel:+19362917230"
          className="font-display text-4xl lg:text-5xl font-bold text-[var(--color-navy)] hover:text-[var(--color-accent)] transition-colors block mb-5"
        >
          (936) 291-7230
        </a>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/services" className="text-[var(--color-accent)] font-semibold text-sm hover:underline">
            View all Huntsville moving services &rarr;
          </Link>
          <span className="hidden sm:block text-[var(--color-border)]">|</span>
          <Link href="/reviews" className="text-[var(--color-accent)] font-semibold text-sm hover:underline">
            Read what customers say about us &rarr;
          </Link>
          <span className="hidden sm:block text-[var(--color-border)]">|</span>
          <Link href="/contact" className="text-[var(--color-accent)] font-semibold text-sm hover:underline">
            Get a free moving estimate &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
