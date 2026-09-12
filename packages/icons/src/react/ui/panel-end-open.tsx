import type { Icon } from './types'

export const IconPanelEndOpen: Icon = ({
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
      data-slot='icon-ui-panel-end-open'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m7.2 15.9 1.08-1.07c1.33-1.33 2-2 2-2.83s-.67-1.5-2-2.83L7.2 8.1'
        stroke='currentColor'
      />
      <rect
        opacity='.2'
        width='6.62'
        height='18.36'
        rx='2'
        transform='matrix(1 0 0 -1 14.65 21.18)'
        fill='currentColor'
      />
      <rect
        width='18.53'
        height='18.36'
        rx='3'
        transform='matrix(1 0 0 -1 2.74 21.18)'
        stroke='currentColor'
      />
      <path d='M14.65 3.21V20.8' stroke='currentColor' />
    </svg>
  )
}
