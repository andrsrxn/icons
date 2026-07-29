import type { Icon } from './types'

export const IconWaves: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='waves'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M3.583 6.925S5.388 5 8.259 5c2.872 0 5.585 1.925 8.417 1.925S20.417 5 20.417 5M3.583 12.963s1.805-1.925 4.676-1.925c2.872 0 5.585 1.925 8.417 1.925s3.741-1.925 3.741-1.925M3.583 19s1.805-1.925 4.676-1.925c2.872 0 5.585 1.925 8.417 1.925s3.741-1.925 3.741-1.925'
      />
    </svg>
  )
}
