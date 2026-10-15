import type { Icon } from './types'

export const IconCameraSparkle: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-camera-sparkle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4.31 6.48a2.5 2.5 0 0 0-2.48 2.48v5.27c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h8.34c2.83 0 4.24 0 5.12-.88s.88-2.3.88-5.12V9.45c0-.47 0-.7-.03-.9a3 3 0 0 0-2.57-2.58c-.2-.03-.44-.03-.9-.03h-.31A3 3 0 0 1 16.24 5l-.1-.12-.11-.12a3 3 0 0 0-2.12-.95H9.46c-.95 0-1.8.6-2.13 1.48L5.16 7.1zM12 16.9a4 4 0 1 1 0-8 4 4 0 0 1 0 8'
        fill='currentColor'
      />
      <path
        d='M11.3 3.42h2.85c.98 0 1.9.51 2.4 1.35a2.8 2.8 0 0 0 2.4 1.36h.27a3 3 0 0 1 2.95 3.07v5.03c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H7.83c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12v-3.79'
        stroke='currentColor'
      />
      <path
        d='M19.15 9.53a.44.44 0 1 1-.9 0 .44.44 0 0 1 .9 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M1.52 5.29c1.75 0 3.63-1.9 3.63-3.63' stroke='currentColor' />
      <path d='M8.77 5.29c-1.74 0-3.62-1.89-3.62-3.63' stroke='currentColor' />
      <path d='M1.52 5.29c1.74 0 3.63 1.92 3.63 3.63' stroke='currentColor' />
      <path d='M8.77 5.29c-1.71 0-3.62 1.9-3.62 3.63' stroke='currentColor' />
      <circle cx='12' cy='12.91' r='4' transform='rotate(90 12 12.91)' stroke='currentColor' />
    </svg>
  )
}
