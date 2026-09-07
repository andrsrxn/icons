import type { Icon } from './types'

export const IconExclude: Icon = ({
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
      data-slot='icon-ui-exclude'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'exclude-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'exclude-title'}>{title}</title> : null}
      <path opacity='.2' d='M8.78 8.77h6.38v6.36H8.78z' fill='currentColor' />
      <rect x='2.74' y='2.7' width='12.98' height='12.98' rx='3' stroke='currentColor' />
      <rect x='8.28' y='8.31' width='12.98' height='12.98' rx='3' stroke='currentColor' />
    </svg>
  )
}
