import type { Icon } from './types'

export const IconQuotesDown: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='quotes-down'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M20.302 15.938a3.436 3.436 0 1 1-6.871 0 3.436 3.436 0 0 1 6.871 0Zm-9.733 0a3.436 3.436 0 1 1-6.871 0 3.436 3.436 0 0 1 6.87 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M13.431 15.832s.15-4.383 1.074-6.722c1.769-4.484 4.43-4.484 4.43-4.484M3.698 15.832s.15-4.383 1.073-6.722c1.77-4.484 4.43-4.484 4.43-4.484m11.101 11.312a3.436 3.436 0 1 1-6.87 0 3.436 3.436 0 0 1 6.87 0Zm-9.733 0a3.435 3.435 0 1 1-6.871 0 3.435 3.435 0 0 1 6.87 0Z'
      />
    </svg>
  )
}
