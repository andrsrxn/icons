import type { Icon } from './types'

export const IconPanelBottomOpenFilled: Icon = ({
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
      data-slot='icon-ui-panel-bottom-open-filled'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m15.9 7.2-1.07 1.08c-1.33 1.33-2 2-2.83 2s-1.5-.67-2.83-2L8.1 7.2'
        stroke='currentColor'
      />
      <rect
        x='21.23'
        y='14.65'
        width='6.62'
        height='18.46'
        rx='2'
        transform='rotate(90 21.23 14.65)'
        fill='currentColor'
      />
      <rect
        x='21.23'
        y='2.73'
        width='18.53'
        height='18.46'
        rx='3'
        transform='rotate(90 21.23 2.73)'
        stroke='currentColor'
      />
      <path d='M3.36 14.65h17.28' stroke='currentColor' />
    </svg>
  )
}
