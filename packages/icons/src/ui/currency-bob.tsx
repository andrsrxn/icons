import type { Icon } from './types'

export const IconCurrencyBob: Icon = ({
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
      data-slot='icon-ui-currency-bob'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M9.65 8C9.3 6.8 7.68 5.9 5.76 5.9s-4.01.79-4.01 3.17c0 4.69 7.67 1.04 8.02 5.65.17 2.2-2.05 3.39-4.01 3.39s-3.38-.93-4.01-2.14'
        stroke='currentColor'
      />
      <path d='M5.76 19.62V4.38' stroke='currentColor' />
      <path
        d='M14.08 11.78h4.25a3.92 3.92 0 0 1 0 7.84h-2.96a1.3 1.3 0 0 1-1.3-1.3V4.98'
        stroke='currentColor'
      />
    </svg>
  )
}
