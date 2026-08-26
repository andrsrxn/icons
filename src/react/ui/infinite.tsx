import type { Icon } from './types'

export const IconInfinite: Icon = ({
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
      data-slot='ui-icon-infinite'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M12 12S9.12 7.83 6.34 7.83c-2.25 0-3.83 1.83-3.96 3.93C2.24 14 4 16.2 6.41 16.2c4.1 0 6.99-8.35 11.21-8.35 2.37 0 4 1.94 4 4.14s-1.7 4.17-4.07 4.17C14.65 16.17 12 12 12 12'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
