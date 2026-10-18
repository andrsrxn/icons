'use client'

import { IconDices } from '@andrsrxn/icons'
import rawCatalog from '@andrsrxn/raw-icons/catalog.json'
import type { IconCatalog } from '@andrsrxn/raw-icons/types'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { useIconCatalog } from '@/lib/hooks/use-icon-catalog'
import { isUIIcon } from '@/lib/utils/icons'

const catalog = rawCatalog as IconCatalog

export const ButtonRandomIcon = () => {
  const { setIconParam, setGroup, setCategory, setPage, setQuery } = useIconCatalog()

  const getRandomIcon = () => {
    const max = catalog.length - 1
    const randomIndex = Math.floor(Math.random() * max)
    const randomIcon = catalog.at(randomIndex)
    if (!randomIcon) {
      return
    }
    setCategory(null)
    setPage(1)
    setQuery('')

    setIconParam(randomIcon.name)
    setGroup(isUIIcon(randomIcon) ? 'ui' : 'flags')
  }

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button variant='outline' size='icon' onClick={getRandomIcon}>
            <IconDices className='size-5' />
          </Button>
        }
      />
      <TooltipContent>Get a random icon</TooltipContent>
    </Tooltip>
  )
}
