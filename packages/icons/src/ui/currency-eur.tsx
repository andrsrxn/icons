import type { Icon } from './types'

export const IconCurrencyEur: Icon = ({
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
      data-slot='icon-ui-currency-eur'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M19.31 4.65s-1.3-1.87-5.03-1.87-8.5 2.64-8.5 9.19 4.64 9.25 8.5 9.25c3.59 0 5.03-1.69 5.03-1.69'
        stroke='currentColor'
      />
      <path d='M14.94 10.12H3.4' stroke='currentColor' />
      <path d='M12.98 13.88H3.4' stroke='currentColor' />
    </svg>
  )
}
