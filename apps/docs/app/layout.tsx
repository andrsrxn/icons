import '@andrsrxn/icons/rtl.css'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import { Geist } from 'next/font/google'
import { type ReactNode, Suspense } from 'react'
import { preconnect } from 'react-dom'
import { AppProviders } from '@/components/providers/providers'
import { Footer } from '@/components/sections/footer'
import { DrawerIcon } from '@/components/shared/drawer-icon'
import { env } from '@/lib/config/env'
import { baseMetadata, baseViewport } from '@/lib/constants/metadata'
import { structuredData } from '@/lib/constants/structured-data'
import { cn } from '@/lib/utils'

const fontSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: 'variable',
  preload: true,
  style: 'normal',
})

export const metadata = baseMetadata
export const viewport = baseViewport

export const dynamic = 'force-static'

export default function RootLayout({ children }: { children: ReactNode }) {
  preconnect('https://res.cloudinary.com', {
    crossOrigin: 'anonymous',
  })

  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={cn('h-full antialiased font-sans', fontSans.variable)}>
      <body className='min-h-full relative'>
        <AppProviders>
          <Suspense fallback={<div className='min-h-dvh' />}>{children}</Suspense>

          <Footer className='mt-8' />

          <DrawerIcon />
        </AppProviders>
        <script
          type='application/ld+json'
          // biome-ignore lint/security/noDangerouslySetInnerHtml: jsonLd is safe
          dangerouslySetInnerHTML={{
            // biome-ignore lint/style/useNamingConvention: react api
            __html: JSON.stringify(structuredData).replace(/</gu, '\\u003c'),
          }}
        />
        {env.NODE_ENV === 'production' ? <Analytics /> : null}
      </body>
    </html>
  )
}
