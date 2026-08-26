import type { Icon } from './types'

export const IconArrowsUpDown: Icon = ({
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
      data-slot='ui-icon-arrows-up-down'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='m3.55 6.81 1.2-1.2c1.34-1.34 2-2.01 2.83-2.01s1.5.67 2.83 2l1.21 1.21m.76 10.38 1.2 1.2c1.33 1.34 2 2.01 2.83 2.01s1.5-.67 2.83-2l1.21-1.21M7.59 20V3.89m8.82.31v16.12'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
