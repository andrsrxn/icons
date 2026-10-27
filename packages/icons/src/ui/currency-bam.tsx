import type { Icon } from './types'

export const IconCurrencyBam: Icon = ({
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
      data-slot='icon-ui-currency-bam'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M1.73 18.35V5.65' stroke='currentColor' />
      <path d='M8.18 18.35 4.4 11.53' stroke='currentColor' />
      <path d='m1.73 14.4 6.45-8.75' stroke='currentColor' />
      <path d='m12.3 18.35.94-12.7' stroke='currentColor' />
      <path d='m22.4 18.35-.95-12.7' stroke='currentColor' />
      <path d='m17.34 13.47 4.1-7.82' stroke='currentColor' />
      <path d='m17.34 13.47-4.1-7.82' stroke='currentColor' />
    </svg>
  )
}
