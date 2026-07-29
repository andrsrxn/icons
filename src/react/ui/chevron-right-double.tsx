import type { Icon } from './types'

export const IconChevronRightDouble: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='chevron-right-double'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m12.457 19.576 4.936-4.664c1.44-1.363 2.162-2.044 2.162-2.905 0-.86-.72-1.543-2.16-2.906l-4.938-4.678m-8 15.153 4.936-4.664c1.44-1.363 2.162-2.044 2.162-2.905 0-.86-.72-1.543-2.16-2.906L4.458 4.423'
      />
    </svg>
  )
}
