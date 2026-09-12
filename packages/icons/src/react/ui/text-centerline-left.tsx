import type { Icon } from './types'

export const IconTextCenterlineLeft: Icon = ({
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
      data-slot='icon-ui-text-centerline-left'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='3.3' y='8.56' width='6.8' height='6.8' rx='2' fill='currentColor' />
      <rect x='3.3' y='8.56' width='6.8' height='6.8' rx='2' stroke='currentColor' />
      <path d='M21.23 9.66h-8.19' stroke='currentColor' />
      <path d='M21.23 19.34H2.77' stroke='currentColor' />
      <path d='M21.23 14.34h-8.19' stroke='currentColor' />
      <path d='M21.23 4.66H2.77' stroke='currentColor' />
    </svg>
  )
}
