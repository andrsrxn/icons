import type { Icon } from './types'

export const IconVideoOff: Icon = ({
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
      data-slot='icon-ui-video-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='m2.71 2.71 18.58 18.58' stroke='currentColor' />
      <path
        d='m16 9.14.93-.45c2.18-1.04 3.28-1.56 4.12-1.18a2 2 0 0 1 .49.3c.7.6.7 1.81.7 4.23 0 2.4 0 3.59-.7 4.18a2 2 0 0 1-.48.32c-.17.07-.45.12-.66.1'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M1.67 12c0-2.73 0-4.1.64-5.08a4 4 0 0 1 1.2-1.2c.99-.64 2.35-.64 5.07-.64h.69c2.72 0 4.08 0 5.07.64a4 4 0 0 1 1.2 1.2c.64.98.64 2.35.64 5.07s0 4.09-.64 5.08a4 4 0 0 1-1.2 1.2c-.99.63-2.35.63-5.07.63h-.69c-2.72 0-4.08 0-5.07-.63a4 4 0 0 1-1.2-1.2c-.64-1-.64-2.35-.64-5.08'
        fill='currentColor'
      />
      <path
        d='M5.07 5.23A3.6 3.6 0 0 0 2.49 6.9c-.64 1-.64 2.36-.64 5.09s0 4.1.64 5.09a4 4 0 0 0 1.2 1.19c.98.64 2.35.64 5.08.64h.3c2.74 0 4.1 0 5.1-.64a4 4 0 0 0 1.19-1.19q.3-.48.44-1.13'
        stroke='currentColor'
      />
      <path
        d='M8.6 5.08h.48c2.73 0 4.1 0 5.09.64a4 4 0 0 1 1.19 1.19c.64 1 .64 2.77.64 5.5v0'
        stroke='currentColor'
      />
    </svg>
  )
}
