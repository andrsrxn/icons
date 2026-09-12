import type { Icon } from './types'

export const IconCurrencyKrw: Icon = ({
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
      data-slot='icon-ui-currency-krw'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='m2.91 5.58 4.55 14.07' stroke='currentColor' />
      <path d='m12 5.58 4.54 14.07' stroke='currentColor' />
      <path d='M12 5.58 7.46 19.65' stroke='currentColor' />
      <path d='m21.09 5.58-4.55 14.07' stroke='currentColor' />
      <path d='M2.01 9.95H22' stroke='currentColor' />
      <path d='M2.01 13.97H22' stroke='currentColor' />
    </svg>
  )
}
