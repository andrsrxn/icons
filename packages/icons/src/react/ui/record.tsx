import type { Icon } from './types'

export const IconRecord: Icon = ({
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
      data-slot='ui-icon-record'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M17.67 12a5.66 5.66 0 1 0-11.33 0 5.66 5.66 0 0 0 11.33 0'
        fill='currentColor'
      />
      <path
        d='M17.66 12A5.65 5.65 0 0 0 12 6.34 5.66 5.66 0 1 0 17.66 12'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M21.3 12A9.26 9.26 0 0 0 12 2.7a9.3 9.3 0 1 0 9.3 9.3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
