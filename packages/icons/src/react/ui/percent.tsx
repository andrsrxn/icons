import type { Icon } from './types'

export const IconPercent: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-percent'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'percent-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`ui-icon ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'percent-title'}>{title}</title> : null}
      <circle opacity='.2' cx='7.54' cy='7.44' r='2.68' fill='currentColor' />
      <circle opacity='.2' cx='16.56' cy='16.46' r='2.68' fill='currentColor' />
      <path d='M19.03 4.97 4.97 19.03' stroke='currentColor' />
      <circle cx='7.54' cy='7.44' r='2.68' stroke='currentColor' />
      <circle cx='16.56' cy='16.46' r='2.68' stroke='currentColor' />
    </svg>
  )
}
