import type { Icon } from './types'

export const IconMouseLeftClick: Icon = ({
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
      data-slot='icon-ui-mouse-left-click'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M13.66 17.1v-1.6c0-.95-.43-1.85-1.17-2.44q-.75-.61-1.03-1.52l-.17-.55a4 4 0 0 1 .03-2.35l.14-.4a2.6 2.6 0 0 1 1.03-1.35 2.6 2.6 0 0 0 1.17-2.17V2.18a8.46 8.46 0 0 0-8.47 8.46v6.47z'
        fill='currentColor'
      />
      <path opacity='.2' d='M5.58 17.1h16.6v5.31H5.59z' fill='currentColor' />
      <path d='M3.46 5.99H1.81' stroke='currentColor' />
      <path d='m5.01 2.96-.98-1.37' stroke='currentColor' />
      <path d='M5.58 22.41V10.38a8.3 8.3 0 1 1 16.6 0v12.03' stroke='currentColor' />
      <path d='M22.19 17.34H5.58' stroke='currentColor' />
      <rect
        width='4.62'
        height='7.06'
        rx='2.31'
        transform='matrix(-1 0 0 1 16.11 6.68)'
        stroke='currentColor'
      />
      <path d='M13.84 17.3v-3.56' stroke='currentColor' />
      <path d='M13.84 6.62V3' stroke='currentColor' />
    </svg>
  )
}
