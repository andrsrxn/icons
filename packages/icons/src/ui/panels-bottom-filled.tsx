import type { Icon } from './types'

export const IconPanelsBottomFilled: Icon = ({
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
      data-slot='icon-ui-panels-bottom-filled'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        x='21.26'
        y='11.91'
        width='9.35'
        height='18.53'
        rx='2'
        transform='rotate(90 21.26 11.91)'
        fill='currentColor'
      />
      <rect
        x='21.26'
        y='2.73'
        width='18.53'
        height='18.53'
        rx='3'
        transform='rotate(90 21.26 2.73)'
        stroke='currentColor'
      />
      <path d='M3.13 12h17.74' stroke='currentColor' />
    </svg>
  )
}
