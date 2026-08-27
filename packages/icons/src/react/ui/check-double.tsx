import type { Icon } from './types'

export const IconCheckDouble: Icon = ({
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
      data-slot='ui-icon-check-double'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='m2.56 12.83 1.17 1.6c1.48 2.04 2.22 3.06 3.24 3.06s1.76-1.02 3.24-3.07L16.28 6'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m7.72 12.83 1.16 1.6c1.49 2.04 2.23 3.06 3.25 3.06s1.76-1.02 3.23-3.07L21.44 6'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
