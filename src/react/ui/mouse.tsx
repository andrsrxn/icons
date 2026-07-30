import type { Icon } from './types'

export const IconMouse: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='mouse'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M6.77 11.558h10.46v3.765a5.23 5.23 0 0 1-10.46 0v-3.765Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M11.958 6.147h.02c.692 0 1.252.56 1.252 1.251v.761a1.25 1.25 0 0 1-1.251 1.251h-.021m0-3.263a1.251 1.251 0 0 0-1.23 1.251v.761c0 .684.549 1.24 1.23 1.251m0-3.263V4m0 5.41v2.147m0 0h-5.1m5.1 0h5.273m-5.252 9.024a5.23 5.23 0 0 1-5.23-5.23V8.704a5.23 5.23 0 1 1 10.46 0v6.646a5.23 5.23 0 0 1-5.23 5.23Z'
      />
    </svg>
  )
}
