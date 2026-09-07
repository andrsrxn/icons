import type { Icon } from './types'

export const IconPanelLeft: Icon = ({
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
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-panel-left'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'panel-left-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'panel-left-title'}>{title}</title> : null}
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
      />
      <path d='M9.35 4v16' stroke='currentColor' />
    </svg>
  )
}
