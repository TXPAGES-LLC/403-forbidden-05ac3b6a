import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { TrustStrip } from '@/components/trust-strip'

export const metadata: Metadata = {
  title: 'Huntsville Moving Inc. | Family-Owned Movers Since 1992 | (936) 291-7230',
  description:
    'Family-owned Huntsville, TX movers since 1992. Licensed, insured & bonded. Local and long-distance moving across Texas. Call (936) 291-7230 — answered by James, the owner.',
  alternates: { canonical: 'https://www.huntsvillemovingservicetx.com' },
  openGraph: {
    title: 'Huntsville Moving Inc. | Family-Owned Movers Since 1992',
    description:
      'Family-owned Huntsville, TX movers since 1992. Licensed, insured & bonded. Local and long-distance moving across Texas. Call (936) 291-7230.',
    url: 'https://www.huntsvillemovingservicetx.com',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Huntsville Moving Service — movers loading boxes into a van' }],
  },
}

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Local Movers',
    desc: 'Same-day and short-notice moves across Huntsville and Walker County.',
    href: '/local-movers',
    cta: 'Huntsville local movers',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: 'Long-Distance Moving Across Texas',
    desc: 'Licensed carrier for statewide Texas relocations, big and small.',
    href: '/long-distance-moving',
    cta: 'Texas long-distance moving',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Home & Apartment Moves',
    desc: 'Full-service residential moves — from studio apartments to 5-bedroom homes.',
    href: '/home-apartment-moves',
    cta: 'Residential moving services',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Office & Commercial Moves',
    desc: 'Efficient office relocations scheduled to minimize business downtime.',
    href: '/office-commercial-moves',
    cta: 'Office & commercial movers',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'Packing & Unpacking',
    desc: 'Professional packing with quality materials — full-service or partial.',
    href: '/packing-unpacking',
    cta: 'Packing & unpacking service',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Piano, Antique & Specialty Moving',
    desc: 'White-glove care for irreplaceable items — pianos, antiques, fine art.',
    href: '/specialty-moving',
    cta: 'Piano & specialty item moving',
  },
]

const steps = [
  {
    n: '1',
    title: 'Call James Directly',
    body: 'Call (936) 291-7230 and talk directly to James. He will walk through your move details, ask the right questions, and give you a straight honest number — no bait-and-switch.',
  },
  {
    n: '2',
    title: 'Walk-Through & Plan',
    body: 'We schedule a quick walk-through or a detailed phone inventory. That lets us show up move day with exactly the right crew size, truck, and packing supplies — no surprises.',
  },
  {
    n: '3',
    title: 'Move Day',
    body: 'Our crew arrives on time in a clean, marked Huntsville Moving truck. We protect your floors and doorways, wrap your furniture, load carefully, and drive it straight to your new place.',
  },
  {
    n: '4',
    title: 'Settled In',
    body: 'We place furniture where you want it, reassemble what we disassembled, and do a final walk-through with you before we leave. We are done when you are happy.',
  },
]

const reviews = [
  {
    name: 'Sandra M.',
    text: 'James and his crew moved our entire 4-bedroom house in under six hours. They wrapped every piece of furniture, not a scratch anywhere. Worth every penny.',
    stars: 5,
  },
  {
    name: 'David R.',
    text: 'I called at 8 in the morning and they were at my apartment by 10. Professional, fast, and the price was exactly what James quoted over the phone. No hidden fees.',
    stars: 5,
  },
  {
    name: 'Carol P.',
    text: 'They moved our 1920s upright piano without even a hint of stress. I was holding my breath the entire time but those guys knew exactly what they were doing.',
    stars: 5,
  },
]

const faqs = [
  {
    q: 'How much does a local move in Huntsville cost?',
    a: 'Local moves are typically priced by the hour, based on crew size and truck count. Most 2–3 bedroom homes in Huntsville run between $400–$800. Call James at (936) 291-7230 for a precise estimate — it is free and takes about five minutes.',
  },
  {
    q: 'How far in advance should I schedule?',
    a: 'Two weeks out is ideal for weekends in peak season (May–August). Weekday slots are often available within a few days. We do take last-minute moves when possible — call and ask.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. We carry full cargo liability and released value protection. We are happy to email a certificate of insurance before move day — just ask.',
  },
  {
    q: 'Do you require a deposit?',
    a: 'No deposit is required to hold your date on most local moves. Long-distance bookings may require a small deposit. We will be upfront about any requirements when you call.',
  },
  {
    q: 'Can you move me on short notice?',
    a: 'Yes, subject to availability. Call us first thing in the morning at (936) 291-7230. Same-day and next-day moves are possible on weekdays when our schedule allows.',
  },
  {
    q: 'Do you offer labor-only loading or unloading?',
    a: 'Absolutely. If you have your own truck or Pod, we can provide an experienced crew to load or unload it. Call (936) 291-7230 to book.',
  },
]

const cities = [
  { name: 'Huntsville', href: '/areas/huntsville' },
  { name: 'College Station', href: '/areas/college-station' },
  { name: 'Bryan', href: '/areas/bryan' },
  { name: 'Madisonville', href: '/areas/madisonville' },
  { name: 'Trinity', href: '/areas/trinity' },
  { name: 'Conroe', href: '/areas/conroe' },
  { name: 'The Woodlands', href: '/areas/the-woodlands' },
  { name: 'Willis', href: '/areas/willis' },
  { name: 'Livingston', href: '/areas/livingston' },
  { name: 'Navasota', href: '/areas/navasota' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MovingCompany',
      name: 'Huntsville Moving Inc.',
      url: 'https://www.huntsvillemovingservicetx.com',
      sameAs: [
        'https://maps.google.com/?cid=8089976357722667618',
        'https://www.yelp.com/biz/huntsville-moving-huntsville',
        'http://directory.bubblelife.com/listing/3515297870/Huntsville_Moving_Inc',
      ],
      telephone: '+19362917230',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Huntsville',
        addressRegion: 'TX',
        postalCode: '77340',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 30.7235,
        longitude: -95.5507,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '08:00',
          closes: '18:00',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.6',
        reviewCount: '26',
        bestRating: '5',
      },
      founder: { '@type': 'Person', name: 'Yvonne Yaggi' },
      employee: { '@type': 'Person', name: 'James Yaggi' },
      foundingDate: '1992',
      priceRange: '$$',
    },
    {
      '@type': 'WebSite',
      url: 'https://www.huntsvillemovingservicetx.com',
      name: 'Huntsville Moving Service',
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-navy)] text-white relative overflow-hidden" aria-labelledby="hero-heading">
        {/* Hero photo */}
        <div className="absolute inset-0">
          <Image
            src="/chatgpt-image-jul-1-2026-11-03-08-am.png"
            alt="Huntsville Moving Service crew loading boxes into a moving van"
            fill
            className="object-cover object-center opacity-25"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-navy)]/60 to-[var(--color-navy)]/80" />
        </div>

        <div className="relative z-10">
          <div className="max-w-5xl mx-auto px-4 lg:px-6 py-14 lg:py-24 text-center">
            {/* Stars above fold */}
            <div className="flex items-center justify-center gap-1.5 mb-6">
              <span className="flex text-yellow-400" aria-label="4.6 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.376-2.455a1 1 0 00-1.175 0l-3.376 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69L9.049 2.927z" />
                  </svg>
                ))}
              </span>
              <a
                href="https://maps.google.com/?cid=8089976357722667618"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 text-sm hover:text-yellow-300 transition-colors"
              >
                4.6 stars &middot; 26 Google Reviews
              </a>
            </div>

            <h1
              id="hero-heading"
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-5 text-white"
            >
              Family-Owned Huntsville Movers,<br className="hidden sm:block" /> Trusted Since 1992
            </h1>
            <p className="text-white/75 text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
              Serving Huntsville, Walker County, and the Sam Houston /<br className="hidden sm:block" /> Bryan–College Station corridor — by James &amp; Yvonne Yaggi.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+19362917230"
                className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-display font-bold px-10 py-4 rounded text-xl transition-colors w-full sm:w-auto"
              >
                Call (936) 291-7230
              </a>
              <Link
                href="/contact"
                className="border-2 border-white/60 hover:border-white text-white font-semibold px-8 py-4 rounded text-base transition-colors w-full sm:w-auto text-center"
              >
                Get a Free Estimate
              </Link>
            </div>
            <p className="mt-5 text-white/50 text-xs">No deposit required on most local moves &middot; Licensed &amp; Insured &amp; Bonded</p>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST STRIP ───────────────────────────────────────────────── */}
      <TrustStrip />

      {/* ── 3. JAMES BAND ────────────────────────────────────────────────── */}
      <section className="bg-[var(--color-muted)] border-y border-[var(--color-border)] py-12 lg:py-16" aria-labelledby="owner-heading">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <div>
            <p className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-widest mb-2">
              A message from the owner
            </p>
            <h2 id="owner-heading" className="font-display text-2xl lg:text-3xl font-bold text-[var(--color-navy)] mb-3">
              Talk to James — Running the Company Since 2006, Family Business Since 1992
            </h2>
            <p className="text-[var(--color-muted-foreground)] leading-relaxed max-w-2xl mb-5">
              When you call Huntsville Moving, you get me — James Yaggi. I have been running this company since 2006 and my mother Yvonne has been in the business since we founded it in 1992. I give every customer a straight, honest price and I back it up with a crew that shows up on time, treats your stuff like their own, and does not leave until you are satisfied. That is how we have kept the same phone number for over thirty years.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+19362917230"
                className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-bold px-7 py-3.5 rounded transition-colors text-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (936) 291-7230
              </a>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border-2 border-[var(--color-navy)] text-[var(--color-navy)] font-semibold px-6 py-3.5 rounded hover:bg-[var(--color-navy)] hover:text-white transition-colors text-base"
              >
                Meet James &amp; Yvonne
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. SERVICES GRID ─────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-[var(--color-background)]" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-10">
            <p className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-widest mb-2">What We Do</p>
            <h2 id="services-heading" className="font-display text-3xl lg:text-4xl font-bold text-[var(--color-navy)] text-balance">
              Huntsville Moving Services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <article
                key={svc.href}
                className="bg-white rounded-lg border border-[var(--color-border)] p-6 hover:shadow-md hover:border-[var(--color-navy-100)] transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--color-navy-50,#eef2f7)] flex items-center justify-center text-[var(--color-navy)] mb-4 group-hover:bg-[var(--color-navy)] group-hover:text-white transition-colors">
                  {svc.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-[var(--color-navy)] mb-2">{svc.title}</h3>
                <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed mb-4">{svc.desc}</p>
                <Link
                  href={svc.href}
                  className="text-[var(--color-accent)] font-semibold text-sm hover:text-[var(--color-accent-hover)] transition-colors"
                >
                  {svc.cta} &rarr;
                </Link>
              </article>
            ))}
          </div>
          {/* Labor-only teaser */}
          <div className="mt-6 bg-[var(--color-navy)] rounded-lg px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-white font-semibold">
              Need a crew to load or unload your own truck?{' '}
              <Link href="/labor-only" className="text-yellow-300 underline">
                Labor-only loading &amp; unloading &rarr;
              </Link>
            </p>
            <Link
              href="/services"
              className="shrink-0 text-yellow-300 font-semibold text-sm hover:underline whitespace-nowrap"
            >
              View all moving services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. HOW IT WORKS ──────────────────────────────────────────────── */}
      <section className="bg-[var(--color-navy)] text-white py-14 lg:py-20" aria-labelledby="how-heading">
        <div className="max-w-6xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-10">
            <p className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-widest mb-2">Simple Process</p>
            <h2 id="how-heading" className="font-display text-3xl lg:text-4xl font-bold text-balance">
              How a Move With Us Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.n} className="relative">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center font-display font-bold text-xl mb-4">
                  {step.n}
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. REVIEWS ───────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-[var(--color-background)]" aria-labelledby="reviews-heading">
        <div className="max-w-6xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-6 h-6 fill-yellow-400" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.376-2.455a1 1 0 00-1.175 0l-3.376 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69L9.049 2.927z" />
                </svg>
              ))}
            </div>
            <h2 id="reviews-heading" className="font-display text-3xl lg:text-4xl font-bold text-[var(--color-navy)] text-balance">
              What Our Customers Say
            </h2>
            <p className="text-[var(--color-muted-foreground)] mt-2">4.6 stars across 26 Google Reviews</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <blockquote
                key={r.name}
                className="bg-white rounded-lg border border-[var(--color-border)] p-6 shadow-sm"
                itemScope
                itemType="https://schema.org/Review"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.376-2.455a1 1 0 00-1.175 0l-3.376 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69L9.049 2.927z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed mb-4" itemProp="reviewBody">
                  &ldquo;{r.text}&rdquo;
                </p>
                <footer className="font-semibold text-[var(--color-navy)] text-sm" itemProp="author">
                  &mdash; {r.name}
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://maps.google.com/?cid=8089976357722667618"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-[var(--color-navy)] text-[var(--color-navy)] font-semibold px-6 py-3 rounded hover:bg-[var(--color-navy)] hover:text-white transition-colors"
            >
              Read All Reviews on Google &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ── 7. SERVICE AREA ──────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-[var(--color-muted)] border-y border-[var(--color-border)]" aria-labelledby="areas-heading">
        <div className="max-w-6xl mx-auto px-4 lg:px-6">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Service area map */}
            <div className="w-full lg:w-80 xl:w-96 flex-shrink-0">
              <Image
                src="/texas-service-area-map.png"
                alt="Texas service area map showing Huntsville Moving Inc. coverage across Walker, Montgomery, Madison, Trinity, and Brazos counties in Texas"
                width={960}
                height={720}
                className="w-full h-auto rounded-lg border border-[var(--color-border)] shadow-sm"
                priority={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 320px, 384px"
              />
            </div>
            {/* City list */}
            <div className="flex-1">
              <p className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-widest mb-2">Where We Move</p>
              <h2 id="areas-heading" className="font-display text-3xl lg:text-4xl font-bold text-[var(--color-navy)] mb-4 text-balance">
                Huntsville &amp; Surrounding Communities
              </h2>
              <p className="text-[var(--color-muted-foreground)] mb-6 leading-relaxed">
                We are based in Huntsville and serve the entire Sam Houston corridor — college towns, small towns, and everything in between.
              </p>
              <ul className="grid grid-cols-2 gap-2 mb-6">
                {cities.map((c) => (
                  <li key={c.href}>
                    <Link
                      href={c.href}
                      className="flex items-center gap-1.5 text-[var(--color-navy)] hover:text-[var(--color-accent)] font-medium text-sm transition-colors"
                    >
                      <svg className="w-3.5 h-3.5 text-[var(--color-accent)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {c.name}, TX
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="text-[var(--color-muted-foreground)] text-sm bg-white rounded-lg px-4 py-3 border border-[var(--color-border)]">
                <strong className="text-[var(--color-navy)]">Don&apos;t see your city?</strong>{' '}
                <a href="tel:+19362917230" className="text-[var(--color-accent)] hover:underline font-semibold">
                  Call us
                </a>{' '}
                — we move across Texas.
              </p>
              <div className="mt-4">
                <Link
                  href="/areas-we-serve"
                  className="text-[var(--color-accent)] font-semibold text-sm hover:underline"
                >
                  See every city and county we serve &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-[var(--color-background)]" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-10">
            <p className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-widest mb-2">Common Questions</p>
            <h2 id="faq-heading" className="font-display text-3xl lg:text-4xl font-bold text-[var(--color-navy)] text-balance">
              Frequently Asked Questions
            </h2>
          </div>
          <div
            className="space-y-3"
            itemScope
            itemType="https://schema.org/FAQPage"
          >
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-white border border-[var(--color-border)] rounded-lg group"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none select-none">
                  <span className="font-semibold text-[var(--color-navy)] pr-4" itemProp="name">
                    {faq.q}
                  </span>
                  <svg
                    className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 transition-transform group-open:rotate-45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <div
                  className="px-5 pb-4 text-[var(--color-muted-foreground)] text-sm leading-relaxed border-t border-[var(--color-border)] pt-3"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p itemProp="text">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/faqs"
              className="text-[var(--color-accent)] font-semibold hover:underline"
            >
              See all FAQs &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── 9. FINAL CTA BAND ────────────────────────────────────────────── */}
      <section className="bg-[var(--color-accent)] text-white py-14 text-center" aria-labelledby="final-cta-heading">
        <div className="max-w-3xl mx-auto px-4 lg:px-6">
          <p className="font-display text-white/80 text-sm uppercase tracking-widest mb-2">Ready when you are</p>
          <h2 id="final-cta-heading" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
            (936) 291-7230
          </h2>
          <a
            href="tel:+19362917230"
            className="sr-only"
          >
            Call Huntsville Moving Inc.
          </a>
          <p className="text-white/70 text-lg mb-8">Family-owned since 1992 &middot; Licensed &amp; Insured</p>

        </div>
      </section>
    </>
  )
}
