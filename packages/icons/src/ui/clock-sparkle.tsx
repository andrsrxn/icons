import type { Icon } from './types'

export const IconClockSparkle: Icon = ({
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
      data-slot='icon-ui-clock-sparkle'
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
        d='M12 22.25a10.25 10.25 0 1 0-8.42-4.41l1.75-2.22 3.13 2.73L6.3 20.5a10 10 0 0 0 5.7 1.75'
        fill='currentColor'
      />
      <path
        d='M10.42 22.14c.55.1.8.1 1.58.1A10.25 10.25 0 1 0 1.75 12c0 .88.1 1.27.17 1.65'
        stroke='currentColor'
      />
      <path
        d='m16.04 15.78-2.93-1.95c-.87-.58-1.3-.87-1.54-1.32-.24-.44-.24-.96-.24-2.01V6.31'
        stroke='currentColor'
      />
      <path d='M1.6 18.37c1.94 0 4.03-2.1 4.03-4.03' stroke='currentColor' />
      <path d='M9.66 18.37c-1.93 0-4.03-2.1-4.03-4.03' stroke='currentColor' />
      <path d='M1.6 18.37c1.93 0 4.03 2.13 4.03 4.03' stroke='currentColor' />
      <path d='M9.66 18.37c-1.91 0-4.03 2.1-4.03 4.03' stroke='currentColor' />
    </svg>
  )
}
