import type { Icon } from './types'

export const IconClockTime: Icon = ({
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
      data-slot='icon-ui-clock-time'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='12' cy='12' r='10.25' fill='currentColor' />
      <path d='M7.71 2.76A10.25 10.25 0 1 0 18.5 20' stroke='currentColor' />
      <path
        d='M11.33 6.31v4.19c0 1.05 0 1.57.24 2.01.24.45.67.74 1.54 1.32l2.93 1.95'
        stroke='currentColor'
      />
      <path d='M16.18 2.7a11 11 0 0 0-3.9-.91' stroke='currentColor' />
      <path d='M22.21 12.41a11 11 0 0 1-.92 3.9' stroke='currentColor' />
      <path d='M19.44 5.04a11 11 0 0 1 2.11 3.41' stroke='currentColor' />
    </svg>
  )
}
