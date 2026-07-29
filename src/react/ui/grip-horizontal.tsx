import type { Icon } from './types'

export const IconGripHorizontal: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='grip-horizontal'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M5.36 8.69a.822.822 0 1 1-1.643 0 .822.822 0 0 1 1.644 0Zm0 6.62a.822.822 0 1 1-1.643 0 .822.822 0 0 1 1.644 0Zm7.462-6.62a.822.822 0 1 1-1.644 0 .822.822 0 0 1 1.644 0Zm0 6.62a.822.822 0 1 1-1.644 0 .822.822 0 0 1 1.644 0Zm7.461-6.62a.822.822 0 1 1-1.644 0 .822.822 0 0 1 1.644 0Zm0 6.62a.822.822 0 1 1-1.644 0 .822.822 0 0 1 1.644 0Z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M5.36 8.69a.822.822 0 1 1-1.643 0 .822.822 0 0 1 1.644 0Zm0 6.62a.822.822 0 1 1-1.643 0 .822.822 0 0 1 1.644 0Zm7.462-6.62a.822.822 0 1 1-1.644 0 .822.822 0 0 1 1.644 0Zm0 6.62a.822.822 0 1 1-1.644 0 .822.822 0 0 1 1.644 0Zm7.461-6.62a.822.822 0 1 1-1.644 0 .822.822 0 0 1 1.644 0Zm0 6.62a.822.822 0 1 1-1.644 0 .822.822 0 0 1 1.644 0Z'
      />
    </svg>
  )
}
