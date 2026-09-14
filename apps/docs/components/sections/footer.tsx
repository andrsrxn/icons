import Link from 'next/link'
import type { ComponentProps } from 'react'
import { ThemeToggle } from '@/components/shared/theme-toggle'
import { COMPANY } from '@/lib/constants/company'
import { cn } from '@/lib/utils'

export const Footer = ({ className, ...props }: ComponentProps<'footer'>) => {
  return (
    <footer className={cn('w-full py-8 overflow-hidden', className)} {...props}>
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
        <nav>
          <ul className='flex items-center justify-center flex-wrap mt-4 gap-x-4 gap-y-2'>
            <li>
              <Link
                className='text-muted-foreground hover:underline decoration-1 underline-offset-2 text-sm hover:text-foreground'
                prefetch={false}
                href='/docs'>
                Documentation
              </Link>
            </li>
            <li>
              <Link
                className='text-muted-foreground hover:underline decoration-1 underline-offset-2 text-sm hover:text-foreground'
                prefetch={false}
                href='/examples'>
                Examples
              </Link>
            </li>
            <li>
              <Link
                className='text-muted-foreground hover:underline decoration-1 underline-offset-2 text-sm hover:text-foreground'
                prefetch={false}
                href='/privacy'>
                Privacy
              </Link>
            </li>
            <li>
              <Link
                className='text-muted-foreground hover:underline decoration-1 underline-offset-2 text-sm hover:text-foreground'
                prefetch={false}
                target='_blank'
                rel='noopener noreferrer'
                href={COMPANY.repo.licenceUrl}>
                Licence
              </Link>
            </li>
            <li>
              <Link
                className='text-muted-foreground hover:underline decoration-1 underline-offset-2 text-sm hover:text-foreground'
                prefetch={false}
                target='_blank'
                rel='noopener noreferrer'
                href={COMPANY.repo.npm}>
                npm
              </Link>
            </li>
            <li>
              <Link
                className='text-muted-foreground hover:underline decoration-1 underline-offset-2 text-sm hover:text-foreground'
                prefetch={false}
                target='_blank'
                rel='noopener noreferrer'
                href={COMPANY.repo.url}>
                GitHub
              </Link>
            </li>

            <ThemeToggle className='w-fit' />
          </ul>
        </nav>
      </div>
    </footer>
  )
}
