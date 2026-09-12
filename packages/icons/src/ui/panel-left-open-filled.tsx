import type { Icon } from './types'

export const IconPanelLeftOpenFilled: Icon = ({
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
      data-slot='icon-ui-panel-left-open-filled'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m16.8 15.9-1.08-1.07c-1.33-1.33-2-2-2-2.83s.67-1.5 2-2.83l1.07-1.07'
        stroke='currentColor'
      />
      <rect
        x='9.35'
        y='21.21'
        width='6.62'
        height='18.42'
        rx='2'
        transform='rotate(-180 9.35 21.21)'
        fill='currentColor'
      />
      <rect
        x='21.27'
        y='21.21'
        width='18.53'
        height='18.42'
        rx='3'
        transform='rotate(-180 21.27 21.21)'
        stroke='currentColor'
      />
      <path d='M9.35 3.18v17.64' stroke='currentColor' />
    </svg>
  )
}
