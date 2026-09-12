import { baseMetadata, baseViewport } from '@/lib/constants/metadata'
import '@andrsrxn/icons/rtl.css'
import './globals.css'
import { Geist } from 'next/font/google'
import { type ReactNode, Suspense } from 'react'
import { preconnect } from 'react-dom'
import { AppProviders } from '@/components/providers/providers'
import { Footer } from '@/components/sections/footer'
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

export default function RootLayout({ children, modal }: { children: ReactNode; modal: ReactNode }) {
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
          {modal}
          <Footer className='mt-8' />
        </AppProviders>
      </body>
    </html>
  )
}
