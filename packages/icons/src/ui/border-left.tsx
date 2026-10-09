import type { Icon } from './types'

export const IconBorderLeft: Icon = ({
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
      data-slot='icon-ui-border-left'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='1.41'
        y='2.69'
        width='18.48'
        height='18.48'
        rx='3'
        fill='currentColor'
      />
      <path d='M10.65 8.57v6.73' stroke='currentColor' />
      <path d='M7.29 11.93h6.73' stroke='currentColor' />
      <path
        d='M3.98 21.17a2.57 2.57 0 0 1-2.57-2.56V5.26a2.57 2.57 0 0 1 2.57-2.57'
        stroke='currentColor'
      />
      <path d='M17.26 21.23h.06a2.6 2.6 0 0 0 2.61-2.62' stroke='currentColor' />
      <path d='M17.4 2.64h.06c1.37 0 2.47 1.1 2.47 2.47' stroke='currentColor' />
      <path d='M19.87 13.09v-2.25' stroke='currentColor' />
      <path d='M11.76 2.74H9.52' stroke='currentColor' />
      <path d='M11.76 21.22H9.52' stroke='currentColor' />
    </svg>
  )
}
