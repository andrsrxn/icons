import type { Icon } from './types'

export const IconLogoGooglePhotos: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='logo-google-photos'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M12 12V3.703A5.106 5.106 0 0 1 15.99 12H12Zm0 0v8.297A5.106 5.106 0 0 1 8.01 12H12Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M12 12V3.703A5.106 5.106 0 0 1 15.99 12M12 12H3.703A5.106 5.106 0 0 1 12 8.01M12 12v8.297A5.106 5.106 0 0 1 8.01 12M12 12h8.297A5.106 5.106 0 0 1 12 15.99'
      />
    </svg>
  )
}
