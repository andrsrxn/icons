import type { Icon } from './types'

export const IconLogoX: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='logo-x'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M4.844 4.129h4.294L19.156 19.87h-4.294L4.844 4.13Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m10.737 13.39-5.893 6.48M19.156 4.13l-5.893 6.482M4.844 4.129h4.294L19.156 19.87h-4.294L4.844 4.13Z'
      />
    </svg>
  )
}
