import type { Icon } from '../types'

export const IconMouseLeft: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='mouse-left'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M12.021 6.147H12c-.69 0-1.251.56-1.251 1.251v.761c0 .691.56 1.251 1.251 1.251h.021m0-3.263c.681.011 1.23.567 1.23 1.251v.761c0 .684-.549 1.24-1.23 1.251m0-3.263V4m0 5.41v2.147m0 0h5.1m-5.1 0H6.748M12 20.581a5.23 5.23 0 0 0 5.23-5.23V8.704a5.23 5.23 0 0 0-10.46 0v6.646A5.23 5.23 0 0 0 12 20.58Z'
      />
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M12 5.34c0-.856-.902-1.412-1.668-1.028L8.21 5.38a2.615 2.615 0 0 0-1.44 2.337v7.607a5.23 5.23 0 0 0 5.23 5.23h.733a4.498 4.498 0 0 0 4.498-4.497v-1.883a2.615 2.615 0 0 0-2.616-2.616H13.18a1.18 1.18 0 0 1-1.18-1.18V9.71a.51.51 0 0 0-.51-.511.51.51 0 0 1-.511-.51V7.001a.51.51 0 0 1 .51-.51.51.51 0 0 0 .511-.51V5.34Z'
        clipRule='evenodd'
        opacity='.2'
      />
    </svg>
  )
}
