import type { Icon } from './types'

export const IconBetweenHorizontalRight: Icon = ({
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
      data-slot='icon-ui-between-horizontal-right'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='14' y='2.69' width='7.26' height='13.85' rx='2' fill='currentColor' />
      <rect opacity='.2' x='2.74' y='2.69' width='7.26' height='13.85' rx='2' fill='currentColor' />
      <rect x='14' y='2.69' width='7.26' height='13.85' rx='2' stroke='currentColor' />
      <rect x='2.74' y='2.69' width='7.26' height='13.85' rx='2' stroke='currentColor' />
      <path
        d='m8.11 22.33 1.88-1.88c1-1 1.5-1.5 2.12-1.5s1.12.5 2.13 1.5l1.88 1.88'
        stroke='currentColor'
      />
    </svg>
  )
}
