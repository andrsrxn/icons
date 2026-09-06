'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ICON_CATEGORIES } from '@/lib/constants/icons'
import { capitalize, cn } from '@/lib/utils'

// Built once at module load instead of on every render of the component.
const CATEGORY_OPTIONS = [
  { label: 'All categories', value: null as string | null },
  ...ICON_CATEGORIES.map(category => ({ label: capitalize(category), value: category })),
]

interface SelectIconCategoryProps {
  value: string | null
  onChange: (value: string | null) => void
  className?: string
}

export const SelectIconCategory = ({ value, onChange, className }: SelectIconCategoryProps) => (
  <Select items={CATEGORY_OPTIONS} value={value} onValueChange={onChange}>
    <SelectTrigger
      aria-label='Choose category'
      className={cn(className, 'w-full bg-card max-w-md lg:max-w-lg mx-auto')}>
      <SelectValue />
    </SelectTrigger>
    <SelectContent>
      {CATEGORY_OPTIONS.map(option => (
        <SelectItem key={option.value ?? 'all'} value={option.value} label={option.label}>
          {option.label}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
)
