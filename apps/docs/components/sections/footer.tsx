import Link from 'next/link'
import type { ComponentProps } from 'react'
import { ThemeToggle } from '@/components/shared/theme-toggle'
import { COMPANY } from '@/lib/constants/company'
import { cn } from '@/lib/utils'

export const Footer = ({ className, ...props }: ComponentProps<'footer'>) => {
  return (
    <footer className={cn('w-full py-4 overflow-hidden', className)} {...props}>
      <div className='wrapper max-w-7xl relative flex flex-col items-center justify-center gap-2 md:block'>
        <p className='text-muted-foreground text-center text-sm'>
          Designed and developed by{' '}
          <Link
            href={COMPANY.author.url}
            target='_blank'
            rel='noopener noreferrer'
            className='text-foreground font-medium hover:underline decoration-1 underline-offset-2'>
            {COMPANY.author.name} ({COMPANY.author.commercialName})
          </Link>
        </p>
        <ThemeToggle className='md:absolute md:right-0 md:bottom-0 w-fit' />
      </div>
    </footer>
  )
}
