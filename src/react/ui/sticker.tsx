import type { Icon } from '../types'

export const IconSticker: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='sticker'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M20.5 12a8.5 8.5 0 1 0-8.5 8.5s-.883-4.519 1.464-6.866C15.81 11.287 20.5 12 20.5 12Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M12 20.5s2.772-2.704 4.311-4.248A880.978 880.978 0 0 0 20.5 12a8.5 8.5 0 1 0-8.5 8.5Zm8.5-8.5s-4.689-.713-7.036 1.634C11.116 15.981 12 20.5 12 20.5'
      />
    </svg>
  )
}
