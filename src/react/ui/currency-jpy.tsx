import type { Icon } from './types'

export const IconCurrencyJpy: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='currency-jpy'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M7.351 15.495h9.32m-9.32-3.107h9.32m-4.66 0v7.766m0-7.766L19 3.846m-6.99 8.542L5.022 3.846'
      />
    </svg>
  )
}
