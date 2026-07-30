import type { Icon } from './types'

export const IconWaveSine: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='wave-sine'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M3.688 8.139s.68-4.14 3.695-4.14c7.214 0 2.021 16 9.236 16 2.961.001 3.71-3.99 3.71-3.99'
      />
    </svg>
  )
}
