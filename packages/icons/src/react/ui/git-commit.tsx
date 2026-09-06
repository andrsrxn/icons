import type { Icon } from './types'

export const IconGitCommit: Icon = ({
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
      data-slot='ui-icon-git-commit'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'git-commit-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`ui-icon ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'git-commit-title'}>{title}</title> : null}<circle opacity=".2" cx="12" cy="12" r="3.51" transform="rotate(90 12 12)" fill="currentColor"/><path d="M8.5 12h-6m19 0h-6" stroke="currentColor"/><circle cx="12" cy="12" r="3.51" transform="rotate(90 12 12)" stroke="currentColor"/></svg>
  )
}
