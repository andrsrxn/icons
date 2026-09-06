/** biome-ignore-all lint/performance/noJsxPropsBind: unnecessary */
'use client'

import { IconSettings } from '@andrsrxn/icons'
import type { IconCatalogEntry } from '@andrsrxn/raw-icons/types'
import { useTheme } from '@teispace/next-themes'
import { type RefObject, useEffect, useState } from 'react'
import { useLocalStorage } from 'react-use'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { ICON_LOOKUP, ICON_STROKE_WIDTH } from '@/lib/constants/icons'
import { cn } from '@/lib/utils'
import { getIconComponentName, isUIIcon } from '@/lib/utils/icons'

export const IconKeylineContainer = ({
  icon,
  containerRef,
}: {
  icon: IconCatalogEntry
  containerRef: RefObject<HTMLDivElement | null>
}) => {
  const { theme } = useTheme()
  const [shouldShowKeyline, setShouldShowKeyline] = useLocalStorage('should-show-keyline', true)
  const [hasRTL, setHasRTL] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [strokeWidth, setStrokeWidth] = useState(ICON_STROKE_WIDTH)
  const [color, setColor] = useState<string>(theme === 'dark' ? 'white' : 'black')

  const keylineURL = 'url(/assets/keyline.svg)'
  const componentName = getIconComponentName(icon.name, icon.group)
  const IconComponent = ICON_LOOKUP[componentName as keyof typeof ICON_LOOKUP]

  function reset() {
    setStrokeWidth(ICON_STROKE_WIDTH)
    setColor('currentColor')
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  const isUI = isUIIcon(icon)

  return (
    <div className='mb-4 flex flex-col gap-4'>
      <div
        ref={containerRef}
        dir={hasRTL ? 'rtl' : 'ltr'}
        suppressHydrationWarning
        className={cn(
          'flex size-60 md:size-72 items-center justify-center bg-card bg-contain border border-transparent! bg-center bg-no-repeat',
          shouldShowKeyline && isUI ? null : 'rounded-lg border-border! shadow-sm'
        )}
        style={{
          backgroundImage: isUI && shouldShowKeyline ? keylineURL : 'none',
        }}>
        <IconComponent color={color} strokeWidth={strokeWidth} className='size-60 md:size-72' />
      </div>

      <div className='flex w-60 md:w-72 h-6 flex-wrap items-center justify-between gap-6'>
        <Popover>
          <PopoverTrigger
            render={
              <Button size='icon-sm' variant='outline'>
                <IconSettings />
              </Button>
            }
          />
          <PopoverContent className='flex flex-col gap-5' side='bottom' align='start'>
            <PopoverHeader className='sr-only'>
              <PopoverTitle>Customize</PopoverTitle>
              <PopoverDescription>
                Change the color and stroke width of the icon.
              </PopoverDescription>
            </PopoverHeader>
            <Label className='flex items-center gap-12'>
              Color
              <Input
                type='color'
                className='h-8 bg-background  cursor-pointer p-1'
                value={color}
                onChange={e => setColor(e.target.value)}
              />
            </Label>
            <Label className='flex items-center gap-12'>
              Stroke
              <Slider
                min={1}
                max={2}
                step={0.5}
                value={[strokeWidth]}
                onValueChange={value => setStrokeWidth(typeof value === 'number' ? value : 0)}
              />
            </Label>
            <Button variant={'secondary'} type='button' size='sm' onClick={reset}>
              Reset styles
            </Button>
          </PopoverContent>
        </Popover>
        {mounted && isUI && (
          <Label className='animate-in fade-in duration-400 ease-in-out'>
            Show keyline{' '}
            <Switch checked={shouldShowKeyline} onCheckedChange={setShouldShowKeyline} />
          </Label>
        )}

        {mounted && isUI && icon.rtl ? (
          <Label className='animate-in fade-in duration-400 ease-in-out'>
            RTL <Switch checked={hasRTL} onCheckedChange={setHasRTL} />
          </Label>
        ) : null}
      </div>
    </div>
  )
}
