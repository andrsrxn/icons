import type { Icon } from './types'

export const IconKeyOption: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='key-option'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M3.638 7.363h4.378a2 2 0 0 1 1.762 1.054l4.233 7.891a2 2 0 0 0 1.763 1.055h4.588m-5.628-10h5.628'
      />
    </svg>
  )
}
