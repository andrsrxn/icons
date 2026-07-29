import type { Icon } from '../types'

export const IconKeyEnter: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='key-enter'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M19.485 8.572v.475c0 1.886 0 2.829-.586 3.414-.585.586-1.528.586-3.414.586H3.98M6.71 9.49l-.727.726c-1.336 1.334-2.004 2-2.004 2.83 0 .828.666 1.495 2.001 2.83l.73.73'
      />
    </svg>
  )
}
