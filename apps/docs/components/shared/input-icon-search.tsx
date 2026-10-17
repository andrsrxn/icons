'use client'

import { IconSearch, IconX } from '@andrsrxn/icons'
import { type RefObject, useEffect } from 'react'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group'
import { useIconCatalog } from '@/lib/hooks/use-icon-catalog'

interface InputIconSearchProps {
  value: string
  onChange: (value: string) => void
  containerRef: RefObject<HTMLDivElement | null>
}

export const InputIconSearch = ({ value, onChange, containerRef }: InputIconSearchProps) => {
  const { query } = useIconCatalog()

  // biome-ignore lint/correctness/useExhaustiveDependencies: only on mount
  useEffect(() => {
    if (query && containerRef.current) {
      containerRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }, [])

  return (
    <InputGroup className='bg-card'>
      <InputGroupAddon>
        <IconSearch />
      </InputGroupAddon>
      <InputGroupInput
        aria-label='Search icon'
        placeholder='Search icon...'
        value={value}
        // biome-ignore lint/performance/noJsxPropsBind: unnecessary
        onChange={e => onChange(e.target.value)}
      />
      {value ? (
        <InputGroupAddon align='inline-end'>
          <InputGroupButton
            aria-label='Clear search'
            title='Clear'
            size='icon-xs'
            // biome-ignore lint/performance/noJsxPropsBind: unnecessary
            onClick={() => onChange('')}>
            <IconX className='animate-in fade-in ' />
          </InputGroupButton>
        </InputGroupAddon>
      ) : null}
    </InputGroup>
  )
}
