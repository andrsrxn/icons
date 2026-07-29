import type { Icon } from '../types'

export const IconChevronUpDown: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='chevron-up-down'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m7.38 7.942 1.695-1.816c1.369-1.465 2.053-2.197 2.92-2.198.869 0 1.554.732 2.924 2.195l1.702 1.819m-9.242 8.116 1.696 1.816c1.369 1.465 2.053 2.197 2.92 2.198.869 0 1.554-.732 2.924-2.195l1.702-1.819'
      />
    </svg>
  )
}
