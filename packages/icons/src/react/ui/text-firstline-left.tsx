import type { Icon } from './types'

export const IconTextFirstlineLeft: Icon = ({
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
      data-slot='ui-icon-text-firstline-left'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'text-firstline-left-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`ui-icon ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'text-firstline-left-title'}>{title}</title> : null}<rect opacity=".2" x="3.28" y="4.17" width="6.82" height="6.82" rx="2" fill="currentColor"/><rect x="3.28" y="4.17" width="6.82" height="6.82" rx="2" stroke="currentColor"/><path d="M21.26 5.27h-8.21m8.21 9.71H2.74m18.52-5.01h-8.21m8.21 9.86H2.74" stroke="currentColor"/></svg>
  )
}
