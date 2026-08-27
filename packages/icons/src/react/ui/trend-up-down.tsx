import type { Icon } from './types'

export const IconTrendUpDown: Icon = ({
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
      data-slot='ui-icon-trend-up-down'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='m2.6 14.68 4.74-4.84c.65-.67.98-1 1.39-1.01.4 0 .74.32 1.42.96l1.58 1.51c.7.67 1.06 1 1.48 1 .42-.02.75-.39 1.4-1.1L20.14 5'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M21.26 9.19v-1.2c0-1.89 0-2.83-.58-3.42-.59-.59-1.53-.59-3.42-.59h-1.2m5.16 11.59v1.2c0 1.89 0 2.83-.58 3.42s-1.53.59-3.41.59h-1.21M20.5 20l-5.06-5.06'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
