import Image from 'next/image'
import Link from 'next/link'

const serviceLinks = [
  { label: 'Local Movers', href: '/local-movers' },
  { label: 'Long-Distance Moving Across Texas', href: '/long-distance-moving' },
  { label: 'Home & Apartment Moves', href: '/home-apartment-moves' },
  { label: 'Office & Commercial Moves', href: '/office-commercial-moves' },
  { label: 'Packing & Unpacking', href: '/packing-unpacking' },
  { label: 'Piano, Antique & Specialty Moving', href: '/specialty-moving' },
  { label: 'Labor-Only Loading & Unloading', href: '/labor-only' },
]

const cityLinks = [
  { label: 'Huntsville, TX', href: '/areas/huntsville' },
  { label: 'College Station, TX', href: '/areas/college-station' },
  { label: 'Bryan, TX', href: '/areas/bryan' },
  { label: 'Madisonville, TX', href: '/areas/madisonville' },
  { label: 'Trinity, TX', href: '/areas/trinity' },
  { label: 'Conroe, TX', href: '/areas/conroe' },
  { label: 'The Woodlands, TX', href: '/areas/the-woodlands' },
  { label: 'Willis, TX', href: '/areas/willis' },
  { label: 'Livingston, TX', href: '/areas/livingston' },
  { label: 'Navasota, TX', href: '/areas/navasota' },
]

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Customer Reviews', href: '/reviews' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' },
  { label: 'Areas We Serve', href: '/areas-we-serve' },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[var(--color-navy)] text-white" aria-label="Site footer">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* NAP column */}
        <div>
          <Link href="/" aria-label="Huntsville Moving Service – Home">
            <Image
              src="/logo.png"
              alt="Huntsville Moving Service logo"
              width={320}
              height={200}
              className="h-40 w-auto object-contain mb-3"
            />
          </Link>
          <div className="text-[var(--color-accent)] text-xs font-semibold tracking-widest uppercase mb-4">
            Family-Owned Since 1992
          </div>
          <address className="not-italic text-white/70 text-sm leading-relaxed space-y-1">
            <p>James &amp; Yvonne Yaggi, Owners</p>
            <p>Huntsville, TX 77340</p>
            <p>
              <a href="tel:+19362917230" className="hover:text-white transition-colors font-semibold text-white">
                (936) 291-7230
              </a>
            </p>
            <p>
              <a href="sms:+19362917230" className="hover:text-white transition-colors">
                Text Us
              </a>
            </p>
            <p>
              <a
                href="https://maps.google.com/?cid=8089976357722667618"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Get Directions &rarr;
              </a>
            </p>
          </address>
          <div className="mt-4 text-white/60 text-xs space-y-1">
            <p>Mon–Sat: 8:00am – 6:00pm</p>
            <p>Sunday: Closed</p>
            <p className="mt-2 text-white/80 font-medium">Licensed · Insured · Bonded</p>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-display font-bold text-sm uppercase tracking-widest text-white/50 mb-4">
            Services
          </h3>
          <ul className="space-y-2">
            {serviceLinks.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="text-white/70 hover:text-white text-sm transition-colors">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Cities */}
        <div>
          <h3 className="font-display font-bold text-sm uppercase tracking-widest text-white/50 mb-4">
            Areas We Serve
          </h3>
          <ul className="space-y-2">
            {cityLinks.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="text-white/70 hover:text-white text-sm transition-colors">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-display font-bold text-sm uppercase tracking-widest text-white/50 mb-4">
            Company
          </h3>
          <ul className="space-y-2">
            {companyLinks.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="text-white/70 hover:text-white text-sm transition-colors">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-3">
            <a
              href="https://maps.google.com/?cid=8089976357722667618"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Huntsville Moving Inc. on Google Maps — 4.6 stars"
              className="w-8 h-8 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              {/* Google G mark */}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M21.805 10.023H12v3.954h5.618c-.242 1.301-1.004 2.404-2.138 3.146v2.611h3.46C20.83 17.734 22 15.134 22 12c0-.54-.046-1.063-.195-1.977z" fill="#4285F4"/>
                <path d="M12 22c2.7 0 4.963-.895 6.62-2.427l-3.461-2.61c-.907.61-2.07.97-3.159.97-2.43 0-4.49-1.64-5.228-3.845H3.19v2.687A10 10 0 0 0 12 22z" fill="#34A853"/>
                <path d="M6.772 13.088A5.97 5.97 0 0 1 6.46 12c0-.374.066-.737.312-1.088V8.225H3.19A10 10 0 0 0 2 12c0 1.614.386 3.14 1.19 4.775l3.582-2.687z" fill="#FBBC05"/>
                <path d="M12 6.058c1.368 0 2.596.47 3.565 1.392l2.67-2.67C16.961 3.245 14.697 2 12 2A10 10 0 0 0 3.19 7.225l3.582 2.687C7.51 7.698 9.57 6.058 12 6.058z" fill="#EA4335"/>
              </svg>
            </a>
            <a
              href="https://www.yelp.com/biz/huntsville-moving-huntsville"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Huntsville Moving Inc. on Yelp"
              className="w-8 h-8 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#D32323" aria-hidden="true">
                <path d="M12.23 11.82c-.3-.16-.35-.52-.1-.76l4.08-4.08a.52.52 0 0 1 .75.05c1.18 1.44 1.9 3.24 1.95 5.2a.52.52 0 0 1-.5.54l-5.65.3a.52.52 0 0 1-.53-.25zM11.03 10.6c.05.34-.22.63-.56.61L4.8 10.9a.52.52 0 0 1-.48-.63 8.04 8.04 0 0 1 3.9-5.33.52.52 0 0 1 .74.26l2.1 4.9c.07.17.04.36-.03.5zm-.64 3.26c.17.3.06.68-.26.82l-5.17 2.17a.52.52 0 0 1-.68-.34 8.04 8.04 0 0 1-.13-4.27.52.52 0 0 1 .63-.38l5.36 1.4c.13.03.23.12.25.2v.4zm1.93 1.1c-.28-.2-.29-.59-.03-.8l4.4-3.6a.52.52 0 0 1 .76.1c.76 1.2 1.13 2.63 1.01 4.1a.52.52 0 0 1-.6.47l-5.3-.95a.52.52 0 0 1-.24-.32zm-1.5 1.04c.34.05.54.4.41.72l-1.98 5.1a.52.52 0 0 1-.72.27 8.04 8.04 0 0 1-3.43-3.6.52.52 0 0 1 .27-.7l5.1-1.88c.12-.04.26-.04.35.09z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 flex flex-col md:flex-row justify-between items-center gap-2 text-white/40 text-xs">
          <p>&copy; {year} Huntsville Moving Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
