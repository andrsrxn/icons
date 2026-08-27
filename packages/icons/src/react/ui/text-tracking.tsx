import type { Icon } from './types'

export const IconTextTracking: Icon = ({
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
      data-slot='ui-icon-text-tracking'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='m8.06 14.86 2.06-7.22c.78-2.74 1.17-4.11 1.93-4.11s1.14 1.37 1.92 4.12L16 14.86m-1.45-4.7H9.51M4.38 20.5c-1.1-1.1-1.64-1.64-1.74-2.3a2 2 0 0 1 0-.56c.1-.66.64-1.2 1.74-2.3m15.24 5.16c1.1-1.1 1.64-1.64 1.74-2.3a2 2 0 0 0 0-.56c-.1-.66-.64-1.2-1.74-2.3m1.29 2.58H3.1'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
