import type { Icon } from './types'

export const IconMapPinLine: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='map-pin-line'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M15.817 7.63a3.817 3.817 0 1 1-7.634 0 3.817 3.817 0 0 1 7.634 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 11.56v9.066M15.817 7.63a3.817 3.817 0 1 1-7.634 0 3.817 3.817 0 0 1 7.634 0Z'
      />
    </svg>
  )
}
