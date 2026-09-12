import type { Icon } from './types'

export const IconCurrencyTry: Icon = ({
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
      data-slot='icon-ui-currency-try'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M9.78 21.25V2.75' stroke='currentColor' />
      <path d='M9.78 21.25c5.1 0 8.62-2.96 8.62-7.98' stroke='currentColor' />
      <path d='m5.6 8.58 10.35-5.01' stroke='currentColor' />
      <path d='M5.6 12.73 15.95 7.8' stroke='currentColor' />
    </svg>
  )
}
