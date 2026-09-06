import Link from 'next/link'
import type { ReactNode } from 'react'
import { COMPANY } from '@/lib/constants/company'
import { IMAGES } from '@/lib/constants/media'

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className='flex py-2 items-center justify-center gap-2 border-b bg-card sticky top-0 z-50'>
        <Link href='/' className='flex items-center gap-2' prefetch={false}>
          <img src={IMAGES.brand.symbol.svg} alt={`${COMPANY.name} symbol`} className='size-5' />
          <span className='font-bold text-xl'>{COMPANY.fullName}</span>
        </Link>
      </header>

      <main className='bg-dotted dark:bg-dotted-dark'>{children}</main>
    </>
  )
}
