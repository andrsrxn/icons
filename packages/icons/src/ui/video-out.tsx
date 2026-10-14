import type { Icon } from './types'

export const IconVideoOut: Icon = ({
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
      data-slot='icon-ui-video-out'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='1.67'
        y='5.63'
        width='14.51'
        height='12.72'
        rx='3'
        fill='currentColor'
      />
      <rect x='1.85' y='5.63' width='14.15' height='12.73' rx='3' stroke='currentColor' />
      <path
        d='m16 9.14.93-.45c2.18-1.04 3.28-1.56 4.12-1.18a2 2 0 0 1 .49.3c.7.6.7 1.81.7 4.23 0 2.4 0 3.59-.7 4.18a2 2 0 0 1-.48.32c-.83.37-1.92-.13-4.09-1.13l-.97-.45'
        stroke='currentColor'
      />
      <path d='M8.92 15.19v-5.6' stroke='currentColor' />
      <path
        d='m11.94 11.38-.9-.9c-1-1-1.5-1.5-2.11-1.5-.62 0-1.13.5-2.13 1.5l-.9.9'
        stroke='currentColor'
      />
    </svg>
  )
}
