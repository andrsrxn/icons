import type { Icon } from './types'

export const IconTextFirstlineStart: Icon = ({
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
      data-slot='icon-ui-text-firstline-start'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='3.28' y='4.17' width='6.82' height='6.82' rx='2' fill='currentColor' />
      <rect x='3.28' y='4.17' width='6.82' height='6.82' rx='2' stroke='currentColor' />
      <path d='M21.26 5.27h-8.21' stroke='currentColor' />
      <path d='M21.26 14.98H2.74' stroke='currentColor' />
      <path d='M21.26 9.97h-8.21' stroke='currentColor' />
      <path d='M21.26 19.83H2.74' stroke='currentColor' />
    </svg>
  )
}
