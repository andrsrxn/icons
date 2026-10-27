import type { Icon } from './types'

export const IconCurrencyLak: Icon = ({
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
      data-slot='icon-ui-currency-lak'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M8.16 21.42V2.58' stroke='currentColor' />
      <path d='M17.73 21.42 8.88 12' stroke='currentColor' />
      <path d='m9.04 12 8.69-9.42' stroke='currentColor' />
      <path d='M4.18 12h15.2' stroke='currentColor' />
    </svg>
  )
}
