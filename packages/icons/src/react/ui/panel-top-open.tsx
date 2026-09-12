import type { Icon } from './types'

export const IconPanelTopOpen: Icon = ({
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
      data-slot='icon-ui-panel-top-open'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m15.9 16.8-1.07-1.08c-1.33-1.33-2-2-2.83-2s-1.5.67-2.83 2L8.1 16.79'
        stroke='currentColor'
      />
      <rect
        opacity='.2'
        width='6.62'
        height='18.46'
        rx='2'
        transform='matrix(0 -1 -1 0 21.23 9.35)'
        fill='currentColor'
      />
      <rect
        width='18.53'
        height='18.46'
        rx='3'
        transform='matrix(0 -1 -1 0 21.23 21.27)'
        stroke='currentColor'
      />
      <path d='M3.16 9.35h17.68' stroke='currentColor' />
    </svg>
  )
}
