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
        d='M16.36 11.63c0-2.82 0-4.24-.88-5.12s-2.3-.88-5.12-.88h-2.5c-2.84 0-4.25 0-5.13.88s-.88 2.3-.88 5.12v.74c0 2.82 0 4.24.88 5.12s2.3.88 5.12.88h2.5c2.84 0 4.25 0 5.13-.88s.88-2.3.88-5.12zm-8.38-.56a1.54 1.54 0 1 1 2.26 2.1l-.18.17a1.53 1.53 0 0 1-2.24-2.08z'
        fill='currentColor'
      />
      <path d='M5.7 12c1.64 0 3.4-1.78 3.4-3.41' stroke='currentColor' />
      <path d='M12.52 12c-1.64 0-3.42-1.77-3.42-3.41' stroke='currentColor' />
      <path d='M12.52 12c-1.64 0-3.42 1.77-3.42 3.41' stroke='currentColor' />
      <path d='M5.7 12c1.63 0 3.4 1.8 3.4 3.41' stroke='currentColor' />
      <rect x='1.85' y='5.63' width='14.15' height='12.73' rx='3' stroke='currentColor' />
      <path
        d='m16 9.14.93-.45c2.18-1.04 3.28-1.56 4.12-1.18a2 2 0 0 1 .49.3c.7.6.7 1.81.7 4.23 0 2.4 0 3.59-.7 4.18a2 2 0 0 1-.48.32c-.83.37-1.92-.13-4.09-1.13l-.97-.45'
        stroke='currentColor'
      />
    </svg>
  )
}
