import type { Icon } from './types'

export const IconQuestionMark: Icon = ({
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
      data-slot='ui-icon-question-mark'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'question-mark-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`ui-icon ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'question-mark-title'}>{title}</title> : null}<path d="M12 16c0-4.73 4.41-4.77 4.41-8.21a4.41 4.41 0 0 0-8.82 0" stroke="currentColor"/><path d="M12.67 19.96a.67.67 0 1 1-1.34 0 .67.67 0 0 1 1.34 0" fill="currentColor" stroke="currentColor"/></svg>
  )
}
