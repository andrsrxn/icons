import type { Icon } from './types'

export const IconPentagon: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='pentagon'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M10.73 4.494c.613-.445.92-.667 1.27-.667s.657.222 1.27.667l6.189 4.497c.612.445.918.667 1.026 1 .109.334-.008.694-.242 1.414l-2.364 7.276c-.234.72-.35 1.08-.635 1.286-.284.206-.662.206-1.419.206h-7.65c-.757 0-1.135 0-1.42-.206-.283-.206-.4-.566-.634-1.286l-2.364-7.276c-.234-.72-.35-1.08-.242-1.413.108-.334.414-.556 1.026-1.001l6.19-4.497Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M10.73 4.494c.613-.445.92-.667 1.27-.667s.657.222 1.27.667l6.189 4.497c.612.445.918.667 1.026 1 .109.334-.008.694-.242 1.414l-2.364 7.276c-.234.72-.35 1.08-.635 1.286-.284.206-.662.206-1.419.206h-7.65c-.757 0-1.135 0-1.42-.206-.283-.206-.4-.566-.634-1.286l-2.364-7.276c-.234-.72-.35-1.08-.242-1.413.108-.334.414-.556 1.026-1.001l6.19-4.497Z'
      />
    </svg>
  )
}
