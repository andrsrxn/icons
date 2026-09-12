import type { Icon } from './types'

export const IconTimer: Icon = ({
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
      data-slot='icon-ui-timer'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='12' cy='13.4' r='8.82' fill='currentColor' />
      <circle cx='12' cy='13.4' r='8.82' stroke='currentColor' />
      <path d='M16.74 1.79H7.26' stroke='currentColor' />
      <path d='m15.54 9.65-4.13 4.13' stroke='currentColor' />
    </svg>
  )
}
