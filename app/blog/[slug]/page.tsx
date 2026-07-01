import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/breadcrumb'

const posts: Record<string, { title: string; date: string; category: string; body: string }> = {
  'how-to-prepare-for-moving-day': {
    title: 'How to Prepare for Moving Day: A Practical Checklist',
    date: 'May 12, 2024',
    category: 'Moving Tips',
    body: `Two weeks before your move, start by decluttering — donate, sell, or discard anything you have not used in a year. Fewer items mean a faster move and a lower bill. Begin packing non-essential rooms first: guest bedrooms, storage areas, seasonal items, books.

One week out, confirm your move date and start time with James at (936) 291-7230. Pack a "first night" box for each family member — bedding, a change of clothes, toiletries, phone chargers, and snacks. Label every box with the destination room and a brief contents note.

The night before, disassemble furniture you can manage (bed frames, desks), bundle cords and label them, and set aside anything that travels in your personal vehicle (medications, valuables, important documents).

Move morning: clear a path from each room to the front door, prop open doors, and lay down any floor protection you have. The crew will handle the rest.`,
  },
  'moving-piano-texas': {
    title: 'Everything You Need to Know About Moving a Piano in Texas',
    date: 'April 3, 2024',
    category: 'Specialty Moving',
    body: `Pianos are among the most challenging items to move. A standard upright weighs between 400 and 900 pounds. A baby grand, once disassembled, requires at least three experienced movers and specialized equipment including a piano board, heavy-duty straps, and furniture dollies rated for the weight.

The biggest mistake homeowners make is hiring a general moving company that has never moved a piano. A piano that tips during loading can injure a mover and destroy an instrument worth thousands of dollars. Always ask specifically: how many pianos have you moved this year?

We move upright pianos, spinet pianos, console pianos, baby grands, and full concert grands. Before we quote a piano move, James asks: what type, where is it located (first floor, upstairs, basement), and what are the access conditions at origin and destination. That information sets the crew size and equipment.

If you are moving a piano in Huntsville or anywhere in our service area, call (936) 291-7230. Do not risk it.`,
  },
  'huntsville-tx-moving-guide': {
    title: "Moving to Huntsville, TX: A Local's Guide to the City",
    date: 'March 18, 2024',
    category: 'Local Guide',
    body: `Huntsville, Texas — population around 46,000 — is the county seat of Walker County and home to Sam Houston State University. It sits on I-45 about 70 miles north of Houston, making it an increasingly popular choice for people who want small-city living within commuting distance of the Houston metro.

Neighborhoods: the historic downtown and areas around Sam Houston State skew toward rentals and older homes. North of downtown along Highway 75 and the I-45 corridor offer newer subdivisions. The Elkins Lake community is a private residential development with a golf course popular with retirees.

Utilities: Huntsville utilities are managed through the City of Huntsville. Set up electric, water, and trash service through the city utilities department before move-in day.

Schools: Huntsville Independent School District serves most of Walker County. Sam Houston State University is the dominant higher-education presence.

If you are moving to Huntsville from anywhere in Texas, give us a call at (936) 291-7230. We know every neighborhood and can make your transition smooth.`,
  },
  'packing-tips-fragile-items': {
    title: '10 Packing Tips for Fragile Items From a 30-Year Mover',
    date: 'February 27, 2024',
    category: 'Packing Tips',
    body: `1. Use dish-pack boxes (double-wall) for dishes, glasses, and ceramics — never standard boxes.
2. Wrap each item individually in packing paper. Newspaper leaves ink residue.
3. Stand plates vertically in boxes — they are far less likely to break standing on edge than flat.
4. Fill every box completely. Half-empty boxes collapse under weight.
5. Pad the bottom and top of every box with crumpled paper or foam.
6. Never pack heavy items in large boxes — you will not be able to lift them and they are more likely to fail.
7. Label every fragile box on all four sides and the top, not just one side.
8. Pack framed artwork and mirrors in mirror boxes, corner-protected, with kraft paper between the glass and frame.
9. For electronics, original boxes are ideal. If not available, use anti-static bubble wrap and pack snugly.
10. When in doubt, let us pack it. Our crews pack fragile items every week — it takes less time than you think and costs less than replacing something irreplaceable.

Call (936) 291-7230 to ask about our packing services.`,
  },
  'long-distance-moving-texas': {
    title: 'Long-Distance Moving Across Texas: What to Expect',
    date: 'January 15, 2024',
    category: 'Long-Distance Moving',
    body: `A long-distance move within Texas — generally defined as moving more than 50 miles — is priced differently from a local move. Rather than an hourly rate, you will typically receive a quote based on the weight or cubic footage of your belongings plus the mileage.

Here is what the process looks like with Huntsville Moving Inc.:

1. Call James at (936) 291-7230. Describe your move — origin city, destination city, rough size of your home, and whether you need packing services.
2. James will either schedule an in-person walk-through (for larger moves) or work through a detailed phone inventory. You will get a written estimate.
3. On move day, the crew arrives, loads your belongings in a dedicated truck (your stuff does not mix with another family's), and drives to your destination.
4. At delivery, we unload and place furniture where you want it.

We are a licensed Texas carrier — not a broker. That means your move stays with us from start to finish.`,
  },
  'when-to-hire-labor-only-movers': {
    title: 'When Does It Make Sense to Hire Labor-Only Movers?',
    date: 'December 8, 2023',
    category: 'Moving Tips',
    body: `Labor-only moving — where you provide the truck and we provide the crew — makes economic sense in several common situations.

You rented a truck. U-Haul, Penske, and Budget are all significantly cheaper than a full-service move for people who do not mind driving. But loading a truck correctly is harder than it looks. Improper loading leads to damage in transit. A two-person crew from us can load a 3-bedroom home in 3-4 hours and do it right.

You have a PODS or portable container. These are popular for staged moves or when your new home is not ready yet. We load it at your origin. When it arrives at the destination, we can unload it. You never have to lift anything.

You are moving just a few heavy items. Getting a couch down a flight of stairs or moving a gun safe across a house is not worth injuring yourself. We will handle the heavy items only.

To book a labor-only crew in Huntsville, call (936) 291-7230.`,
  },
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug]
  if (!post) return { title: 'Post Not Found' }
  return {
    title: post.title,
    description: post.body.slice(0, 160),
    alternates: { canonical: `https://www.huntsvillemovingservicetx.com/blog/${slug}` },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts[slug]

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="font-display text-3xl font-bold text-[var(--color-navy)] mb-4">Post Not Found</h1>
        <Link href="/blog" className="text-[var(--color-accent)] hover:underline">
          &larr; Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <>
      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} />

      <section className="bg-[var(--color-navy)] text-white py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 lg:px-6">
          <p className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-widest mb-2">
            {post.category}
          </p>
          <h1 className="font-display text-3xl lg:text-4xl font-bold text-balance mb-3 leading-tight">
            {post.title}
          </h1>
          <p className="text-white/50 text-sm">{post.date} &middot; Huntsville Moving Inc.</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <div
          className="w-full h-52 bg-[var(--color-muted)] rounded-lg flex items-center justify-center text-[var(--color-muted-foreground)] text-xs font-mono mb-10 border border-[var(--color-border)]"
          aria-hidden="true"
        >
          REPLACE WITH ARTICLE IMAGE
        </div>

        <div className="prose prose-lg max-w-none text-[var(--color-muted-foreground)] [&_h2]:font-display [&_h2]:text-[var(--color-navy)]">
          {post.body.split('\n\n').map((para, i) => (
            <p key={i} className="mb-5 leading-relaxed whitespace-pre-line">{para}</p>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
          <p className="font-display text-xl font-bold text-[var(--color-navy)] mb-2">
            Ready to book your move?
          </p>
          <a
            href="tel:+19362917230"
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-display font-bold px-8 py-4 rounded text-xl transition-colors mb-3"
          >
            Call (936) 291-7230
          </a>

        </div>

        <div className="mt-6">
          <Link href="/blog" className="text-[var(--color-accent)] text-sm font-semibold hover:underline">
            &larr; Back to all posts
          </Link>
        </div>
      </article>
    </>
  )
}
