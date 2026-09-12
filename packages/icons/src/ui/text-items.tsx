import type { Icon } from './types'

export const IconTextItems: Icon = ({
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
      data-slot='icon-ui-text-items'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='2.48' y='2.85' width='7.24' height='7.24' rx='2' fill='currentColor' />
      <rect opacity='.2' x='2.48' y='13.91' width='7.24' height='7.24' rx='2' fill='currentColor' />
      <rect x='2.48' y='2.85' width='7.24' height='7.24' rx='2' stroke='currentColor' />
      <rect x='2.48' y='13.91' width='7.24' height='7.24' rx='2' stroke='currentColor' />
      <path d='M21.83 4.37H13.1' stroke='currentColor' />
      <path d='M21.83 15.43H13.1' stroke='currentColor' />
      <path d='M19.47 8.47H13.1' stroke='currentColor' />
      <path d='M19.47 19.53H13.1' stroke='currentColor' />
    </svg>
  )
}
