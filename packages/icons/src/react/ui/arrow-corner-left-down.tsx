import type { Icon } from './types'

export const IconArrowCornerLeftDown: Icon = ({
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
      data-slot='ui-icon-arrow-corner-left-down'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M8.5 18.18v-5.52c0-3.77 0-5.66 1.17-6.83s3.05-1.17 6.82-1.17h3.28'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m4.23 16.04 1.43 1.44c1.34 1.34 2 2 2.83 2s1.5-.66 2.83-2l1.44-1.44'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
