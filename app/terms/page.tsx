import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/breadcrumb'

export const metadata: Metadata = {
  title: 'Terms of Service | Huntsville Moving Inc.',
  description: 'Terms of service for Huntsville Moving Inc.',
  robots: { index: false, follow: false },
}

export default function TermsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Terms of Service' }]} />
      <div className="max-w-3xl mx-auto px-4 lg:px-6 py-14 lg:py-20">
        <h1 className="font-display text-4xl font-bold text-[var(--color-navy)] mb-6">Terms of Service</h1>
        <p className="text-[var(--color-muted-foreground)] text-sm mb-8">Last updated: January 1, 2024</p>
        <div className="space-y-6 text-[var(--color-muted-foreground)] leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-bold text-[var(--color-navy)] mb-2">Use of This Website</h2>
            <p>This website is operated by Huntsville Moving Inc. By accessing this site you agree to use it for lawful purposes only. The content on this site is provided for informational purposes.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-[var(--color-navy)] mb-2">Moving Services</h2>
            <p>Moving services are provided subject to a written service agreement between Huntsville Moving Inc. and the customer. Estimate requests submitted through this website are not binding contracts. All moves are confirmed by a verbal or written agreement with James Yaggi.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-[var(--color-navy)] mb-2">Liability</h2>
            <p>Huntsville Moving Inc. carries cargo liability insurance as required by Texas law. Specific liability terms are outlined in the moving contract provided at booking.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-[var(--color-navy)] mb-2">Contact</h2>
            <p>Questions about these terms? Call <a href="tel:+19362917230" className="text-[var(--color-accent)] font-semibold">(936) 291-7230</a>.</p>
          </section>
        </div>
      </div>
    </>
  )
}
