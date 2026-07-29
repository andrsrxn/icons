import type { Icon } from './types'

export const IconCurrencyInr: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='currency-inr'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M6.277 7.413H18M6.277 3.75H18m-8.426 0a4.762 4.762 0 1 1 0 9.525H6.277l8.06 7.327'
      />
    </svg>
  )
}
