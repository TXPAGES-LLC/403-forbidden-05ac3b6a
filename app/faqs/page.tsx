import type { Metadata } from 'next'
import Link from 'next/link'
import { TrustStrip } from '@/components/trust-strip'
import { Breadcrumb } from '@/components/breadcrumb'

export const metadata: Metadata = {
  title: 'Moving FAQs | Huntsville Moving Inc. | Common Questions Answered',
  description:
    'Answers to the most common moving questions — cost, scheduling, insurance, deposits, short notice, piano moving, and more. Huntsville Moving Inc., Huntsville TX. Call (936) 291-7230.',
  alternates: { canonical: 'https://www.huntsvillemovingservicetx.com/faqs' },
  openGraph: {
    title: 'Moving FAQs | Huntsville Moving Inc.',
    description: 'Straight answers on pricing, scheduling, insurance, deposits, and what to expect on move day. No fluff — just the facts from James.',
    url: 'https://www.huntsvillemovingservicetx.com/faqs',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Huntsville Moving Service — movers loading boxes into a van' }],
  },
}

const faqs = [
  {
    category: 'Pricing & Estimates',
    questions: [
      {
        q: 'How much does a local move in Huntsville cost?',
        a: 'Local moves are priced by the hour based on crew size and number of trucks. A typical 2–3 bedroom home in Huntsville runs between $400 and $800. A 4–5 bedroom home can run $800–$1,400 depending on volume and distance. Call James at (936) 291-7230 for a precise estimate — it is free and takes about five minutes.',
      },
      {
        q: 'How do you price long-distance moves across Texas?',
        a: 'Long-distance moves within Texas are typically priced by weight and distance, or as a flat rate for well-defined moves. James will walk through your inventory and give you a written quote before you commit. No surprise charges at delivery.',
      },
      {
        q: 'Do you charge extra for stairs, elevators, or long carries?',
        a: 'We quote your move based on the actual conditions — if your apartment is on the third floor with no elevator, we account for that upfront. We do not surprise you with extra charges at the end of a long day.',
      },
      {
        q: 'Is there a minimum charge?',
        a: 'Yes, most local moves have a 2-hour minimum. Call (936) 291-7230 and James will tell you what applies to your specific situation.',
      },
    ],
  },
  {
    category: 'Scheduling',
    questions: [
      {
        q: 'How far in advance should I schedule my move?',
        a: 'Two weeks ahead is ideal for weekend moves during peak season (May through August). For weekday moves, we often have availability within a few days. Last-minute and same-day moves are possible — call and ask.',
      },
      {
        q: 'Can you move me on short notice or same-day?',
        a: 'Yes, subject to availability. Call us first thing in the morning at (936) 291-7230. Weekday slots open up more often than weekends. We will tell you honestly whether we can accommodate you.',
      },
      {
        q: 'Do you move on weekends?',
        a: 'Yes. We work Monday through Saturday, 8am to 6pm. We are closed on Sundays.',
      },
    ],
  },
  {
    category: 'Insurance & Protection',
    questions: [
      {
        q: 'Are you licensed and insured?',
        a: 'Yes. Huntsville Moving Inc. carries full cargo liability and basic released value protection. We are happy to email a certificate of insurance before your move day — just ask.',
      },
      {
        q: 'What happens if something gets damaged?',
        a: 'Call James directly at (936) 291-7230 and we will work it out. We have been in business since 1992 and our reputation depends on making things right. Claims are handled directly — no third-party runaround.',
      },
      {
        q: 'Do I need to purchase additional moving insurance?',
        a: 'Basic released value protection is included at no charge. If you have high-value items — antiques, artwork, jewelry — we recommend checking your homeowner\'s or renter\'s insurance policy for transit coverage. We can discuss options when you call.',
      },
    ],
  },
  {
    category: 'Deposits & Payment',
    questions: [
      {
        q: 'Do you require a deposit to hold my moving date?',
        a: 'No deposit is required for most local moves. Long-distance bookings may require a small deposit to hold your date. James will let you know when you call.',
      },
      {
        q: 'What forms of payment do you accept?',
        a: 'We accept cash, check, and major credit cards. Payment is due at the completion of your move.',
      },
    ],
  },
  {
    category: 'What We Move',
    questions: [
      {
        q: 'Do you move pianos?',
        a: 'Yes. We have moved upright pianos, baby grands, and full concert grands. Piano moving requires specialized equipment and technique — call (936) 291-7230 and describe your piano (make, model, and type if you know it) so we can quote it accurately.',
      },
      {
        q: 'Do you move gun safes?',
        a: 'Yes, for most residential-size safes. Very large safes (over 1,000 lbs) may require additional crew or equipment — call to discuss.',
      },
      {
        q: 'Do you offer labor-only loading or unloading?',
        a: 'Absolutely. If you have rented your own moving truck or have a storage pod, we can provide an experienced crew to load or unload it. Call (936) 291-7230 to book.',
      },
      {
        q: 'Do you move items in storage units?',
        a: 'Yes. Whether you need a storage unit loaded, unloaded, or moved to a new location, we can help. Describe the situation when you call.',
      },
    ],
  },
  {
    category: 'Packing & Supplies',
    questions: [
      {
        q: 'Do you offer packing services?',
        a: 'Yes. We offer full-pack (we pack everything), partial-pack (we pack what you have not done), and unpacking at your new place. Packing materials are available at cost. Ask about packing when you call for your estimate.',
      },
      {
        q: 'Do I need to empty dresser drawers before the move?',
        a: 'For local moves, lightweight items (soft clothing) can usually stay in drawers if the dresser is not too heavy. Heavy items (books, tools) should be removed. James will give you specific guidance when he builds your quote.',
      },
    ],
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.flatMap((cat) =>
    cat.questions.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    }))
  ),
}

export default function FAQsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumb items={[{ label: 'FAQs' }]} />

      {/* Hero */}
      <section className="bg-[var(--color-navy)] text-white py-14 lg:py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 lg:px-6">
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-balance mb-4">
            Moving FAQs
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-6">
            Honest answers to the questions we hear most. Still not sure? Call James directly.
          </p>
          <a
            href="tel:+19362917230"
            className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-display font-bold px-8 py-4 rounded text-xl transition-colors inline-block"
          >
            Call (936) 291-7230
          </a>
        </div>
      </section>

      <TrustStrip />

      {/* FAQ Categories */}
      <section className="py-14 lg:py-20 bg-[var(--color-background)]">
        <div className="max-w-3xl mx-auto px-4 lg:px-6 space-y-12">
          {faqs.map((cat) => (
            <div key={cat.category}>
              <h2 className="font-display text-2xl font-bold text-[var(--color-navy)] mb-5 pb-2 border-b border-[var(--color-border)]">
                {cat.category}
              </h2>
              <div className="space-y-3">
                {cat.questions.map((faq, i) => (
                  <details
                    key={i}
                    className="group bg-white border border-[var(--color-border)] rounded-lg overflow-hidden"
                  >
                    <summary className="flex items-center justify-between px-5 py-4 cursor-pointer select-none font-semibold text-[var(--color-navy)] text-sm leading-snug gap-3">
                      <span>{faq.q}</span>
                      <svg
                        className="w-4 h-4 flex-shrink-0 transition-transform group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-5 pb-4 border-t border-[var(--color-border)]">
                      <p className="pt-3 text-[var(--color-muted-foreground)] text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="bg-[var(--color-navy)] text-white py-12 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-2xl font-bold mb-2">Still have a question?</h2>
          <p className="text-white/70 mb-6">
            Call James directly — he can answer anything about your specific move in a few minutes.
          </p>
          <a
            href="tel:+19362917230"
            className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-display font-bold px-10 py-4 rounded text-xl transition-colors inline-block mb-6"
          >
            Call (936) 291-7230
          </a>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
            <Link href="/services" className="text-yellow-300 font-semibold text-sm hover:underline">
              View all moving services &rarr;
            </Link>
            <span className="hidden sm:block text-white/30">|</span>
            <Link href="/contact" className="text-yellow-300 font-semibold text-sm hover:underline">
              Request a free moving estimate &rarr;
            </Link>
            <span className="hidden sm:block text-white/30">|</span>
            <Link href="/areas-we-serve" className="text-yellow-300 font-semibold text-sm hover:underline">
              Cities we serve in East-Central Texas &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
