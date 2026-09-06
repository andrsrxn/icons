import { baseMetadata, baseViewport } from '@/lib/constants/metadata'
import '@andrsrxn/icons/styles.css'
import './globals.css'
import { Geist } from 'next/font/google'
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

export default function RootLayout({ children, modal }: LayoutProps<'/'>) {
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
          {children}
          {modal}
          <Footer className='mt-8' />
        </AppProviders>
      </body>
    </html>
  )
}
