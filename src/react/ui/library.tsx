import type { Icon } from './types'

export const IconLibrary: Icon = ({
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
      data-slot='ui-icon-library'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        fill='currentColor'
        d='M2.81 4.08h5.05v5.58H2.81zm5.05 0h5.05v5.58H7.86z'
      />
      <rect
        opacity='.2'
        x='12.9'
        y='4.77'
        width='5.05'
        height='5.56'
        rx='2'
        transform='rotate(-15 12.9 4.77)'
        fill='currentColor'
      />
      <rect
        x='2.81'
        y='3.84'
        width='5.05'
        height='16.32'
        rx='1.5'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='7.86'
        y='3.84'
        width='5.05'
        height='16.32'
        rx='1.5'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='12.9'
        y='4.77'
        width='5.05'
        height='16.32'
        rx='1.5'
        transform='rotate(-15 12.9 4.77)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path d='M2.98 9.26h9.75m1.82 0L18.75 8' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
