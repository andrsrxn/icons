import type { Icon } from './types'

export const IconCurrencyIdr: Icon = ({
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
      data-slot='icon-ui-currency-idr'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M3.2 17.89V2.3' stroke='currentColor' />
      <path d='M14.62 21.69V11.4' stroke='currentColor' />
      <path d='m10.92 17.89-4.4-7.01' stroke='currentColor' />
      <path d='M3.32 2.31h3.99a4.28 4.28 0 0 1 0 8.57H3.32' stroke='currentColor' />
      <path d='M14.7 11.4h3.32a2.77 2.77 0 0 1 0 5.55H14.7' stroke='currentColor' />
    </svg>
  )
}
