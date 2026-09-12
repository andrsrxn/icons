import type { Icon } from './types'

export const IconCurrencyUyu: Icon = ({
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
      data-slot='icon-ui-currency-uyu'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M10.14 7.68c-.38-1.28-2.13-2.27-4.2-2.27s-4.33.86-4.33 3.43c0 5.06 8.28 1.12 8.66 6.1.18 2.37-2.22 3.65-4.33 3.65s-3.65-1-4.33-2.31'
        stroke='currentColor'
      />
      <path d='M5.94 20.22V3.78' stroke='currentColor' />
      <path d='M14.2 5.41v9.55a4.03 4.03 0 1 0 8.06 0V5.41' stroke='currentColor' />
    </svg>
  )
}
