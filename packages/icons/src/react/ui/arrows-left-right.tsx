import type { Icon } from './types'

export const IconArrowsLeftRight: Icon = ({
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
      data-slot='ui-icon-arrows-left-right'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='m17.19 3.55 1.2 1.2c1.34 1.34 2.01 2 2.01 2.83s-.67 1.5-2 2.83l-1.21 1.21m-10.38.76-1.2 1.2c-1.34 1.33-2.01 2-2.01 2.83s.67 1.5 2 2.83l1.21 1.21M4.17 7.59h16.11m-.45 8.82H3.72'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
