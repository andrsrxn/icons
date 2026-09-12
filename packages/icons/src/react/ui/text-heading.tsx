import type { Icon } from './types'

export const IconTextHeading: Icon = ({
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
      data-slot='icon-ui-text-heading'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M6.76 3.6v17' stroke='currentColor' />
      <path d='M17.24 3.6v17' stroke='currentColor' />
      <path d='M6.76 12h10.48' stroke='currentColor' />
      <path d='M17.24 3.6v17' stroke='currentColor' />
      <path d='M15.57 20.6h3.34' stroke='currentColor' />
      <path d='M15.57 3.6h3.34' stroke='currentColor' />
      <path d='M5.09 3.6h3.34' stroke='currentColor' />
      <path d='M5.09 20.6h3.34' stroke='currentColor' />
    </svg>
  )
}
