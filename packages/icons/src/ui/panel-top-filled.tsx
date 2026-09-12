import type { Icon } from './types'

export const IconPanelTopFilled: Icon = ({
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
      data-slot='icon-ui-panel-top-filled'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        width='6.62'
        height='18.55'
        rx='2'
        transform='matrix(0 -1 -1 0 21.28 9.35)'
        fill='currentColor'
      />
      <rect
        width='18.53'
        height='18.55'
        rx='3'
        transform='scale(1 -1)rotate(90 21.27 0)'
        stroke='currentColor'
      />
      <path d='M3.12 9.35h17.76' stroke='currentColor' />
    </svg>
  )
}
