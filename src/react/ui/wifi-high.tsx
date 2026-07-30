import type { Icon } from './types'

export const IconWifiHigh: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='wifi-high'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8.228 15.25S9.501 13.69 12 13.69c2.499 0 3.772 1.56 3.772 1.56M5.61 12.33S7.766 9.55 12 9.55s6.39 2.78 6.39 2.78M3.48 8.806S6.355 5.318 12 5.318s8.52 3.488 8.52 3.488m-7.698 9.61a.822.822 0 1 1-1.643 0 .822.822 0 0 1 1.643 0Z'
      />
    </svg>
  )
}
