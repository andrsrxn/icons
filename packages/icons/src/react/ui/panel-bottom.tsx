import type { Icon } from './types'

export const IconPanelBottom: Icon = ({
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
      data-slot='icon-ui-panel-bottom'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='21.25'
        y='14.65'
        width='6.62'
        height='18.51'
        rx='2'
        transform='rotate(90 21.25 14.65)'
        fill='currentColor'
      />
      <rect
        x='21.25'
        y='2.74'
        width='18.53'
        height='18.51'
        rx='3'
        transform='rotate(90 21.25 2.74)'
        stroke='currentColor'
      />
      <path d='M3.14 14.65h17.72' stroke='currentColor' />
    </svg>
  )
}
