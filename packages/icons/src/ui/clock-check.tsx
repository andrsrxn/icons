import type { Icon } from './types'

export const IconClockCheck: Icon = ({
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
      data-slot='icon-ui-clock-check'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M12 22.25A10.25 10.25 0 1 0 1.75 12s0 1.95.58 3.25' stroke='currentColor' />
      <path
        d='M11.33 6.31v4.19c0 1.05 0 1.57.24 2.01.24.45.67.74 1.54 1.32l2.93 1.95'
        stroke='currentColor'
      />
      <circle opacity='.2' cx='12' cy='12' r='10.25' fill='currentColor' />
      <path
        d='m1.93 19.82.73.9c.72.88 1.08 1.32 1.56 1.32.47 0 .83-.45 1.55-1.33l3.28-4.05'
        stroke='currentColor'
      />
    </svg>
  )
}
