import type { Icon } from './types'

export const IconTimer: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

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
      aria-labelledby={isLabelled && title && !ariaLabel ? 'timer-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'timer-title'}>{title}</title> : null}
      <circle opacity='.2' cx='12' cy='13.32' r='8.32' fill='currentColor' />
      <circle cx='12' cy='13.32' r='8.32' stroke='currentColor' />
      <path d='M16.47 2.37H7.53m7.81 7.41-3.9 3.9' stroke='currentColor' />
    </svg>
  )
}
