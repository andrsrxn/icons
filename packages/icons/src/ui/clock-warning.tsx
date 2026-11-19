import type { Icon } from './types'

export const IconClockWarning: Icon = ({
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
      data-slot='icon-ui-clock-warning'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M1.75 12A10.25 10.25 0 1 1 12 22.25c-.78 0-1.03 0-1.58-.1' stroke='currentColor' />
      <path
        d='M11.33 6.31v4.19c0 1.05 0 1.57.24 2.01.24.45.67.74 1.54 1.32l2.93 1.95'
        stroke='currentColor'
      />
      <circle opacity='.2' cx='12' cy='12' r='10.25' fill='currentColor' />
      <path d='M5.78 18.14V13.1' stroke='currentColor' />
      <path
        d='M6.31 21.9a.53.53 0 1 1-1.06 0 .53.53 0 0 1 1.06 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
