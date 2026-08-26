import type { Icon } from './types'

export const IconCurrencyMxn: Icon = ({
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
      data-slot='ui-icon-currency-mxn'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M17.05 7.41C16.6 6.05 14.48 5 12 5s-5.2.9-5.2 3.65c0 5.36 9.96 1.19 10.42 6.47C17.43 17.64 14.55 19 12 19s-4.39-1.06-5.2-2.45m5.2 4.86v-2.04M12 4.7V2.59'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
