import type { Icon } from './types'

export const IconTextFirstlineRight: Icon = ({
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
      data-slot='ui-icon-text-firstline-right'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        width='6.81'
        height='6.81'
        rx='2'
        transform='matrix(-1 0 0 1 20.7 4.18)'
        fill='currentColor'
      />
      <rect
        width='6.81'
        height='6.81'
        rx='2'
        transform='matrix(-1 0 0 1 20.7 4.18)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M2.75 5.28h8.2m-8.2 9.7h18.5M2.75 9.97h8.2m-8.2 9.85h18.5'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
