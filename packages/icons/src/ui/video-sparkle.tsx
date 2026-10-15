import type { Icon } from './types'

export const IconVideoSparkle: Icon = ({
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
      data-slot='icon-ui-video-sparkle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M16.36 11.63c0-2.82 0-4.24-.88-5.12s-2.3-.88-5.12-.88H8.5L6.77 6.65 5.08 8.79 3.64 6.65c-.95-.13-1.79.6-1.79 1.56v4.16c0 2.82 0 4.24.88 5.12s2.3.88 5.12.88h2.5c2.84 0 4.25 0 5.13-.88s.88-2.3.88-5.12z'
        fill='currentColor'
      />
      <path d='M1.51 6.3c1.83 0 3.79-1.99 3.79-3.8' stroke='currentColor' />
      <path d='M9.07 6.3C7.26 6.3 5.3 4.32 5.3 2.5' stroke='currentColor' />
      <path d='M9.07 6.3c-1.81 0-3.78 1.96-3.78 3.77' stroke='currentColor' />
      <path d='M1.51 6.3c1.82 0 3.78 1.99 3.78 3.77' stroke='currentColor' />
      <path
        d='M1.85 10.32v2.05c0 2.82 0 4.24.88 5.12s2.3.88 5.12.88H10c2.83 0 4.24 0 5.12-.88s.88-2.3.88-5.12V9.58c0-.88 0-1.32-.1-1.68a3 3 0 0 0-2.17-2.17c-.36-.1-.8-.1-1.68-.1'
        stroke='currentColor'
      />
      <path
        d='m16 9.14.93-.45c2.18-1.04 3.28-1.56 4.12-1.18a2 2 0 0 1 .49.3c.7.6.7 1.81.7 4.23 0 2.4 0 3.59-.7 4.18a2 2 0 0 1-.48.32c-.83.37-1.92-.13-4.09-1.13l-.97-.45'
        stroke='currentColor'
      />
    </svg>
  )
}
