import type { Icon } from './types'

export const IconPanelRight: Icon = ({
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
      data-slot='icon-ui-panel-right'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'panel-right-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'panel-right-title'}>{title}</title> : null}
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
      />
      <path d='M14.65 4v16' stroke='currentColor' />
    </svg>
  )
}
