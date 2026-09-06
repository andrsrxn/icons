import type { Icon } from './types'

export const IconPanelTopOpen: Icon = ({
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
      data-slot='ui-icon-panel-top-open'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'panel-top-open-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`ui-icon ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'panel-top-open-title'}>{title}</title> : null}<path d="m15.9 16.8-1.07-1.08c-1.33-1.33-2-2-2.83-2s-1.5.67-2.83 2L8.1 16.79" stroke="currentColor"/><rect opacity=".2" width="6.62" height="16.71" rx="2" transform="matrix(0 -1 -1 0 20.36 9.35)" fill="currentColor"/><rect width="18.53" height="16.71" rx="3" transform="matrix(0 -1 -1 0 20.36 21.27)" stroke="currentColor"/><path d="M4 9.35h16" stroke="currentColor"/></svg>
  )
}
