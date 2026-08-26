import type { Icon } from './types'

export const IconArrowCornerDownLeft: Icon = ({
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
      data-slot='ui-icon-arrow-corner-down-left'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M5.8 15.5h5.53c3.77 0 5.65 0 6.82-1.17 1.18-1.17 1.18-3.05 1.18-6.82V4.23'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M7.94 19.77 6.5 18.34c-1.33-1.34-2-2-2-2.83s.67-1.5 2-2.83l1.44-1.44'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
