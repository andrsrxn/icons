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
      <path d='M5.3 2.51c0 1.81-1.97 3.79-3.8 3.79' stroke='currentColor' />
      <path d='M5.3 2.51c0 1.82 1.96 3.78 3.77 3.78' stroke='currentColor' />
      <path d='M5.3 10.07c0-1.81 1.96-3.78 3.77-3.78' stroke='currentColor' />
      <path d='M5.3 10.07C5.3 8.3 3.32 6.3 1.5 6.3' stroke='currentColor' />
      <path
        d='M1.85 10.94v1.98c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88H10c2.83 0 4.24 0 5.12-.88s.88-2.3.88-5.12V8.95c0-.8 0-1.21-.08-1.54a3 3 0 0 0-2.25-2.25c-.33-.08-.73-.08-1.54-.08'
        stroke='currentColor'
      />
      <path
        d='m16 9.14.93-.45c2.18-1.04 3.28-1.56 4.12-1.19a2 2 0 0 1 .49.32c.7.6.7 1.8.7 4.22 0 2.4 0 3.59-.7 4.18a2 2 0 0 1-.48.32c-.83.37-1.92-.13-4.09-1.13l-.97-.45'
        stroke='currentColor'
      />
    </svg>
  )
}
