import type { Icon } from './types'

export const IconChevronUp: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='chevron-up'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m4.423 15.008 4.665-4.935c1.363-1.442 2.044-2.162 2.905-2.163.86 0 1.543.72 2.906 2.16l4.678 4.938'
      />
    </svg>
  )
}
