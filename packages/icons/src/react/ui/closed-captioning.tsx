import type { Icon } from './types'

export const IconClosedCaptioning: Icon = ({
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
      data-slot='icon-ui-closed-captioning'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='1.75' y='4.56' width='20.5' height='14.89' rx='3' fill='currentColor' />
      <rect x='1.75' y='4.56' width='20.5' height='14.89' rx='3' stroke='currentColor' />
      <path d='M10.6 9.15a3.23 3.23 0 1 0 0 5.76' stroke='currentColor' />
      <path d='M18.09 9.15a3.23 3.23 0 1 0 0 5.76' stroke='currentColor' />
    </svg>
  )
}
