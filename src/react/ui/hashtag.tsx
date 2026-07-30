import type { Icon } from './types'

export const IconHashtag: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='hashtag'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M13.825 15.002H8.778a1 1 0 0 1-.922-1.385l1.669-4a1 1 0 0 1 .922-.615h4.844a1 1 0 0 1 .939 1.345l-1.466 4a1 1 0 0 1-.939.655Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M5.501 20.005 11.517 4m.984 16.005L18.5 4M20 9H4m16 6H4'
      />
    </svg>
  )
}
