import type { Icon } from './types'

export const IconPanelLeftOpen: Icon = ({
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
      data-slot='ui-icon-panel-left-open'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='m16.8 15.9-1.08-1.07c-1.33-1.33-2-2-2-2.83s.67-1.5 2-2.83l1.07-1.07'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        opacity='.2'
        x='9.35'
        y='20.36'
        width='6.62'
        height='16.71'
        rx='2'
        transform='rotate(-180 9.35 20.36)'
        fill='currentColor'
      />
      <rect
        x='21.27'
        y='20.36'
        width='18.53'
        height='16.71'
        rx='3'
        transform='rotate(-180 21.27 20.36)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path d='M9.35 4v16' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
