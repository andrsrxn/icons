import type { Icon } from './types'

export const IconBellFilled: Icon = ({
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
      data-slot='ui-icon-bell-filled'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'bell-filled-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`ui-icon ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'bell-filled-title'}>{title}</title> : null}<path d="M20.83 14.85a1.76 1.76 0 0 1-1.34 2.9H4.5a1.75 1.75 0 0 1-1.31-2.9l1.37-1.57v-3.05A7.45 7.45 0 0 1 12 2.8a7.5 7.5 0 0 1 7.49 7.49v2.98q0 0 0 0zM8.36 20.14c.61.88 2.01 1.36 3.64 1.36s3.03-.48 3.64-1.36z" fill="currentColor" stroke="currentColor"/></svg>
  )
}
