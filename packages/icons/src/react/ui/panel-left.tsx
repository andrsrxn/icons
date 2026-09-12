import type { Icon } from './types'

export const IconPanelLeft: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

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
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='9.35'
        y='21.28'
        width='6.62'
        height='18.56'
        rx='2'
        transform='rotate(-180 9.35 21.28)'
        fill='currentColor'
      />
      <rect
        x='21.27'
        y='21.28'
        width='18.53'
        height='18.56'
        rx='3'
        transform='rotate(-180 21.27 21.28)'
        stroke='currentColor'
      />
      <path d='M9.35 3.12v17.76' stroke='currentColor' />
    </svg>
  )
}
