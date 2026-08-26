import type { Icon } from './types'

export const IconPanelBottomOpen: Icon = ({
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
      data-slot='ui-icon-panel-bottom-open'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='m15.9 7.2-1.07 1.08c-1.33 1.33-2 2-2.83 2s-1.5-.67-2.83-2L8.1 7.2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        opacity='.2'
        x='20.36'
        y='14.65'
        width='6.62'
        height='16.71'
        rx='2'
        transform='rotate(90 20.36 14.65)'
        fill='currentColor'
      />
      <rect
        x='20.36'
        y='2.74'
        width='18.53'
        height='16.71'
        rx='3'
        transform='rotate(90 20.36 2.74)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path d='M4 14.65h16' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
