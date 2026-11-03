import type { Icon } from './types'

export const IconCurrencyBgn: Icon = ({
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
      data-slot='icon-ui-currency-bgn'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M15.03 18.73V5.27' stroke='currentColor' />
      <path d='M15.13 5.27h2.8a3.27 3.27 0 1 1 0 6.53h-2.8' stroke='currentColor' />
      <path d='M15.13 11.8h3.76a3.46 3.46 0 0 1 0 6.93h-3.76' stroke='currentColor' />
      <path d='M10.68 5.42v13.17' stroke='currentColor' />
      <path d='M4.26 5.42v7.62c0 4.98-2.61 5.55-2.61 5.55' stroke='currentColor' />
      <path d='M4.27 5.42h6.4' stroke='currentColor' />
    </svg>
  )
}
