import type { Icon } from '../types'

export const IconWaveSawtooth: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='wave-sawtooth'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m3.715 9 6.768-4.085A1 1 0 0 1 12 5.771v12.281a1 1 0 0 0 1.583.813l6.765-4.851'
      />
    </svg>
  )
}
