import type { Icon } from './types'

export const IconTextUnderline: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='text-underline'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M4.526 20h14.948M6.394 4.127v6.926c0 3.566 2.723 5.943 5.606 5.943s5.606-2.377 5.606-5.943v-6.93'
      />
    </svg>
  )
}
