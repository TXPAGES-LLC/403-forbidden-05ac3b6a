import Link from 'next/link'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const all = [{ label: 'Home', href: '/' }, ...items]

  return (
    <nav aria-label="Breadcrumb" className="py-3 bg-[var(--color-warm-gray)]">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <ol
          className="flex flex-wrap items-center gap-1.5 text-sm text-[var(--color-muted-foreground)]"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {all.map((item, index) => {
            const isLast = index === all.length - 1
            return (
              <li
                key={index}
                className="flex items-center gap-1.5"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {!isLast && item.href ? (
                  <Link
                    href={item.href}
                    itemProp="item"
                    className="hover:text-[var(--color-navy)] transition-colors"
                  >
                    <span itemProp="name">{item.label}</span>
                  </Link>
                ) : (
                  <span
                    itemProp="name"
                    className="text-[var(--color-navy)] font-medium"
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.label}
                  </span>
                )}
                <meta itemProp="position" content={String(index + 1)} />
                {!isLast && (
                  <svg className="w-3.5 h-3.5 text-[var(--color-mid-gray,#9ca3af)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}
