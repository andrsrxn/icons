import type { Icon } from './types'

export const IconRecordFilled: Icon = ({
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
      data-slot='ui-icon-record-filled'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'record-filled-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`ui-icon ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'record-filled-title'}>{title}</title> : null}<path d="M17.66 12A5.65 5.65 0 0 0 12 6.34 5.66 5.66 0 1 0 17.66 12" fill="currentColor" stroke="currentColor"/><path d="M21.3 12A9.26 9.26 0 0 0 12 2.7a9.3 9.3 0 1 0 9.3 9.3" stroke="currentColor"/></svg>
  )
}
