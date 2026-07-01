import Image from 'next/image'
import Link from 'next/link'
import { TrustStrip } from './trust-strip'
import { Breadcrumb, type BreadcrumbItem } from './breadcrumb'

export interface ServiceReview {
  name: string
  location: string
  body: string
}

export interface ServiceFaq {
  q: string
  a: string
}

export interface RelatedLink {
  label: string
  href: string
}

interface ServicePageShellProps {
  breadcrumb: BreadcrumbItem[]
  headline: string
  subhead: string
  heroImage?: { src: string; alt: string }
  body: React.ReactNode
  included: string[]
  notIncluded: string[]
  reviews: [ServiceReview, ServiceReview]
  faqs: ServiceFaq[]
  relatedServices: [RelatedLink, RelatedLink]
  relatedCities: [RelatedLink, RelatedLink]
  jsonLd?: object
}

export function ServicePageShell({
  breadcrumb,
  headline,
  subhead,
  heroImage,
  body,
  included,
  notIncluded,
  reviews,
  faqs,
  relatedServices,
  relatedCities,
  jsonLd,
}: ServicePageShellProps) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumb items={breadcrumb} />

      {/* Hero — above the fold: phone CTA, estimate link, scope, trust strip */}
      <section className="bg-[var(--color-navy)] text-white py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <div className={heroImage ? 'flex flex-col lg:flex-row items-center gap-8 lg:gap-12' : ''}>
            <div className={heroImage ? 'flex-1 max-w-3xl' : 'max-w-3xl'}>
              <h1 className="font-display text-3xl lg:text-5xl font-bold text-balance leading-tight mb-3">
                {headline}
              </h1>
              <p className="text-white/70 text-lg lg:text-xl leading-relaxed mb-6 max-w-2xl">
                {subhead}
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <a
                  href="tel:+19362917230"
                  className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-bold px-7 py-3.5 rounded text-lg transition-colors"
                >
                  Call (936) 291-7230
                </a>
                <Link
                  href="/contact"
                  className="border-2 border-white/50 hover:border-white text-white font-semibold px-6 py-3.5 rounded text-base transition-colors"
                >
                  Get a Free Estimate
                </Link>
              </div>
              <p className="mt-3 text-white/50 text-xs">No deposit required on most local moves &middot; Licensed &amp; Insured &amp; Bonded</p>
            </div>
            {heroImage && (
              <div className="w-full lg:w-80 xl:w-96 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  width={800}
                  height={600}
                  className="w-full h-56 lg:h-72 object-cover rounded-lg"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <TrustStrip />

      <div className="max-w-5xl mx-auto px-4 lg:px-6 py-12 lg:py-16 space-y-14">

        {/* Main body copy */}
        <div className="prose prose-lg max-w-none text-[var(--color-muted-foreground)] [&_h2]:font-display [&_h2]:text-[var(--color-navy)] [&_h2]:text-2xl [&_h3]:font-display [&_h3]:text-[var(--color-navy)] [&_strong]:text-[var(--color-navy)] [&_a]:text-[var(--color-accent)] [&_a:hover]:underline">
          {body}
        </div>

        {/* Inline phone CTA — mid page */}
        <div className="bg-[var(--color-navy)] text-white rounded-lg px-6 py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-display text-xl font-bold mb-0.5">Ready to get a price?</p>
            <p className="text-white/60 text-sm">James answers personally — no hold music, no call centers.</p>
          </div>
          <a
            href="tel:+19362917230"
            className="shrink-0 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-bold px-7 py-3.5 rounded text-lg transition-colors whitespace-nowrap"
          >
            Call (936) 291-7230
          </a>
        </div>

        {/* What's Included / What's Not */}
        <section aria-labelledby="included-heading">
          <h2 id="included-heading" className="font-display text-2xl lg:text-3xl font-bold text-[var(--color-navy)] mb-6">
            What&apos;s Included &mdash; and What&apos;s Not
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h3 className="font-display text-lg font-bold text-green-800 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Included
              </h3>
              <ul className="space-y-2">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-green-900">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[var(--color-muted)] border border-[var(--color-border)] rounded-lg p-5">
              <h3 className="font-display text-lg font-bold text-[var(--color-navy)] mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--color-muted-foreground)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Not Included
              </h3>
              <ul className="space-y-2">
                {notIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[var(--color-muted-foreground)]">
                    <svg className="w-4 h-4 text-[var(--color-muted-foreground)] mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing anchor */}
        <section aria-labelledby="pricing-heading" className="bg-[var(--color-warm-gray)] border border-[var(--color-border)] rounded-lg p-6">
          <h2 id="pricing-heading" className="font-display text-2xl font-bold text-[var(--color-navy)] mb-3">
            Pricing — What to Expect
          </h2>
          <p className="text-[var(--color-muted-foreground)] mb-3">
            <strong className="text-[var(--color-navy)]">Two-mover minimum. Two-hour minimum.</strong> All moves are billed portal-to-portal — from the time the crew leaves our facility to the time they return. Fuel and equipment are not added as separate line items.
          </p>
          <p className="text-[var(--color-muted-foreground)]">
            For an honest quote in under five minutes, call James at{' '}
            <a href="tel:+19362917230" className="text-[var(--color-accent)] font-semibold hover:underline">
              (936) 291-7230
            </a>. He will give you a realistic range — not a bait-and-switch lowball.
          </p>
        </section>

        {/* Reviews */}
        <section aria-labelledby="reviews-heading">
          <h2 id="reviews-heading" className="font-display text-2xl lg:text-3xl font-bold text-[var(--color-navy)] mb-6">
            What Customers Say
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((r) => (
              <blockquote
                key={r.name}
                className="bg-white border border-[var(--color-border)] rounded-lg p-6 shadow-sm"
              >
                <div className="flex text-yellow-400 mb-3" aria-label="5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.376-2.455a1 1 0 00-1.175 0l-3.376 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69L9.049 2.927z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[var(--color-foreground)] text-sm leading-relaxed mb-4">&ldquo;{r.body}&rdquo;</p>
                <footer className="text-xs text-[var(--color-muted-foreground)] font-semibold">
                  {r.name} &mdash; {r.location}
                </footer>
              </blockquote>
            ))}
          </div>
          <p className="mt-4 text-sm text-[var(--color-muted-foreground)]">
            <a
              href="https://maps.google.com/?cid=8089976357722667618"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:underline font-semibold"
            >
              Read all reviews on Google &rarr;
            </a>
          </p>
        </section>

        {/* FAQs */}
        <section aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="font-display text-2xl lg:text-3xl font-bold text-[var(--color-navy)] mb-6">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-[var(--color-border)] border border-[var(--color-border)] rounded-lg overflow-hidden">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white">
                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer font-semibold text-[var(--color-navy)] text-sm lg:text-base select-none hover:bg-[var(--color-muted)] transition-colors">
                  {faq.q}
                  <svg
                    className="w-4 h-4 shrink-0 text-[var(--color-muted-foreground)] transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 pt-1 text-sm text-[var(--color-muted-foreground)] leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Related services and cities */}
        <section aria-labelledby="related-heading">
          <h2 id="related-heading" className="font-display text-2xl font-bold text-[var(--color-navy)] mb-5">
            Related Services &amp; Areas
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted-foreground)] mb-3">Related Services</p>
              <ul className="space-y-2">
                {relatedServices.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="flex items-center gap-2 text-[var(--color-navy)] font-semibold hover:text-[var(--color-accent)] transition-colors text-sm"
                    >
                      <svg className="w-4 h-4 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted-foreground)] mb-3">Nearby Cities We Serve</p>
              <ul className="space-y-2">
                {relatedCities.map((c) => (
                  <li key={c.href}>
                    <Link
                      href={c.href}
                      className="flex items-center gap-2 text-[var(--color-navy)] font-semibold hover:text-[var(--color-accent)] transition-colors text-sm"
                    >
                      <svg className="w-4 h-4 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

      </div>


    </>
  )
}
