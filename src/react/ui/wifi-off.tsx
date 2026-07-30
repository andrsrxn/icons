import type { Icon } from './types'

export const IconWifiOff: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='wifi-off'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8.228 15.25S9.501 13.69 12 13.69c.79 0 1.457.155 2 .368M5.61 12.33S7.766 9.55 12 9.55s6.39 2.78 6.39 2.78M3.48 8.806S6.355 5.318 12 5.318s8.52 3.488 8.52 3.488M3.496 3.496l17.008 17.008m-7.682-2.087a.822.822 0 1 1-1.643 0 .822.822 0 0 1 1.643 0Z'
      />
    </svg>
  )
}
