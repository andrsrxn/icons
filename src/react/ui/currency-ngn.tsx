import type { Icon } from './types'

export const IconCurrencyNgn: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='currency-ngn'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M10.83 10.5 6 4.312V13.5h7.17L18 19.688V10.5h-7.17Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M3.75 13.5h16.5m-16.5-3h16.5M6 19.688V4.313l12 15.375V4.313'
      />
    </svg>
  )
}
