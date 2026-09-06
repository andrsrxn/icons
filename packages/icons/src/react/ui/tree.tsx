import type { Icon } from './types'

export const IconTree: Icon = ({
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
      data-slot='ui-icon-tree'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'tree-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`ui-icon ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'tree-title'}>{title}</title> : null}<rect opacity=".2" width="14.62" height="13.52" rx="4" transform="matrix(0 1 1 0 5.24 2.71)" fill="currentColor"/><rect width="14.62" height="13.52" rx="4" transform="matrix(0 1 1 0 5.24 2.71)" stroke="currentColor"/><path d="M12 21.08V6.33M8.44 21.34h7.12M12 14l-2.9-2.9m2.9 0 2.9-2.9" stroke="currentColor"/></svg>
  )
}
