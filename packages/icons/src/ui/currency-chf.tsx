import type { Icon } from './types'

export const IconCurrencyChf: Icon = ({
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
      data-slot='icon-ui-currency-chf'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M8.3 3.03v18.2' stroke='currentColor' />
      <path d='M4.93 17h8.67' stroke='currentColor' />
      <path d='M8.3 9.96h8.68' stroke='currentColor' />
      <path d='M8.3 3.03h8.68' stroke='currentColor' />
    </svg>
  )
}
