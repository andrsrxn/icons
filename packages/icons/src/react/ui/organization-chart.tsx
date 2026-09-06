import type { Icon } from './types'

export const IconOrganizationChart: Icon = ({
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
      data-slot='ui-icon-organization-chart'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'organization-chart-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`ui-icon ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'organization-chart-title'}>{title}</title> : null}<rect opacity=".2" width="6.88" height="6.36" rx="2" transform="matrix(0 -1 -1 0 15.29 9.58)" fill="currentColor"/><rect opacity=".2" width="6.88" height="6.36" rx="2" transform="matrix(0 -1 -1 0 9.38 21.28)" fill="currentColor"/><rect opacity=".2" width="6.88" height="6.36" rx="2" transform="matrix(0 -1 -1 0 21.19 21.28)" fill="currentColor"/><rect width="6.88" height="6.36" rx="2" transform="matrix(0 -1 -1 0 15.29 9.58)" stroke="currentColor"/><rect width="6.88" height="6.36" rx="2" transform="matrix(0 -1 -1 0 9.38 21.28)" stroke="currentColor"/><rect width="6.88" height="6.36" rx="2" transform="matrix(0 -1 -1 0 21.19 21.28)" stroke="currentColor"/><path d="M18 14c0-.98-.79-1.77-1.76-1.77H7.97c-.98 0-1.77.8-1.77 1.77m5.9-2.34V9.58" stroke="currentColor"/></svg>
  )
}
