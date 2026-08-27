import type { Icon } from './types'

export const IconTrendUp: Icon = ({
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
      data-slot='ui-icon-trend-up'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='m2.6 17.47 4.74-4.84c.65-.67.98-1 1.39-1.01s.74.31 1.42.96l1.58 1.51c.7.67 1.06 1 1.48.99s.75-.38 1.4-1.1l5.54-6.19'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M21.26 11.98v-1.2c0-1.9 0-2.84-.58-3.42-.59-.59-1.53-.59-3.42-.59h-1.2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
