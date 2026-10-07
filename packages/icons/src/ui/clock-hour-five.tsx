import type { Icon } from './types'

export const IconClockHourFive: Icon = ({
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
      data-slot='icon-ui-clock-hour-five'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='12' cy='12' r='10.25' fill='currentColor' />
      <circle cx='12' cy='12' r='10.25' stroke='currentColor' />
      <path d='M12 5.37V12' stroke='currentColor' />
      <path d='M14.6 16.9 12 12' stroke='currentColor' />
    </svg>
  )
}
