import type { Icon } from './types'

export const IconActivity: Icon = ({
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
      data-slot='ui-icon-activity'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M2.33 12.04h1.44c.67 0 1 0 1.26-.18s.38-.5.61-1.13l1.42-3.82c.98-2.63 1.47-3.95 2.22-3.9s1.04 1.44 1.61 4.19l2.04 9.7c.55 2.62.82 3.94 1.56 4s1.24-1.18 2.25-3.67l1.59-3.94c.24-.6.37-.91.62-1.08s.58-.17 1.23-.17h1.6'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
