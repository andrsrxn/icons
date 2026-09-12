import type { Icon } from './types'

export const IconCurrencyNok: Icon = ({
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
      data-slot='icon-ui-currency-nok'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M2.72 20.28V3.72' stroke='currentColor' />
      <path d='M14.52 20.28V7.93' stroke='currentColor' />
      <path d='m10.92 20.28-5.78-6.54' stroke='currentColor' />
      <path d='m2.87 16.1 7.42-8.17' stroke='currentColor' />
      <path d='M21.72 11.11c-1.55-3.75-7.2-1.92-7.2 1.96' stroke='currentColor' />
    </svg>
  )
}
