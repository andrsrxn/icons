import type { Icon } from './types'

export const IconCalendar: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-calendar'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'calendar-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`ui-icon ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'calendar-title'}>{title}</title> : null}<rect opacity=".2" x="3.23" y="3.66" width="17.54" height="5.12" rx="1" fill="currentColor"/><rect x="3.23" y="3.66" width="17.54" height="17.54" rx="3" stroke="currentColor"/><path d="M7.8 2v3.31M16.26 2v3.31m4.1 3.47H4.03" stroke="currentColor"/></svg>
  )
}
