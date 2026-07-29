import type { Icon } from '../types'

export const IconLogoDropbox: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='logo-dropbox'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <g opacity='.2'>
        <path
          fill='currentColor'
          d='M7.76 5.474 3.52 8.409l4.24 2.935L12 8.409 7.76 5.474Zm8.48 0L12 8.409l4.24 2.935 4.24-2.935-4.24-2.935Z'
        />
        <path
          fill='currentColor'
          d='m7.76 11.344-4.24 2.935 4.24 2.935L12 14.28l-4.24-2.935Zm8.48 0L12 14.279l4.24 2.935 4.24-2.935-4.24-2.935Z'
        />
      </g>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M7.76 11.344 3.52 8.409l4.24-2.935L12 8.409m-4.24 2.935L12 8.409m-4.24 2.935-4.24 2.935 4.24 2.935 1.247-.863M7.76 11.344 12 14.279m0-5.87 4.24-2.935 4.24 2.935-4.24 2.935M12 8.409l4.24 2.935m0 0L12 14.279m0 0 2.993 2.072 1.247.863 4.24-2.935-4.24-2.935m-7.233 5.007L12 14.279m-2.993 2.072L12 18.469l2.993-2.118'
      />
    </svg>
  )
}
