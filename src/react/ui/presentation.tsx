import type { Icon } from '../types'

export const IconPresentation: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='presentation'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M4.89 4h14.22v10.638H4.89V4Zm8.77 14.954c0 .932-.743 1.687-1.66 1.687-.917 0-1.66-.755-1.66-1.686 0-.932.743-1.687 1.66-1.687.917 0 1.66.755 1.66 1.686Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M3.45 14.638h17.1M8.753 11.86V8.32m6.545 3.54V9.827M12 16.941v-2.033m0-3.048V6.778M3.45 4h17.1M4.89 4h14.22v10.638H4.89V4Zm8.77 14.954c0 .932-.743 1.687-1.66 1.687-.917 0-1.66-.755-1.66-1.686 0-.932.743-1.687 1.66-1.687.917 0 1.66.755 1.66 1.686Z'
      />
    </svg>
  )
}
