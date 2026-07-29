import type { Icon } from './types'

export const IconContactlessPay: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='contactless-pay'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M3.67 12a8.33 8.33 0 1 0 16.66 0 8.33 8.33 0 0 0-16.66 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M8.105 9.918a4.425 4.425 0 0 1 0 4.164m6.134-6.94a10.325 10.325 0 0 1 0 9.717m-3.107-8.33a7.375 7.375 0 0 1 0 6.942M12 20.33a8.33 8.33 0 1 1 0-16.66 8.33 8.33 0 0 1 0 16.66Z'
      />
    </svg>
  )
}
