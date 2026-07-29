import type { Icon } from '../types'

export const IconLogoPinterest: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='logo-pinterest'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M19.689 10.226c0 3.58-2.406 6.484-6.958 6.484-1.95-1.888-1.743.134-2.467-.104-2.69-1.21-4.49-3.555-4.49-6.38 0-3.58 3.114-6.483 6.957-6.483 3.842 0 6.958 2.903 6.958 6.483Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M12.056 8.53 9.281 20.327M6.74 14.082a6.938 6.938 0 1 1 12.949-3.47c0 3.832-2.776 6.245-5.551 6.245-2.776 0-3.61-1.827-3.61-1.827'
      />
    </svg>
  )
}
