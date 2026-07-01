import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Homepage
    {
      url: 'https://www.huntsvillemovingservicetx.com',
      lastModified: new Date('2025-07-01'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    // Core service pages
    {
      url: 'https://www.huntsvillemovingservicetx.com/services',
      lastModified: new Date('2025-07-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.huntsvillemovingservicetx.com/local-movers',
      lastModified: new Date('2025-07-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.huntsvillemovingservicetx.com/home-apartment-moves',
      lastModified: new Date('2025-07-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.huntsvillemovingservicetx.com/long-distance-moving',
      lastModified: new Date('2025-07-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.huntsvillemovingservicetx.com/packing-unpacking',
      lastModified: new Date('2025-07-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.huntsvillemovingservicetx.com/labor-only',
      lastModified: new Date('2025-07-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.huntsvillemovingservicetx.com/office-commercial-moves',
      lastModified: new Date('2025-07-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.huntsvillemovingservicetx.com/specialty-moving',
      lastModified: new Date('2025-07-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Area hub + city pages
    {
      url: 'https://www.huntsvillemovingservicetx.com/areas-we-serve',
      lastModified: new Date('2025-07-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.huntsvillemovingservicetx.com/areas/huntsville',
      lastModified: new Date('2025-07-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.huntsvillemovingservicetx.com/areas/bryan',
      lastModified: new Date('2025-07-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.huntsvillemovingservicetx.com/areas/college-station',
      lastModified: new Date('2025-07-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.huntsvillemovingservicetx.com/areas/conroe',
      lastModified: new Date('2025-07-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.huntsvillemovingservicetx.com/areas/livingston',
      lastModified: new Date('2025-07-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.huntsvillemovingservicetx.com/areas/madisonville',
      lastModified: new Date('2025-07-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.huntsvillemovingservicetx.com/areas/navasota',
      lastModified: new Date('2025-07-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.huntsvillemovingservicetx.com/areas/the-woodlands',
      lastModified: new Date('2025-07-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.huntsvillemovingservicetx.com/areas/trinity',
      lastModified: new Date('2025-07-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.huntsvillemovingservicetx.com/areas/willis',
      lastModified: new Date('2025-07-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Trust / info pages
    {
      url: 'https://www.huntsvillemovingservicetx.com/reviews',
      lastModified: new Date('2025-07-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.huntsvillemovingservicetx.com/about',
      lastModified: new Date('2025-07-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.huntsvillemovingservicetx.com/contact',
      lastModified: new Date('2025-07-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.huntsvillemovingservicetx.com/faqs',
      lastModified: new Date('2025-07-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Blog index
    {
      url: 'https://www.huntsvillemovingservicetx.com/blog',
      lastModified: new Date('2025-07-01'),
      changeFrequency: 'weekly',
      priority: 0.6,
    },

    // Blog posts
    {
      url: 'https://www.huntsvillemovingservicetx.com/blog/how-to-prepare-for-moving-day',
      lastModified: new Date('2024-05-12'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://www.huntsvillemovingservicetx.com/blog/moving-piano-texas',
      lastModified: new Date('2024-04-03'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://www.huntsvillemovingservicetx.com/blog/huntsville-tx-moving-guide',
      lastModified: new Date('2024-03-18'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://www.huntsvillemovingservicetx.com/blog/packing-tips-fragile-items',
      lastModified: new Date('2024-02-27'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://www.huntsvillemovingservicetx.com/blog/long-distance-moving-texas',
      lastModified: new Date('2024-01-15'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://www.huntsvillemovingservicetx.com/blog/when-to-hire-labor-only-movers',
      lastModified: new Date('2023-12-08'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}
