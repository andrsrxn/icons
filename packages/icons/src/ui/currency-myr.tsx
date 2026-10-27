import type { Icon } from './types'

export const IconCurrencyMyr: Icon = ({
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
      data-slot='icon-ui-currency-myr'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M1.68 18.55V5.45' stroke='currentColor' />
      <path d='m11.92 18.55.97-13.1' stroke='currentColor' />
      <path d='m22.32 18.55-.97-13.1' stroke='currentColor' />
      <path d='m17.12 13.51 4.23-8.06' stroke='currentColor' />
      <path d='m17.12 13.51-4.23-8.06' stroke='currentColor' />
      <path d='M1.68 18.55V5.45' stroke='currentColor' />
      <path d='m8.16 18.55-3.7-5.9' stroke='currentColor' />
      <path d='M1.78 5.45h3.35a3.6 3.6 0 1 1 0 7.2H1.78' stroke='currentColor' />
    </svg>
  )
}
