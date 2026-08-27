import type { Icon } from './types'

export const IconDashboard: Icon = ({
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
      data-slot='ui-icon-dashboard'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='2.96' y='8.68' width='7.04' height='11.32' rx='1' fill='currentColor' />
      <rect
        opacity='.2'
        x='3'
        y='9'
        width='5'
        height='17.73'
        rx='1'
        transform='rotate(-90 3 9)'
        fill='currentColor'
      />
      <rect
        x='2.74'
        y='3.64'
        width='18.53'
        height='16.71'
        rx='3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path d='M10 20V9M3 9h18' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
