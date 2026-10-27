import type { Icon } from './types'

export const IconCurrencyMnt: Icon = ({
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
      data-slot='icon-ui-currency-mnt'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M12 2.7v18.6' stroke='currentColor' />
      <path d='M4.65 4.54V2.7h14.7v1.84' stroke='currentColor' />
      <path d='m7.73 12.45 8.54-4.93' stroke='currentColor' />
      <path d='m8 17.19 8-4.6' stroke='currentColor' />
      <path d='M9.6 21.3h4.8' stroke='currentColor' />
    </svg>
  )
}
