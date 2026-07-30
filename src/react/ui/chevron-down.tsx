import type { Icon } from './types'

export const IconChevronDown: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='chevron-down'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m19.576 9-4.664 4.935c-1.363 1.442-2.044 2.162-2.905 2.163-.86 0-1.543-.72-2.906-2.16L4.423 9'
      />
    </svg>
  )
}
