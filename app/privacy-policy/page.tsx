import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/breadcrumb'

export const metadata: Metadata = {
  title: 'Privacy Policy | Huntsville Moving Inc.',
  description: 'Privacy policy for Huntsville Moving Inc. — how we collect and use information from visitors to our website.',
  robots: { index: false, follow: false },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Privacy Policy' }]} />
      <div className="max-w-3xl mx-auto px-4 lg:px-6 py-14 lg:py-20">
        <h1 className="font-display text-4xl font-bold text-[var(--color-navy)] mb-6">Privacy Policy</h1>
        <p className="text-[var(--color-muted-foreground)] text-sm mb-8">Last updated: January 1, 2024</p>
        <div className="space-y-6 text-[var(--color-muted-foreground)] leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-bold text-[var(--color-navy)] mb-2">Information We Collect</h2>
            <p>We collect information you voluntarily submit through our estimate request form, including your name, phone number, email address, and move details. We do not collect payment information on this website.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-[var(--color-navy)] mb-2">How We Use Your Information</h2>
            <p>Information you submit is used solely to contact you regarding your moving estimate request. We do not sell, share, or distribute your personal information to third parties.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-[var(--color-navy)] mb-2">Cookies</h2>
            <p>This website may use basic analytics cookies to understand how visitors use the site. No personally identifiable information is collected through cookies.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-bold text-[var(--color-navy)] mb-2">Contact</h2>
            <p>For privacy-related questions, call us at <a href="tel:+19362917230" className="text-[var(--color-accent)] font-semibold">(936) 291-7230</a> or write to Huntsville Moving Inc., Huntsville, TX 77340.</p>
          </section>
        </div>
      </div>
    </>
  )
}
