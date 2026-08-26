import type { Icon } from './types'

export const IconCompassTool: Icon = ({
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
      data-slot='ui-icon-compass-tool'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M9.88 6.69a2.12 2.12 0 1 0 4.24 0 2.12 2.12 0 0 0-4.24 0'
        fill='currentColor'
      />
      <path
        d='M9.88 6.69A2.1 2.1 0 0 0 12 8.8a2.12 2.12 0 1 0-2.12-2.1m.79 2.11L4.84 21.55M13.1 8.81l6.06 12.74M12 2v2.57M2.87 15.92A16 16 0 0 0 12 18.39c3.7 0 5.94-.61 9.13-2.47'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
