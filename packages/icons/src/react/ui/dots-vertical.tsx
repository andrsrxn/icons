import type { Icon } from './types'

export const IconDotsVertical: Icon = ({
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
      data-slot='ui-icon-dots-vertical'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'dots-vertical-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`ui-icon ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'dots-vertical-title'}>{title}</title> : null}<path d="M12 6.1a1.23 1.23 0 1 1 0-2.46 1.23 1.23 0 0 1 0 2.46m0 7.13a1.23 1.23 0 1 1 0-2.46 1.23 1.23 0 0 1 0 2.46m0 7.13a1.23 1.23 0 1 1 0-2.46 1.23 1.23 0 0 1 0 2.46" fill="currentColor" stroke="currentColor"/></svg>
  )
}
