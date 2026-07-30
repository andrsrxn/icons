import type { Icon } from './types'

export const IconLogoGoogle: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='logo-google'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        fillOpacity='.2'
        fillRule='evenodd'
        d='M16.145 14.51a4.928 4.928 0 1 1-.43-5.875l2.596-2.097a8.362 8.362 0 1 0 2.038 5.321h-8.832v2.65h4.628Z'
        clipRule='evenodd'
      />
      <path
        stroke='currentColor'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M16.145 14.51a4.928 4.928 0 1 1-.43-5.875l2.596-2.097a8.362 8.362 0 1 0 2.038 5.321h-8.832v2.65h4.628Z'
        clipRule='evenodd'
      />
    </svg>
  )
}
