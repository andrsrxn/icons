import type { Icon } from './types'

export const IconCurrencyGbp: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-currency-gbp'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M5.31 12.43h9.7m-9.7 8.54H18.3m-13-.09c1.6 0 4.58-.38 4.58-3.36V6.68c0-1.6 1.19-3.96 4.32-3.96s4.1 2.1 4.1 2.1'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
