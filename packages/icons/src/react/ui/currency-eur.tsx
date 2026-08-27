import type { Icon } from './types'

export const IconCurrencyEur: Icon = ({
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
      data-slot='ui-icon-currency-eur'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M19 4.94s-1.24-1.8-4.84-1.8S6 5.68 6 11.97s4.46 8.89 8.16 8.89c3.45 0 4.84-1.63 4.84-1.63m-5.75-9.03H3.71m7.92 3.6H3.71'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
