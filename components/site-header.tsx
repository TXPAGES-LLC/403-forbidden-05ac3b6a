'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const services = [
  { label: 'Local Movers', href: '/local-movers' },
  { label: 'Long-Distance Moving Across Texas', href: '/long-distance-moving' },
  { label: 'Home & Apartment Moves', href: '/home-apartment-moves' },
  { label: 'Office & Commercial Moves', href: '/office-commercial-moves' },
  { label: 'Packing & Unpacking', href: '/packing-unpacking' },
  { label: 'Piano, Antique & Specialty Item Moving', href: '/specialty-moving' },
  { label: 'Labor-Only Loading & Unloading', href: '/labor-only' },
]

const nav = [
  { label: 'Services', href: '/services', children: services },
  { label: 'Areas We Serve', href: '/areas-we-serve' },
  { label: 'About', href: '/about' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Contact', href: '/contact' },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-navy)] shadow-lg">
      {/* Top utility bar */}
      <div className="bg-[var(--color-navy-dark,#111b33)] border-b border-white/10 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-9">
          <div className="flex items-center gap-4">
            <span className="text-white/50 text-xs">Licensed &middot; Insured &middot; Bonded &middot; Family-Owned Since 1992</span>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-white/60 text-xs">Mon–Sat 8am–6pm · Closed Sunday</span>
            <a
              href="sms:+19362917230"
              className="text-white/70 hover:text-white text-xs transition-colors"
            >
              Text Us
            </a>
            <a
              href="https://maps.google.com/?cid=8089976357722667618"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400/80 hover:text-yellow-300 text-xs transition-colors flex items-center gap-1"
            >
              <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.376-2.455a1 1 0 00-1.175 0l-3.376 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69L9.049 2.927z" />
              </svg>
              4.6 Stars · 26 Reviews
            </a>
          </div>
        </div>
      </div>

      {/* Main header row */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" aria-label="Huntsville Moving Service – Home">
            <Image
              src="/logo.png"
              alt="Huntsville Moving Service logo — cartoon mover with dolly and boxes"
              width={160}
              height={100}
              className="h-14 lg:h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button
                    className="px-3 py-2 text-white/80 hover:text-white text-sm font-medium transition-colors flex items-center gap-1"
                    aria-haspopup="true"
                  >
                    {item.label}
                    <svg className="w-3.5 h-3.5 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute left-0 top-full mt-1 w-72 bg-white rounded shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-[var(--color-navy)] text-sm hover:bg-[var(--color-warm-gray)] hover:text-[var(--color-accent)] transition-colors border-b border-gray-50 last:border-0"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-white/80 hover:text-white text-sm font-medium transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA phone */}
          <div className="hidden lg:flex flex-col items-end">
            <a
              href="tel:+19362917230"
              className="font-display text-2xl font-bold text-white hover:text-[var(--color-accent)] transition-colors leading-tight"
            >
              (936) 291-7230
            </a>
            <span className="text-white/50 text-[11px] leading-tight">
              Call — answered by James, owner since 2006
            </span>
          </div>

          {/* Mobile: phone + hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="tel:+19362917230"
              className="font-display text-lg font-bold text-white leading-none"
              aria-label="Call (936) 291-7230"
            >
              (936) 291-7230
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
              className="p-2 text-white/80 hover:text-white"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <nav className="lg:hidden bg-[var(--color-navy-dark,#111b33)] border-t border-white/10 pb-4" aria-label="Mobile navigation">
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="w-full flex items-center justify-between px-5 py-3 text-white/80 hover:text-white text-sm font-medium border-b border-white/10"
            aria-expanded={servicesOpen}
          >
            <span>Services</span>
            <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {servicesOpen && (
            <div className="bg-[var(--color-navy)]/50">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-8 py-2.5 text-white/70 hover:text-white text-sm border-b border-white/5"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          )}
          {nav.filter((n) => !n.children).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-5 py-3 text-white/80 hover:text-white text-sm font-medium border-b border-white/10"
            >
              {item.label}
            </Link>
          ))}

        </nav>
      )}
    </header>
  )
}
