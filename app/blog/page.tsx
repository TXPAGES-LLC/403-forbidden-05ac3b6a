import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/breadcrumb'

export const metadata: Metadata = {
  title: 'Moving Tips & Resources | Huntsville Moving Inc. Blog',
  description:
    'Moving tips, packing guides, Texas relocation advice, and local moving resources from Huntsville Moving Inc. — family-owned Huntsville, TX movers since 1992.',
  alternates: { canonical: 'https://www.huntsvillemovingservicetx.com/blog' },
  openGraph: {
    title: 'Moving Tips & Resources | Huntsville Moving Inc. Blog',
    description: 'Practical moving guides and Texas relocation advice from a crew that has been doing this for over 30 years.',
    url: 'https://www.huntsvillemovingservicetx.com/blog',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Huntsville Moving Service — movers loading boxes into a van' }],
  },
}

const posts = [
  {
    slug: 'how-to-prepare-for-moving-day',
    title: 'How to Prepare for Moving Day: A Practical Checklist',
    excerpt:
      'The difference between a smooth move and a stressful one usually comes down to preparation. Here is what James recommends doing in the two weeks before your move.',
    date: 'May 12, 2024',
    category: 'Moving Tips',
    readTime: '5 min read',
  },
  {
    slug: 'moving-piano-texas',
    title: 'Everything You Need to Know About Moving a Piano in Texas',
    excerpt:
      'Pianos are heavy, sensitive, and irreplaceable. We have moved hundreds of them across Walker County and beyond. Here is what you should know before your move.',
    date: 'April 3, 2024',
    category: 'Specialty Moving',
    readTime: '6 min read',
  },
  {
    slug: 'huntsville-tx-moving-guide',
    title: 'Moving to Huntsville, TX: A Local\'s Guide to the City',
    excerpt:
      'Relocating to Huntsville? Here is what you need to know about neighborhoods, schools, utilities, and getting settled in Walker County.',
    date: 'March 18, 2024',
    category: 'Local Guide',
    readTime: '8 min read',
  },
  {
    slug: 'packing-tips-fragile-items',
    title: '10 Packing Tips for Fragile Items From a 30-Year Mover',
    excerpt:
      'Dishes, glassware, artwork, and mirrors — here is how to pack them so they arrive intact, whether you are doing it yourself or having us pack for you.',
    date: 'February 27, 2024',
    category: 'Packing Tips',
    readTime: '4 min read',
  },
  {
    slug: 'long-distance-moving-texas',
    title: 'Long-Distance Moving Across Texas: What to Expect',
    excerpt:
      'Moving from Huntsville to Houston, Dallas, Austin, or San Antonio? Here is how we price long-distance Texas moves and what the process looks like from first call to final delivery.',
    date: 'January 15, 2024',
    category: 'Long-Distance Moving',
    readTime: '7 min read',
  },
  {
    slug: 'when-to-hire-labor-only-movers',
    title: 'When Does It Make Sense to Hire Labor-Only Movers?',
    excerpt:
      'You rented a U-Haul. You have a storage pod. You just need bodies. Here is when a labor-only crew is the right move and how to book one.',
    date: 'December 8, 2023',
    category: 'Moving Tips',
    readTime: '4 min read',
  },
]

const categories = ['All', 'Moving Tips', 'Packing Tips', 'Specialty Moving', 'Long-Distance Moving', 'Local Guide']

export default function BlogPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Blog' }]} />

      {/* Hero */}
      <section className="bg-[var(--color-navy)] text-white py-14 lg:py-18 text-center">
        <div className="max-w-3xl mx-auto px-4 lg:px-6">
          <p className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-widest mb-2">Moving Resources</p>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-balance mb-3">
            Moving Tips from Huntsville Moving Inc.
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Practical advice from a family that has been moving Huntsville, TX and Walker County since 1992.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-14 lg:py-20 bg-[var(--color-background)]">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          {/* Category pills — static for SEO, no JS filtering needed */}
          <div className="flex flex-wrap gap-2 mb-10" role="list" aria-label="Blog categories">
            {categories.map((cat) => (
              <span
                key={cat}
                role="listitem"
                className={`px-4 py-1.5 rounded-full text-sm font-medium border ${
                  cat === 'All'
                    ? 'bg-[var(--color-navy)] text-white border-[var(--color-navy)]'
                    : 'bg-white text-[var(--color-muted-foreground)] border-[var(--color-border)] hover:border-[var(--color-navy)] hover:text-[var(--color-navy)]'
                } transition-colors cursor-default`}
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-[var(--color-border)] rounded-lg overflow-hidden hover:shadow-md hover:border-[var(--color-navy-100)] transition-all group"
              >
                {/* Placeholder image */}
                <div
                  className="w-full h-44 bg-[var(--color-muted)] flex items-center justify-center text-[var(--color-muted-foreground)] text-xs font-mono border-b border-[var(--color-border)]"
                  aria-hidden="true"
                >
                  REPLACE WITH ARTICLE IMAGE
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[var(--color-accent)] text-xs font-semibold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-[var(--color-muted-foreground)] text-xs">&middot;</span>
                    <span className="text-[var(--color-muted-foreground)] text-xs">{post.readTime}</span>
                  </div>
                  <h2 className="font-display font-bold text-[var(--color-navy)] text-lg mb-2 leading-snug group-hover:text-[var(--color-accent)] transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[var(--color-muted-foreground)]">{post.date}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
                      aria-label={`Read: ${post.title}`}
                    >
                      Read article &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-navy)] text-white py-12 text-center">
        <p className="font-display text-xl font-bold mb-2">Ready to book your move?</p>
        <a
          href="tel:+19362917230"
          className="font-display text-4xl font-bold text-white hover:text-[var(--color-accent)] transition-colors block my-2"
        >
          (936) 291-7230
        </a>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-5">
          <Link href="/services" className="text-yellow-300 font-semibold text-sm hover:underline">
            View all Huntsville moving services &rarr;
          </Link>
          <span className="hidden sm:block text-white/30">|</span>
          <Link href="/areas-we-serve" className="text-yellow-300 font-semibold text-sm hover:underline">
            Cities &amp; counties we serve &rarr;
          </Link>
          <span className="hidden sm:block text-white/30">|</span>
          <Link href="/contact" className="text-yellow-300 font-semibold text-sm hover:underline">
            Get a free moving estimate &rarr;
          </Link>
        </div>
      </section>
    </>
  )
}
