import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/constants/site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/terms', '/privacy'],
    },
    sitemap: `${SITE.baseUrl}/sitemap.xml`,
  }
}
