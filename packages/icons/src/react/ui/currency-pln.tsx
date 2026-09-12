import type { Icon } from './types'

export const IconCurrencyPln: Icon = ({
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
      data-slot='icon-ui-currency-pln'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M18.19 2.69V21.3' stroke='currentColor' />
      <path d='m15.11 13.77 6.15-3.54' stroke='currentColor' />
      <path d='M11.63 11.03 2.98 21.05' stroke='currentColor' />
      <path d='M11.63 11.03H2.98' stroke='currentColor' />
      <path d='M11.63 21.05H2.98' stroke='currentColor' />
    </svg>
  )
}
