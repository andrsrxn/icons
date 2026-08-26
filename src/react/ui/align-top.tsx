import type { Icon } from './types'

export const IconAlignTop: Icon = ({
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
      data-slot='ui-icon-align-top'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='4.58' y='5.82' width='5.8' height='15.49' rx='2' fill='currentColor' />
      <rect opacity='.2' x='13.62' y='5.82' width='5.8' height='11.62' rx='2' fill='currentColor' />
      <rect
        x='4.58'
        y='5.82'
        width='5.8'
        height='15.49'
        rx='2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='13.62'
        y='5.82'
        width='5.8'
        height='11.62'
        rx='2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path d='M3.71 2.79H20.3' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
