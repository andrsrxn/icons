import type { Icon } from './types'

export const IconCurrencyChf: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-currency-chf'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M8.3 3.03v18.2' stroke='currentColor' />
      <path d='M4.93 17h8.67' stroke='currentColor' />
      <path d='M8.3 9.96h8.68' stroke='currentColor' />
      <path d='M8.3 3.03h8.68' stroke='currentColor' />
    </svg>
  )
}
