import type { Icon } from './types'

export const IconPanelsRight: Icon = ({
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
      data-slot='ui-icon-panels-right'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='11.91'
        y='3.64'
        width='9.35'
        height='16.71'
        rx='2'
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
      <path d='M12 20V4' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
