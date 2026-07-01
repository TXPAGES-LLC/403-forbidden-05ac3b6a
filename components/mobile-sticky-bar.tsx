export function MobileStickyBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden flex items-stretch shadow-[0_-4px_16px_rgba(0,0,0,0.18)]"
      role="complementary"
      aria-label="Quick contact bar"
    >
      <a
        href="tel:+19362917230"
        className="flex-1 bg-[var(--color-accent)] text-white font-display font-bold text-base flex items-center justify-center py-3.5 gap-2 hover:bg-[var(--color-accent-hover)] transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        Call (936) 291-7230
      </a>
      <a
        href="sms:+19362917230"
        className="bg-[var(--color-navy)] text-white font-semibold text-sm flex items-center justify-center gap-1.5 px-5 py-3.5 border-l border-white/20 hover:bg-[var(--color-navy-800,#1a2e47)] transition-colors"
        aria-label="Text us at (936) 291-7230"
      >
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        <span>Text Us</span>
      </a>

    </div>
  )
}
