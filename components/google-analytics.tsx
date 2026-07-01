'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, Suspense } from 'react'

export const GA_MEASUREMENT_ID = 'G-Q7PFQ8YBK8'

// ---------------------------------------------------------------------------
// Typed gtag helper — call this from any client component to fire events.
// Usage: gtagEvent('phone_call_click', { location: 'header' })
// ---------------------------------------------------------------------------
export function gtagEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === 'undefined') return
  if (!('gtag' in window)) return
  ;(window as typeof window & { gtag: (...args: unknown[]) => void }).gtag(
    'event',
    eventName,
    params
  )
}

// ---------------------------------------------------------------------------
// Inner component — must be inside <Suspense> because useSearchParams() opts
// the whole segment into client-side rendering.
// ---------------------------------------------------------------------------
function RouteChangeTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!('gtag' in window)) return
    const url =
      pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '')
    ;(window as typeof window & { gtag: (...args: unknown[]) => void }).gtag(
      'config',
      GA_MEASUREMENT_ID,
      { page_path: url }
    )
  }, [pathname, searchParams])

  return null
}

// ---------------------------------------------------------------------------
// Global click delegation — fires GA4 events for every phone call tap,
// SMS tap, and Google Maps outbound click anywhere on the page without
// requiring per-component onChange wiring.
// ---------------------------------------------------------------------------
function ConversionDelegator() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest('a')
      if (!target) return
      const href = target.getAttribute('href') ?? ''

      if (href.startsWith('tel:')) {
        // Determine where the click came from for segmentation
        const location =
          target.closest('[data-gtag-location]')?.getAttribute('data-gtag-location') ??
          (target.closest('header') ? 'header' :
           target.closest('footer') ? 'footer' :
           target.closest('[role="complementary"]') ? 'mobile_sticky_bar' :
           'page_body')
        gtagEvent('phone_call_click', {
          event_category: 'conversion',
          event_label: location,
          value: 1,
        })
      } else if (href.startsWith('sms:')) {
        const location =
          target.closest('header') ? 'header' :
          target.closest('footer') ? 'footer' :
          target.closest('[role="complementary"]') ? 'mobile_sticky_bar' :
          'page_body'
        gtagEvent('sms_click', {
          event_category: 'conversion',
          event_label: location,
        })
      } else if (href.includes('maps.google.com') || href.includes('google.com/maps')) {
        gtagEvent('directions_click', {
          event_category: 'engagement',
          event_label: 'google_maps',
        })
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}

// ---------------------------------------------------------------------------
// Main export — rendered once in layout.tsx inside <body>
// ---------------------------------------------------------------------------
export function GoogleAnalytics() {
  if (process.env.NODE_ENV !== 'production') return null

  return (
    <>
      {/* 1. Load the gtag.js library — deferred until after hydration */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />

      {/* 2. Bootstrap dataLayer and configure the GA4 property.
             send_page_view: true fires the initial pageview on hard load.
             Route-change pageviews are handled by RouteChangeTracker below. */}
      <Script id="ga4-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}', {
          send_page_view: true
        });
      `}</Script>

      {/* 3. SPA route-change pageview tracker */}
      <Suspense fallback={null}>
        <RouteChangeTracker />
      </Suspense>

      {/* 4. Global conversion event delegation — no per-component wiring needed */}
      <ConversionDelegator />
    </>
  )
}
