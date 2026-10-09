'use client'

import { IconDices } from '@andrsrxn/icons'
import rawCatalog from '@andrsrxn/raw-icons/catalog.json'
import type { IconCatalog } from '@andrsrxn/raw-icons/types'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { isUIIcon } from '@/lib/utils/icons'

const catalog = rawCatalog as IconCatalog

export const ButtonRandomIcon = () => {
  const { push } = useRouter()

  const getRandomIcon = () => {
    const max = catalog.length - 1
    const randomIndex = Math.floor(Math.random() * max)
    const randomIcon = catalog.at(randomIndex)
    if (!randomIcon) {
      return
    }
    const group = isUIIcon(randomIcon) ? 'ui' : 'flags'
    const href = `/${group}/${randomIcon.name}`

    push(href)
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
