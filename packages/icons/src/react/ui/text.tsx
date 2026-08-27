import type { Icon } from './types'

export const IconText: Icon = ({
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
      data-slot='ui-icon-text'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M12 3.75v16.5m2.74 0H9.26m9.41-14.58c0-1.06-.86-1.92-1.92-1.92h-9.5c-1.06 0-1.92.86-1.92 1.92'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
