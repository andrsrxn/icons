import type { Icon } from './types'

export const IconCurrencyJpy: Icon = ({
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
      data-slot='icon-ui-currency-jpy'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M4.83 3 12 11.92' stroke='currentColor' />
      <path d='m19.17 3-7.16 8.92' stroke='currentColor' />
      <path d='M12.01 12.1v9.2' stroke='currentColor' />
      <path d='M7.76 15.7h8.48' stroke='currentColor' />
      <path d='M6.58 11.92h10.84' stroke='currentColor' />
    </svg>
  )
}
