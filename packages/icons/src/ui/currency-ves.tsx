import type { Icon } from './types'

export const IconCurrencyVes: Icon = ({
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
      data-slot='icon-ui-currency-ves'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M2.8 20.33V3.67' stroke='currentColor' />
      <path d='M2.91 3.67H6.4a4.04 4.04 0 1 1 0 8.09H2.91' stroke='currentColor' />
      <path d='M2.91 11.76h4.66a4.29 4.29 0 0 1 0 8.57H2.9' stroke='currentColor' />
      <path
        d='M21.2 12.5c-.28-.92-1.54-1.62-3.02-1.62s-3.1.61-3.1 2.46c0 3.62 5.93.8 6.2 4.37.13 1.7-1.58 2.62-3.1 2.62-1.51 0-2.62-.71-3.1-1.66'
        stroke='currentColor'
      />
    </svg>
  )
}
