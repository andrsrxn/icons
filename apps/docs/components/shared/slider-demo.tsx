/** biome-ignore-all lint/style/noMagicNumbers: demo values */
'use client'

import { IconVolumeHigh, IconVolumeLow, IconVolumeSilent } from '@andrsrxn/icons'
import { useState } from 'react'
import { Item, ItemActions, ItemContent, ItemMedia, ItemTitle } from '@/components/ui/item'
import { Slider } from '@/components/ui/slider'
import { cn } from '@/lib/utils'

export const SliderDemo = () => {
  const [value, setValue] = useState<number[]>([50])
  const [currentValue] = value

  const getIcon = () => {
    if (currentValue && currentValue >= 50) {
      return <IconVolumeHigh />
    }

    if (currentValue && currentValue < 50) {
      return <IconVolumeLow />
    }

    return <IconVolumeSilent />
  }

  return (
    <Item variant='outline' aria-hidden>
      <ItemMedia variant='icon' className={cn(currentValue === 0 ? 'text-destructive' : '')}>
        {getIcon()}
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Volume</ItemTitle>
      </ItemContent>
      <ItemActions className='flex-1'>
        {/** biome-ignore lint/performance/noJsxPropsBind: unnecessary */}
        <Slider value={value} onValueChange={v => setValue([v] as number[])} min={0} max={100} />
      </ItemActions>
    </Item>
  )
}
