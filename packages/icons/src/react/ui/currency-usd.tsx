import type { Icon } from './types'

export const IconCurrencyUsd: Icon = ({
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
      data-slot='icon-ui-currency-usd'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M17.11 6.99c-.46-1.5-2.6-2.64-5.12-2.64-2.51 0-5.27 1-5.27 3.99 0 5.86 10.09 1.3 10.55 7.07.22 2.75-2.7 4.24-5.28 4.24-2.57 0-4.44-1.16-5.27-2.68'
        stroke='currentColor'
      />
      <path d='M12 21.52V2.48' stroke='currentColor' />
    </svg>
  )
}
