import type { Icon } from './types'

export const IconNotSupersetOf: Icon = ({
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
      data-slot='ui-icon-not-superset-of'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M5.1 5h7.4a5.5 5.5 0 1 1 0 11H5.54M3.3 3.3l17.4 17.4M5.11 19.46h14.12'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
