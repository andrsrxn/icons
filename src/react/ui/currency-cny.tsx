import type { Icon } from './types'

export const IconCurrencyCny: Icon = ({
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
      data-slot='ui-icon-currency-cny'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M4.83 5.54h14.34m-4.78 5v4.4c0 .39 0 .58.02.74a3 3 0 0 0 2.65 2.66c.16.02.36.02.75.02h1.32a2.1 2.1 0 0 0 2.1-2.1m-18.46 2.1c2.15-.34 6.43-2.31 6.43-7.54m-6.43-.96h18.46'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
