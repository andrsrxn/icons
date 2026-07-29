import type { Icon } from '../types'

export const IconGripVertical: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='grip-vertical'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M15.31 5.36a.822.822 0 1 1 0-1.643.822.822 0 0 1 0 1.644Zm-6.62 0a.822.822 0 1 1 0-1.643.822.822 0 0 1 0 1.644Zm6.62 7.462a.822.822 0 1 1 0-1.644.822.822 0 0 1 0 1.644Zm-6.62 0a.822.822 0 1 1 0-1.644.822.822 0 0 1 0 1.644Zm6.62 7.461a.822.822 0 1 1 0-1.644.822.822 0 0 1 0 1.644Zm-6.62 0a.822.822 0 1 1 0-1.644.822.822 0 0 1 0 1.644Z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M15.31 5.36a.822.822 0 1 1 0-1.643.822.822 0 0 1 0 1.644Zm-6.62 0a.822.822 0 1 1 0-1.643.822.822 0 0 1 0 1.644Zm6.62 7.462a.822.822 0 1 1 0-1.644.822.822 0 0 1 0 1.644Zm-6.62 0a.822.822 0 1 1 0-1.644.822.822 0 0 1 0 1.644Zm6.62 7.461a.822.822 0 1 1 0-1.644.822.822 0 0 1 0 1.644Zm-6.62 0a.822.822 0 1 1 0-1.644.822.822 0 0 1 0 1.644Z'
      />
    </svg>
  )
}
