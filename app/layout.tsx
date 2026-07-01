import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Barlow_Condensed } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MobileStickyBar } from '@/components/mobile-sticky-bar'
import { ScrollToTop } from '@/components/scroll-to-top'
import { GoogleAnalytics } from '@/components/google-analytics'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['600', '700', '800'],
})

export const metadata: Metadata = {
  title: {
    default: 'Huntsville Moving Service | Family-Owned Movers Since 1992 | (936) 291-7230',
    template: '%s | Huntsville Moving Service',
  },
  description:
    'Huntsville Moving Service — family-owned, licensed & insured movers serving Huntsville, TX and the Sam Houston corridor since 1992. Call (936) 291-7230.',
  metadataBase: new URL('https://www.huntsvillemovingservicetx.com'),
  alternates: {
    canonical: 'https://www.huntsvillemovingservicetx.com',
  },
  openGraph: {
    siteName: 'Huntsville Moving Service',
    locale: 'en_US',
    type: 'website',
    url: 'https://www.huntsvillemovingservicetx.com',
    title: 'Huntsville Moving Service | Family-Owned Movers Since 1992',
    description:
      'Family-owned, licensed & insured movers serving Huntsville, TX and the surrounding area since 1992. Call (936) 291-7230 to talk to James directly.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Huntsville Moving Service — movers loading boxes into a van, serving Huntsville TX since 1992',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Huntsville Moving Service | Family-Owned Since 1992',
    description:
      'Licensed & insured movers in Huntsville, TX. Call James directly at (936) 291-7230. No call centers, no surprises.',
    images: ['/twitter-image'],
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-dark-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/icon.svg',
  },
  robots: { index: true, follow: true },
  generator: 'Next.js',
}

export const viewport: Viewport = {
  themeColor: '#1a2744',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${barlowCondensed.variable} bg-[#f7f5f2]`}>
      <body className="font-sans antialiased">
        <GoogleAnalytics />
        <ScrollToTop />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <MobileStickyBar />
      </body>
    </html>
  )
}
