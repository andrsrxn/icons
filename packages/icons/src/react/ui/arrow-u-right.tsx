import type { Icon } from './types'

export const IconArrowURight: Icon = ({
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
      data-slot='ui-icon-arrow-u-right'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M19.54 8H9.73a5.66 5.66 0 0 0 0 11.33h7.26'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m16.2 3.47 1.7 1.7c1.33 1.34 2 2 2 2.83s-.67 1.5-2 2.83l-1.7 1.71'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
