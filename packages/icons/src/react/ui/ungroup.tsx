import type { Icon } from './types'

export const IconUngroup: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

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
      data-slot='icon-ui-ungroup'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='12.67' y='3.61' width='7.72' height='7.72' rx='2' fill='currentColor' />
      <rect x='3.61' y='12.67' width='7.72' height='7.72' rx='2' stroke='currentColor' />
      <rect x='12.67' y='3.61' width='7.72' height='7.72' rx='2' stroke='currentColor' />
    </svg>
  )
}
