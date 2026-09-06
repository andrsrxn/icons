import type { Icon } from './types'

export const IconClosedCaptioning: Icon = ({
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
      data-slot='ui-icon-closed-captioning'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'closed-captioning-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`ui-icon ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'closed-captioning-title'}>{title}</title> : null}<rect opacity=".2" x="2.41" y="5.46" width="19.19" height="13.09" rx="3" fill="currentColor"/><rect x="2.41" y="5.46" width="19.19" height="13.09" rx="3" stroke="currentColor"/><path d="M10.7 9.33a3.02 3.02 0 1 0 0 5.39m7-5.39a3.02 3.02 0 1 0 0 5.39" stroke="currentColor"/></svg>
  )
}
