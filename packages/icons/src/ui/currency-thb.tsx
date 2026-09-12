import type { Icon } from './types'

export const IconCurrencyThb: Icon = ({
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
      data-slot='icon-ui-currency-thb'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M6.65 19.87V4.13' stroke='currentColor' />
      <path d='M6.77 4.13h5.09a3.82 3.82 0 0 1 0 7.64H6.77' stroke='currentColor' />
      <path d='M6.77 11.77h6.54a4.05 4.05 0 0 1 0 8.1H6.77' stroke='currentColor' />
      <path d='M11.22 21.52V2.48' stroke='currentColor' />
    </svg>
  )
}
