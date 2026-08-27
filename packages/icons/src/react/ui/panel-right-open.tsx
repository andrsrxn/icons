import type { Icon } from './types'

export const IconPanelRightOpen: Icon = ({
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
      data-slot='ui-icon-panel-right-open'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='m7.2 15.9 1.08-1.07c1.33-1.33 2-2 2-2.83s-.67-1.5-2-2.83L7.21 8.1'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        opacity='.2'
        width='6.62'
        height='16.71'
        rx='2'
        transform='matrix(1 0 0 -1 14.65 20.36)'
        fill='currentColor'
      />
      <rect
        width='18.53'
        height='16.71'
        rx='3'
        transform='matrix(1 0 0 -1 2.74 20.36)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path d='M14.65 4v16' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
