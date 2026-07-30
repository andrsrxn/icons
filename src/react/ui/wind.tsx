import type { Icon } from './types'

export const IconWind: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='wind'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M7.189 7.014c.145-1.417 1.204-2.301 2.69-2.301a2.69 2.69 0 0 1 0 5.381H3.534m12.81 3.646c.212.597.9 1.351 1.94 1.351a2.103 2.103 0 0 0 0-4.206h-4.3m-4.815 6.138c.17 1.003 1.205 2.24 2.69 2.24a2.69 2.69 0 1 0 0-5.382H3.535'
      />
    </svg>
  )
}
