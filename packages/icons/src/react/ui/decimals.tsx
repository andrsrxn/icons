import type { Icon } from './types'

export const IconDecimals: Icon = ({
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
      data-slot='ui-icon-decimals'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'decimals-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`ui-icon ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'decimals-title'}>{title}</title> : null}<path opacity=".2" d="M15.6 9.87a2.8 2.8 0 1 1 5.6 0v4.26a2.8 2.8 0 1 1-5.6 0zm-8.83 0a2.8 2.8 0 0 1 5.6 0v4.26a2.8 2.8 0 1 1-5.6 0z" fill="currentColor"/><path d="M15.6 9.87a2.8 2.8 0 1 1 5.6 0v4.26a2.8 2.8 0 1 1-5.6 0zm-8.83 0a2.8 2.8 0 0 1 5.6 0v4.26a2.8 2.8 0 1 1-5.6 0z" stroke="currentColor"/><path d="M3.55 16.35a.59.59 0 1 1-1.17 0 .59.59 0 0 1 1.17 0" fill="currentColor" stroke="currentColor"/></svg>
  )
}
