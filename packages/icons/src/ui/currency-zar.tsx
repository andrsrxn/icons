import type { Icon } from './types'

export const IconCurrencyZar: Icon = ({
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
      data-slot='icon-ui-currency-zar'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M7.18 21.77V2.66' stroke='currentColor' />
      <path d='m16.64 21.77-5.4-8.6' stroke='currentColor' />
      <path d='M7.32 2.66h4.89a5.26 5.26 0 0 1 0 10.51h-4.9' stroke='currentColor' />
    </svg>
  )
}
