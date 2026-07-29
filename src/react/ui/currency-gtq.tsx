import type { Icon } from './types'

export const IconCurrencyGtq: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='currency-gtq'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M18.674 12a7.488 7.488 0 1 1-14.975 0 7.488 7.488 0 0 1 14.975 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m12.82 13.65 7.511 5.642M18.674 12a7.488 7.488 0 1 1-14.975 0 7.488 7.488 0 0 1 14.975 0Z'
      />
    </svg>
  )
}
