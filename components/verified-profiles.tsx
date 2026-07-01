const profiles = [
  {
    label: 'Google Business',
    description: 'Read our reviews and get directions on Google Maps.',
    href: 'https://maps.google.com/?cid=8089976357722667618',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true" fill="currentColor">
        <path d="M21.805 10.023H12v3.954h5.618c-.242 1.301-1.004 2.404-2.138 3.146v2.611h3.46c2.026-1.867 3.196-4.617 3.196-7.872 0-.54-.046-1.063-.131-1.839z" fill="#4285F4"/>
        <path d="M12 22c2.7 0 4.963-.895 6.62-2.427l-3.461-2.61c-.907.61-2.07.97-3.159.97-2.43 0-4.49-1.64-5.228-3.845H3.19v2.687A10 10 0 0 0 12 22z" fill="#34A853"/>
        <path d="M6.772 13.088A5.97 5.97 0 0 1 6.46 12c0-.374.066-.737.312-1.088V8.225H3.19A10 10 0 0 0 2 12c0 1.614.386 3.14 1.19 4.775l3.582-2.687z" fill="#FBBC05"/>
        <path d="M12 6.058c1.368 0 2.596.47 3.565 1.392l2.67-2.67C16.961 3.245 14.697 2 12 2A10 10 0 0 0 3.19 7.225l3.582 2.687C7.51 7.698 9.57 6.058 12 6.058z" fill="#EA4335"/>
      </svg>
    ),
  },
  {
    label: 'Yelp',
    description: 'See our Yelp business listing and customer feedback.',
    href: 'https://www.yelp.com/biz/huntsville-moving-huntsville',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true" fill="#D32323">
        <path d="M12.23 11.82c-.3-.16-.35-.52-.1-.76l4.08-4.08a.52.52 0 0 1 .75.05c1.18 1.44 1.9 3.24 1.95 5.2a.52.52 0 0 1-.5.54l-5.65.3a.52.52 0 0 1-.53-.25zM11.03 10.6c.05.34-.22.63-.56.61L4.8 10.9a.52.52 0 0 1-.48-.63 8.04 8.04 0 0 1 3.9-5.33.52.52 0 0 1 .74.26l2.1 4.9c.07.17.04.36-.03.5zm-.64 3.26c.17.3.06.68-.26.82l-5.17 2.17a.52.52 0 0 1-.68-.34 8.04 8.04 0 0 1-.13-4.27.52.52 0 0 1 .63-.38l5.36 1.4c.13.03.23.12.25.2v.4zm1.93 1.1c-.28-.2-.29-.59-.03-.8l4.4-3.6a.52.52 0 0 1 .76.1c.76 1.2 1.13 2.63 1.01 4.1a.52.52 0 0 1-.6.47l-5.3-.95a.52.52 0 0 1-.24-.32zm-1.5 1.04c.34.05.54.4.41.72l-1.98 5.1a.52.52 0 0 1-.72.27 8.04 8.04 0 0 1-3.43-3.6.52.52 0 0 1 .27-.7l5.1-1.88c.12-.04.26-.04.35.09z"/>
      </svg>
    ),
  },
  {
    label: 'BubbleLife Directory',
    description: 'Verified local business listing in the BubbleLife community directory.',
    href: 'http://directory.bubblelife.com/listing/3515297870/Huntsville_Moving_Inc',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
]

export function VerifiedProfiles({ compact = false }: { compact?: boolean }) {
  return (
    <section
      aria-labelledby="verified-profiles-heading"
      className={compact ? 'py-10 bg-[var(--color-muted)] border-t border-[var(--color-border)]' : 'py-14 lg:py-18 bg-[var(--color-muted)] border-y border-[var(--color-border)]'}
    >
      <div className="max-w-5xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-8">
          <p className="text-[var(--color-accent)] text-xs font-semibold uppercase tracking-widest mb-1">
            Independently Verified
          </p>
          <h2
            id="verified-profiles-heading"
            className="font-display text-2xl lg:text-3xl font-bold text-[var(--color-navy)]"
          >
            Verified Business Profiles
          </h2>
          <p className="text-[var(--color-muted-foreground)] text-sm mt-2 max-w-md mx-auto">
            4.6 stars across 26 Google reviews. These are our only official profiles — if you see Huntsville Moving listed elsewhere, these three are the ones we control.
          </p>
        </div>

        <div className={`grid gap-4 ${compact ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-1 sm:grid-cols-3'}`}>
          {profiles.map((p) => (
            <a
              key={p.label}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center bg-white border border-[var(--color-border)] rounded-lg p-6 hover:border-[var(--color-navy)] hover:shadow-md transition-all"
            >
              <span className="w-12 h-12 rounded-full bg-[var(--color-warm-gray)] flex items-center justify-center mb-3 text-[var(--color-navy)] group-hover:bg-[var(--color-navy)] group-hover:text-white transition-colors">
                {p.icon}
              </span>
              <span className="font-display font-bold text-[var(--color-navy)] text-base mb-1 group-hover:text-[var(--color-accent)] transition-colors">
                {p.label}
              </span>
              <span className="text-[var(--color-muted-foreground)] text-xs leading-relaxed">
                {p.description}
              </span>
              <span className="mt-3 text-xs font-semibold text-[var(--color-accent)] group-hover:underline">
                View profile &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
