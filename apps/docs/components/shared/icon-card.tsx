'use client'

import type { IconCatalogEntry, IconCatalogGroup } from '@andrsrxn/raw-icons/types'
import { memo } from 'react'
import { Button } from '@/components/ui/button'
import { ICON_LOOKUP } from '@/lib/constants/icon-lookup'
import { getIconComponentName, isUIIcon } from '@/lib/utils/icons'

interface IconCardProps {
  icon: IconCatalogEntry
  onSelect?: (iconName: string, group: IconCatalogGroup) => void
}

export const IconCard = memo(function IconCard({ icon, onSelect }: IconCardProps) {
  const group = isUIIcon(icon) ? 'ui' : 'flags'
  const componentName = getIconComponentName(icon.n, group)

  const IconComponent = ICON_LOOKUP[componentName as keyof typeof ICON_LOOKUP]

  const handleOpen = () => {
    onSelect?.(icon.n, group)
  }

  return (
    <Button
      variant='outline'
      onClick={handleOpen}
      id={icon.n}
      className='group size-full rounded-xl outline-none flex flex-col gap-2 items-center justify-center p-4 relative'>
      <IconComponent className='size-8' />
      <span className='text-xs text-center w-full truncate block leading-normal'>{icon.n}</span>
      {isUIIcon(icon) && icon.rtl ? (
        <span className='text-xs absolute top-2 right-2 text-primary/50 dark:text-primary/80 rounded-full'>
          RTL
        </span>
      ) : null}
    </Button>
  )
})
