import type { Icon } from './types'

export const IconLogoMessenger: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='logo-messenger'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M7.884 19.117a8.22 8.22 0 1 0-2.998-2.997l-1.07 3.198a.685.685 0 0 0 .866.867l3.202-1.068Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m7.89 13.37 2.74-2.74 2.74 2.74 2.74-2.74m-8.226 8.487a8.22 8.22 0 1 0-2.998-2.997l-1.07 3.198a.685.685 0 0 0 .866.867l3.202-1.068Z'
      />
    </svg>
  )
}
