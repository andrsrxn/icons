'use client'

import type { IconCatalogEntry } from '@andrsrxn/raw-icons/types'
import { memo } from 'react'
import { Button } from '@/components/ui/button'
import { ICON_LOOKUP } from '@/lib/constants/icon-lookup'
import { useIconCatalog } from '@/lib/hooks/use-icon-catalog'
import { getIconComponentName, isUIIcon } from '@/lib/utils/icons'

interface IconCardProps {
  icon: IconCatalogEntry
  queryString?: string
}

export const IconCard = memo(function IconCard({ icon }: IconCardProps) {
  const { setIconParam, setGroup } = useIconCatalog()

  const group = isUIIcon(icon) ? 'ui' : 'flags'
  const componentName = getIconComponentName(icon.name, group)
  // open on #id

  const IconComponent = ICON_LOOKUP[componentName as keyof typeof ICON_LOOKUP]

  const handleOpen = () => {
    setIconParam(icon.name)
    setGroup(group)
  }

  return (
    <Button
      variant='outline'
      onClick={handleOpen}
      id={icon.name}
      className='group size-full rounded-xl outline-none flex flex-col gap-2 items-center justify-center p-4 relative'>
      <IconComponent className='size-8' />
      <span className='text-xs text-center w-full truncate block leading-normal'>{icon.name}</span>
      {isUIIcon(icon) && icon.rtl ? (
        <span className='text-xs absolute top-2 right-2 text-primary/50 dark:text-primary/80 rounded-full'>
          RTL
        </span>
      ) : null}
    </Button>
  )
})
