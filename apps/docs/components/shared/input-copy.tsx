'use client'

import type { ComponentProps } from 'react'
import { ButtonCopy } from '@/components/shared/button-copy'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group'
import { cn } from '@/lib/utils'

export const InputCopy = ({
  value,
  className,
  ...props
}: { value: string } & ComponentProps<typeof InputGroup>) => {
  return (
    <InputGroup className={cn('bg-card', className)} {...props}>
      <InputGroupInput className='h-9 px-3' value={value} readOnly />
      <InputGroupAddon align='inline-end'>
        <InputGroupButton
          render={
            <ButtonCopy
              aria-label='Copy command'
              title='Copy'
              variant='ghost'
              size='icon-xs'
              value={value}
            />
          }
        />
      </InputGroupAddon>
    </InputGroup>
  )
}
// drawer with card intercepting modela, icon page, docs, dropdown filter with color, stroke y zise
