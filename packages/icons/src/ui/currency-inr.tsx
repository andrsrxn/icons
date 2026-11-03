import type { Icon } from './types'

export const IconCurrencyInr: Icon = ({
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
      data-slot='icon-ui-currency-inr'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M18.5 3.45H5.65' stroke='currentColor' />
      <path d='M18.5 8.46H5.65' stroke='currentColor' />
      <path d='M5.65 3.45h4.12a5.12 5.12 0 1 1 0 10.23H5.65l7.27 7.9' stroke='currentColor' />
    </svg>
  )
}
