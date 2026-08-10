import type { Icon } from './types'

export const IconTriangle: Icon = ({
  size = 24,
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
      data-slot='triangle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M10.34 6.35c.76-1.3 1.14-1.96 1.7-1.96s.95.65 1.7 1.96l5.96 10.31c.75 1.31 1.13 1.97.85 2.46-.29.49-1.04.49-2.55.49H6.09c-1.51 0-2.27 0-2.55-.5-.29-.48.1-1.14.85-2.45z'
        fill='currentColor'
      />
      <path
        d='M10.34 6.35c.76-1.3 1.14-1.96 1.7-1.96s.95.65 1.7 1.96l5.96 10.31c.75 1.31 1.13 1.97.85 2.46-.29.49-1.04.49-2.55.49H6.09c-1.51 0-2.27 0-2.55-.5-.29-.48.1-1.14.85-2.45z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
    </svg>
  )
}
