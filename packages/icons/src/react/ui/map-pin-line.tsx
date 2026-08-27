import type { Icon } from './types'

export const IconMapPinLine: Icon = ({
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
      data-slot='ui-icon-map-pin-line'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path d='M12 21.55V12' stroke='currentColor' strokeWidth={strokeWidth} />
      <circle
        opacity='.2'
        cx='12'
        cy='7.29'
        r='4.71'
        transform='rotate(90 12 7.29)'
        fill='currentColor'
      />
      <circle
        cx='12'
        cy='7.29'
        r='4.71'
        transform='rotate(90 12 7.29)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
