import type { Icon } from '../types'

export const IconLogoMedium: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='logo-medium'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M7.834 16.166a4.166 4.166 0 1 0 0-8.332 4.166 4.166 0 0 0 0 8.332Zm8.332 0c.986 0 1.786-1.865 1.786-4.166s-.8-4.166-1.786-4.166S14.381 9.699 14.381 12s.8 4.166 1.785 4.166Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M20.333 7.834v8.332M12 12a4.166 4.166 0 1 1-8.333 0A4.166 4.166 0 0 1 12 12Zm5.952 0c0 2.301-.8 4.166-1.786 4.166S14.381 14.301 14.381 12s.8-4.166 1.785-4.166c.986 0 1.786 1.865 1.786 4.166Z'
      />
    </svg>
  )
}
