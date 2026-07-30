import type { Icon } from './types'

export const IconWaveTriangle: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='wave-triangle'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m3.654 8.093.938-1.059c1.265-1.427 1.897-2.14 2.662-2.062.766.079 1.24.906 2.187 2.56l5.163 9.013c.93 1.623 1.395 2.434 2.15 2.52.755.085 1.39-.602 2.658-1.977l.951-1.031'
      />
    </svg>
  )
}
