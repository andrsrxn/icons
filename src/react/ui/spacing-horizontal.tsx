import type { Icon } from './types'

export const IconSpacingHorizontal: Icon = ({
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
      data-slot='ui-icon-spacing-horizontal'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M4.56 18.15H19.1m-2.26-3.49.66.66c1.34 1.34 2 2 2 2.83s-.66 1.5-2 2.83l-.66.67M7 14.74l-.58.58c-1.33 1.34-2 2-2 2.83s.66 1.5 2 2.83l.58.59M5.96 2.35v9.25m6-9.25v9.25m6-9.25v9.25'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
