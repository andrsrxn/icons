import type { Icon } from './types'

export const IconVideoSparkle: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-video-sparkle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M16.36 11.08c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H6.77l.9 1.65-2.59 2.33-1.44-2.33-1.79-.27v6.46c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h2.5c2.84 0 4.25 0 5.13-.88s.88-2.3.88-5.12z'
        fill='currentColor'
      />
      <path
        d='M1.51 6.3c2.05 0 4.24-2.22 4.24-4.25M10 6.3c-2.04 0-4.25-2.21-4.25-4.25M10 6.3c-2.04 0-4.25 2.2-4.25 4.23M1.51 6.3c2.04 0 4.24 2.23 4.24 4.23'
        stroke='currentColor'
      />
      <path
        d='M1.85 10.94v1.98c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88H10c2.83 0 4.24 0 5.12-.88s.88-2.3.88-5.12V8.41l-.01-.59a3 3 0 0 0-2.74-2.73l-.58-.01'
        stroke='currentColor'
      />
      <path
        d='m16 9.14.93-.45c2.18-1.04 3.28-1.56 4.12-1.18a2 2 0 0 1 .49.3c.7.6.7 1.81.7 4.23 0 2.4 0 3.59-.7 4.18a2 2 0 0 1-.48.32c-.83.37-1.92-.13-4.09-1.13l-.97-.45'
        stroke='currentColor'
      />
    </svg>
  )
}
