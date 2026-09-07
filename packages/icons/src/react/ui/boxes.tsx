import type { Icon } from './types'

export const IconBoxes: Icon = ({
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
      data-slot='icon-ui-boxes'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'boxes-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'boxes-title'}>{title}</title> : null}
      <rect opacity='.2' x='7.36' y='2.72' width='9.28' height='9.28' rx='2' fill='currentColor' />
      <rect opacity='.2' x='2.72' y='12' width='9.28' height='9.28' rx='2' fill='currentColor' />
      <rect opacity='.2' x='12' y='12' width='9.28' height='9.28' rx='2' fill='currentColor' />
      <rect x='7.36' y='2.72' width='9.28' height='9.28' rx='2' stroke='currentColor' />
      <rect x='2.72' y='12' width='9.28' height='9.28' rx='2' stroke='currentColor' />
      <rect x='12' y='12' width='9.28' height='9.28' rx='2' stroke='currentColor' />
      <path d='M12 2.72v3.64M7.36 12v3.65M16.64 12v3.65' stroke='currentColor' />
    </svg>
  )
}
