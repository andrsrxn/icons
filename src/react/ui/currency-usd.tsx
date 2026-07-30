import type { Icon } from './types'

export const IconCurrencyUsd: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='currency-usd'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M12 12h2.002a3.337 3.337 0 1 1 0 6.674H12V12Zm0-6.674h-1.335a3.337 3.337 0 1 0 0 6.674H12V5.326Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M12 3.324v17.352m4.672-12.013a3.337 3.337 0 0 0-3.337-3.337h-2.67a3.337 3.337 0 0 0 0 6.674h3.337a3.337 3.337 0 0 1 0 6.674H9.998a3.337 3.337 0 0 1-3.337-3.337'
      />
    </svg>
  )
}
