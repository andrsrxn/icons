'use client'

import { IconHelp } from '@andrsrxn/icons'
import type { IconCatalogEntry } from '@andrsrxn/raw-icons/types'
import { useSearchParams } from 'next/navigation'
import { IconCard } from '@/components/shared/icon-card'
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'
import { COMPANY } from '@/lib/constants/company'
import { cn } from '@/lib/utils'

export interface IconGridListProps {
  icons: IconCatalogEntry[]
  emptyTitle?: string
  className?: string
}

/**
 * Renders the current page of icons, or an empty state. Both the "ui" and
 * "flags" tabs use this same component - previously each tab duplicated
 * this markup (and re-filtered `pageItems` by group a second time, even
 * though the source list was already filtered by group upstream).
 */
export const IconGridList = ({
  icons,
  emptyTitle = 'No result found',
  className,
}: IconGridListProps) => {
  const searchParams = useSearchParams()
  const queryString = searchParams.toString()

  if (icons.length === 0) {
    return (
      <Empty className={'h-full bg-muted py-8 lg:col-span-4 xl:col-span-6 lg:h-72 md:py-16'}>
        <EmptyHeader>
          <EmptyMedia variant='icon'>
            <IconHelp />
          </EmptyMedia>
          <EmptyTitle>{emptyTitle}</EmptyTitle>
          <EmptyDescription className='max-w-xs text-pretty'>
            Try with another search term or ask for an specific icon on{' '}
            <a className='text-foreground font-medium' href={COMPANY.repo.issues}>
              GitHub
            </a>
            .
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    )
  }

  return (
    <div
      className={cn('grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] h-max gap-4', className)}>
      {icons.map(icon => (
        <IconCard queryString={queryString} icon={icon} key={icon.name} />
      ))}
    </div>
  )
}
