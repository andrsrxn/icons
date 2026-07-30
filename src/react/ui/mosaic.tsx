import type { Icon } from './types'

export const IconMosaic: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='mosaic'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M20.13 16.484V8c0-1.886 0-2.828-.586-3.414C18.96 4 18.016 4 16.13 4H7.646c-1.886 0-2.828 0-3.414.586L20.13 16.484Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m4.458 5 8.209 6.133m0 0L20 16.122m-7.333-4.989L8 20m-.354.484h8.484c1.886 0 2.829 0 3.414-.586.586-.585.586-1.528.586-3.414V8c0-1.886 0-2.828-.586-3.414C18.96 4 18.016 4 16.13 4H7.646c-1.886 0-2.828 0-3.414.586-.586.586-.586 1.528-.586 3.414v8.484c0 1.886 0 2.828.586 3.414.586.586 1.528.586 3.414.586Z'
      />
    </svg>
  )
}
