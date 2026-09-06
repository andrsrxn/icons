import type { Icon } from './types'

export const IconPause: Icon = ({
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
      data-slot='ui-icon-pause'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'pause-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`ui-icon ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'pause-title'}>{title}</title> : null}<rect opacity=".2" x="4.08" y="2.83" width="6.11" height="18.34" rx="2" fill="currentColor"/><rect opacity=".2" x="13.8" y="2.83" width="6.11" height="18.34" rx="2" fill="currentColor"/><rect x="4.08" y="2.83" width="6.11" height="18.34" rx="2" stroke="currentColor"/><rect x="13.8" y="2.83" width="6.11" height="18.34" rx="2" stroke="currentColor"/></svg>
  )
}
