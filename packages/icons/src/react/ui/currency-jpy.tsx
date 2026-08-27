import type { Icon } from './types'

export const IconCurrencyJpy: Icon = ({
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
      data-slot='ui-icon-currency-jpy'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M4.83 3 12 11.92M19.17 3l-7.16 8.92m0 .18v9.2m-4.25-5.6h8.48m-9.66-3.78h10.84'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
