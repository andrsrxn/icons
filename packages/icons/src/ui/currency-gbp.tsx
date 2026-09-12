import type { Icon } from './types'

export const IconCurrencyGbp: Icon = ({
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
      data-slot='icon-ui-currency-gbp'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M5.31 12.43h9.7' stroke='currentColor' />
      <path d='M5.31 20.97H18.3' stroke='currentColor' />
      <path
        d='M5.3 20.88c1.6 0 4.58-.38 4.58-3.36V6.68c0-1.6 1.19-3.96 4.32-3.96s4.1 2.1 4.1 2.1'
        stroke='currentColor'
      />
    </svg>
  )
}
