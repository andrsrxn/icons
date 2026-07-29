import type { Icon } from '../types'

export const IconCurrencyCny: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='currency-cny'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M6 6.313h12M4.5 10.188h15m-5.25 0v5.25a2.25 2.25 0 0 0 2.25 2.25h3.75v-2.25m-10.5-5.25v1.5a6 6 0 0 1-6 6'
      />
    </svg>
  )
}
