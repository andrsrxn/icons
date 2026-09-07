import type { Icon } from './types'

export const IconTextItems: Icon = ({
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
      data-slot='ui-icon-text-items'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'text-items-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`ui-icon ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'text-items-title'}>{title}</title> : null}
      <rect opacity='.2' x='2.79' y='3.15' width='7.01' height='7.01' rx='2' fill='currentColor' />
      <rect opacity='.2' x='2.79' y='13.85' width='7.01' height='7.01' rx='2' fill='currentColor' />
      <rect x='2.79' y='3.15' width='7.01' height='7.01' rx='2' stroke='currentColor' />
      <rect x='2.79' y='13.85' width='7.01' height='7.01' rx='2' stroke='currentColor' />
      <path
        d='M21.52 4.61h-8.45m8.45 10.71h-8.45m6.16-6.74h-6.16m6.16 10.7h-6.16'
        stroke='currentColor'
      />
    </svg>
  )
}
