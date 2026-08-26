import type { Icon } from './types'

export const IconRegistered: Icon = ({
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
      data-slot='ui-icon-registered'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M2.57 12a9.43 9.43 0 1 0 18.86 0 9.43 9.43 0 0 0-18.86 0'
        fill='currentColor'
      />
      <path
        d='M2.57 12A9.4 9.4 0 0 0 12 21.43 9.43 9.43 0 1 0 2.57 12m9.67.77 2.5 4.34M9.6 7v10.1'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M9.63 7h3.35c1.4 0 2.54 1.24 2.54 2.78s-1.14 2.78-2.54 2.78H9.63'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
