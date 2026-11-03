import type { Icon } from './types'

export const IconCurrencyLak: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-currency-lak'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M8.16 21.42V2.58' stroke='currentColor' />
      <path d='M17.73 21.42 8.88 12' stroke='currentColor' />
      <path d='m9.04 12 8.69-9.42' stroke='currentColor' />
      <path d='M4.18 12h15.2' stroke='currentColor' />
    </svg>
  )
}
