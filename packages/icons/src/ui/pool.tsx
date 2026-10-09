import type { Icon } from './types'

export const IconPool: Icon = ({
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
      data-slot='icon-ui-pool'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M8.13 15.98V4.68c0-1.5.9-2.63 2.5-2.63 1.31 0 2.25 1 2.25 2.3'
        stroke='currentColor'
      />
      <path
        d='M15.93 17.68V4.63c0-1.46.9-2.58 2.5-2.58 1.3 0 2.24 1 2.24 2.26'
        stroke='currentColor'
      />
      <path d='M15.93 7.53h-7.8' stroke='currentColor' />
      <path d='M15.93 12.25h-7.8' stroke='currentColor' />
      <path opacity='.2' d='M8.14 7.87h7.5v10.41l-3.88-1.2-3.73-1.17z' fill='currentColor' />
      <path
        d='M3 17.46c.7-.48 2.66-1.32 5.31-1.32s5.82 1.69 8.4 1.69c2.6 0 3.79-.91 4.29-1.4'
        stroke='currentColor'
      />
      <path
        d='M3 21.58c.7-.47 2.66-1.3 5.31-1.3s5.82 1.67 8.4 1.67c2.6 0 3.79-.9 4.29-1.4'
        stroke='currentColor'
      />
    </svg>
  )
}
