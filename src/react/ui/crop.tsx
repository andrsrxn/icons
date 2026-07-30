import type { Icon } from './types'

export const IconCrop: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='crop'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M6.091 10c0-1.886 0-2.828.586-3.414C7.263 6 8.206 6 10.092 6H14c1.886 0 2.828 0 3.414.586C18 7.172 18 8.114 18 10v3.909c0 1.885 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586h-3.909c-1.885 0-2.828 0-3.414-.586-.586-.586-.586-1.529-.586-3.414V10Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M3.414 6.01h10.577c1.885 0 2.828 0 3.414.585.585.586.585 1.529.585 3.414v10.577m2.596-2.613h-10.56c-1.885 0-2.828 0-3.414-.585-.585-.586-.585-1.53-.585-3.415V3.414'
      />
    </svg>
  )
}
