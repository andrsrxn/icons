import type { Icon } from './types'

export const IconPanelRightFilled: Icon = ({
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
      data-slot='icon-ui-panel-right-filled'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        width='6.62'
        height='18.37'
        rx='2'
        transform='matrix(1 0 0 -1 14.65 21.18)'
        fill='currentColor'
      />
      <rect
        width='18.53'
        height='18.37'
        rx='3'
        transform='matrix(1 0 0 -1 2.74 21.18)'
        stroke='currentColor'
      />
      <path d='M14.65 3.2v17.6' stroke='currentColor' />
    </svg>
  )
}
