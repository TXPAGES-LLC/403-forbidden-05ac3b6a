interface TrustStripProps {
  reviewCount?: number
  rating?: number
}

export function TrustStrip({ reviewCount = 26, rating = 4.6 }: TrustStripProps) {
  const stars = Math.round(rating)

  return (
    <div className="bg-[var(--color-navy)] text-white py-3 overflow-x-auto">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <ul className="flex flex-nowrap items-center gap-4 lg:gap-8 text-xs lg:text-sm min-w-max mx-auto lg:justify-center">
          {/* Google rating */}
          <li className="flex items-center gap-1.5">
            <span className="flex text-yellow-400" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className={`w-3.5 h-3.5 ${i < stars ? 'fill-current' : 'fill-white/20'}`} viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.376-2.455a1 1 0 00-1.175 0l-3.376 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69L9.049 2.927z" />
                </svg>
              ))}
            </span>
            <a
              href="https://maps.google.com/?cid=8089976357722667618"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-yellow-300 transition-colors"
              aria-label={`${rating} stars — ${reviewCount} Google reviews`}
            >
              {rating} ({reviewCount} Google Reviews)
            </a>
          </li>

          <li className="h-4 w-px bg-white/25" aria-hidden="true" />

          <li className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Licensed &amp; Insured</span>
          </li>

          <li className="h-4 w-px bg-white/25" aria-hidden="true" />

          <li className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Bonded</span>
          </li>

          <li className="h-4 w-px bg-white/25" aria-hidden="true" />

          <li className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="font-semibold">Family-Owned Since 1992</span>
          </li>

          <li className="h-4 w-px bg-white/25" aria-hidden="true" />

          <li className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-semibold">30+ Years Serving Texas</span>
          </li>

          <li className="h-4 w-px bg-white/25" aria-hidden="true" />

          <li className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>No Deposit Required</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
