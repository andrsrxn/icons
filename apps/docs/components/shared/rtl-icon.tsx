'use client'

import { type ReactNode, useState } from 'react'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'

export const RTLIcon = ({ children }: { children: ReactNode }) => {
  const [hasRTL, setHasRTL] = useState(false)

  return (
    <div className='w-max '>
      <div
        dir={hasRTL ? 'rtl' : 'ltr'}
        suppressHydrationWarning
        className={cn(
          'flex size-30 md:size-42 items-center justify-center bg-card bg-contain border rounded-lg bg-center bg-no-repeat [&>svg]:size-30 md:[&>svg]:size-42'
        )}>
        {children}
      </div>
      <div className='justify-center flex items-center mt-3'>
        <Label className='animate-in fade-in duration-400 ease-in-out'>
          RTL <Switch checked={hasRTL} onCheckedChange={setHasRTL} />
        </Label>
      </div>
    </div>
  )
}
