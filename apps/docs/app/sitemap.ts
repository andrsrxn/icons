import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/constants/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.baseUrl,
      lastModified: new Date('2026-09-16'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE.baseUrl}/docs`,
      lastModified: new Date('2026-09-16'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE.baseUrl}/examples`,
      lastModified: new Date('2026-09-16'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}
