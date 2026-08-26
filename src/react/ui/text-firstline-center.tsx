import type { Icon } from './types'

export const IconTextFirstlineCenter: Icon = ({
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
      data-slot='ui-icon-text-firstline-center'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        width='6.84'
        height='6.84'
        rx='2'
        transform='matrix(-1 0 0 1 15.42 4.14)'
        fill='currentColor'
      />
      <rect
        width='6.84'
        height='6.84'
        rx='2'
        transform='matrix(-1 0 0 1 15.42 4.14)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M2.7 5.25h2.64m13.32 0h2.64M2.7 15h18.6M2.7 9.96h2.64m13.32 0h2.64m-18.6 9.9h18.6'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
