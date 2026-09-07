'use client'

import { IconSearch, IconX } from '@andrsrxn/icons'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group'

interface InputIconSearchProps {
  value: string
  onChange: (value: string) => void
}

export const InputIconSearch = ({ value, onChange }: InputIconSearchProps) => (
  <InputGroup className='bg-card max-w-md lg:max-w-lg mx-auto'>
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
