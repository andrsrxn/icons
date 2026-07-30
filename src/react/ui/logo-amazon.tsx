import type { Icon } from './types'

export const IconLogoAmazon: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='logo-amazon'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M11.313 15.498a3.498 3.498 0 1 0 0-6.995 3.498 3.498 0 0 0 0 6.995Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m19.921 15.41-.66.724s-2.86 3.18-7.63 3.18S4 16.134 4 16.134m13.748-1.272h2.15c.35 0 .636.285.636.636v2.15m-5.723-2.15V8.185a3.498 3.498 0 0 0-6.614-1.59m6.614 5.406a3.498 3.498 0 1 1-6.996 0 3.498 3.498 0 0 1 6.995 0Z'
      />
    </svg>
  )
}
