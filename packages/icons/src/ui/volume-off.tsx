import type { Icon } from './types'

export const IconVolumeOff: Icon = ({
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
      data-slot='icon-ui-volume-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M7.95 15.75v-7.5H6.13c-1.65 0-2.47 0-3.02.45l-.28.28c-.45.55-.45 1.37-.45 3.02 0 1.64 0 2.47.45 3.02q.13.15.28.28c.55.45 1.37.45 3.02.45z'
        fill='currentColor'
      />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
      <path d='M7.95 8.25v7.24' stroke='currentColor' />
      <path
        d='M7.86 8.25H5.42h0c-1.5 0-2.26 0-2.78.38a2 2 0 0 0-.44.44c-.39.53-.39 1.28-.39 2.78s0 2.26.39 2.79a2 2 0 0 0 .44.43c.52.39 1.27.39 2.78.39h2.44'
        stroke='currentColor'
      />
      <path
        d='m7.5 15.47 3.61 3.1c1.42 1.23 2.14 1.84 2.72 1.57s.58-1.2.58-3.09v-2.64'
        stroke='currentColor'
      />
      <path
        d='m10.15 6.08 1-.8c1.4-1.17 2.12-1.75 2.69-1.48s.57 1.19.57 3.02v3.52'
        stroke='currentColor'
      />
      <path d='M17.66 8.5c.7 1.22.94 2.08.94 3.5 0 .94-.1 1.64-.39 2.37' stroke='currentColor' />
      <path d='M20.66 6.64A9.3 9.3 0 0 1 22.11 12c0 2.03-.31 3.31-1.24 5' stroke='currentColor' />
    </svg>
  )
}
