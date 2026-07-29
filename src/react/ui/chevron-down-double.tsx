import type { Icon } from './types'

export const IconChevronDownDouble: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='chevron-down-double'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m19.577 12.389-4.665 4.935c-1.363 1.441-2.044 2.162-2.905 2.162-.86 0-1.543-.72-2.906-2.16l-4.678-4.938m15.154-8-4.665 4.936c-1.363 1.441-2.044 2.162-2.905 2.162-.86 0-1.543-.72-2.906-2.16L4.423 4.389'
      />
    </svg>
  )
}
