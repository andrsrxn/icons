import type { Icon } from './types'

export const IconChevronLeft: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='chevron-left'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m14.956 19.576-4.935-4.664c-1.442-1.363-2.162-2.044-2.163-2.905 0-.86.72-1.543 2.16-2.906l4.938-4.678'
      />
    </svg>
  )
}
