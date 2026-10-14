import type { Icon } from './types'

export const IconCurrencyKrwCircle: Icon = ({
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
      data-slot='icon-ui-currency-krw-circle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.69 12a10.31 10.31 0 1 0 20.62 0 10.31 10.31 0 0 0-20.62 0'
        fill='currentColor'
      />
      <path d='m6.08 8.03 2.96 9.17' stroke='currentColor' />
      <path d='m12 8.03 2.96 9.17' stroke='currentColor' />
      <path d='M12 8.03 9.04 17.2' stroke='currentColor' />
      <path d='m17.92 8.03-2.96 9.17' stroke='currentColor' />
      <path d='M5.49 10.33h13.02' stroke='currentColor' />
      <path d='M5.49 13.67h13.02' stroke='currentColor' />
      <path d='M1.7 12A10.3 10.3 0 0 0 12 22.31 10.31 10.31 0 1 0 1.7 12' stroke='currentColor' />
    </svg>
  )
}
