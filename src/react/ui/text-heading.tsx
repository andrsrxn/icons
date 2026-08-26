import type { Icon } from './types'

export const IconTextHeading: Icon = ({
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
      data-slot='ui-icon-text-heading'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M6.76 3.6v17m10.48-17v17M6.76 12h10.48m0-8.4v17m-1.67 0h3.34m-3.34-17h3.34m-13.82 0h3.34m-3.34 17h3.34'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
