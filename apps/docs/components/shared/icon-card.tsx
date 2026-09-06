import type { IconCatalogEntry } from '@andrsrxn/raw-icons/types'
import Link from 'next/link'
import { memo } from 'react'
import { Card } from '@/components/ui/card'
import { ICON_LOOKUP } from '@/lib/constants/icons'
import { getIconComponentName, isUIIcon } from '@/lib/utils/icons'

interface IconCardProps {
  icon: IconCatalogEntry
  queryString?: string
}

export const IconCard = memo(function IconCard({ icon, queryString }: IconCardProps) {
  const componentName = getIconComponentName(icon.name, icon.group)

  const IconComponent = ICON_LOOKUP[componentName as keyof typeof ICON_LOOKUP]

  const href = `/${icon.group}/${icon.name}${queryString ? `?${queryString}` : ''}`

  return (
    <Link
      href={href}
      prefetch={false}
      className='group rounded-xl focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 outline-none'>
      <Card className='flex flex-col gap-2 items-center justify-center p-4 relative group-hover:ring-primary transition-colors!'>
        <IconComponent className='size-8' />
        <span className='text-xs text-center w-full truncate block leading-normal'>
          {icon.name}
        </span>
        {isUIIcon(icon) && icon.rtl ? (
          <span className='text-xs absolute top-2 right-2 text-primary/50 dark:text-primary/80 rounded-full'>
            RTL
          </span>
        ) : null}
      </Card>
    </Link>
  )
})
