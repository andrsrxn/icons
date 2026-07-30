import type { Icon } from './types'

export const IconCurrencyGbp: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='currency-gbp'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M5.84 12.385h3.85m0 0h3.85m-3.85 0v4.235a3.465 3.465 0 0 1-3.464 3.464h11.933M9.69 12.385V8.151a4.234 4.234 0 0 1 6.93-3.267'
      />
    </svg>
  )
}
