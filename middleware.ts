import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PREFERRED_HOST = 'www.huntsvillemovingservicetx.com'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const { hostname, pathname, protocol } = url

  // 1. On production: force HTTPS + preferred www host
  if (
    process.env.NODE_ENV === 'production' &&
    (protocol !== 'https:' || hostname !== PREFERRED_HOST)
  ) {
    url.protocol = 'https:'
    url.host = PREFERRED_HOST
    return NextResponse.redirect(url, { status: 301 })
  }

  // 2. Remove trailing slash from all paths except root "/"
  if (pathname !== '/' && pathname.endsWith('/')) {
    url.pathname = pathname.slice(0, -1)
    return NextResponse.redirect(url, { status: 301 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Run on all routes except Next.js internals and static files
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|xml|txt)).*)',
  ],
}
