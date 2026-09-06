import type { MetadataRoute } from 'next'
import { COMPANY } from '@/lib/constants/company'
import { IMAGES } from '@/lib/constants/media'
import { SITE } from '@/lib/constants/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: COMPANY.fullName,
    short_name: COMPANY.name,
    description: COMPANY.description,
    start_url: '/',
    display: 'standalone',
    background_color: COMPANY.brand.backgroundColor,
    theme_color: COMPANY.brand.primaryColor,
    scope: SITE.baseUrl,
    icons: [
      {
        src: IMAGES.brand.webAppManifest192.png,
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: IMAGES.brand.webAppManifest512.png,
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
