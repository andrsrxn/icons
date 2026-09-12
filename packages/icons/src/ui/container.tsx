import type { Icon } from './types'

export const IconContainer: Icon = ({
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
      data-slot='icon-ui-container'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='1.37' y='5' width='21.26' height='14.04' rx='3' fill='currentColor' />
      <rect x='1.74' y='5' width='20.52' height='14.04' rx='3' stroke='currentColor' />
      <path d='M5.6 14.74V9.3' stroke='currentColor' />
      <path d='M9.87 14.74V9.3' stroke='currentColor' />
      <path d='M14.13 14.74V9.3' stroke='currentColor' />
      <path d='M18.4 14.74V9.3' stroke='currentColor' />
    </svg>
  )
}
