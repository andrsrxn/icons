import type { Icon } from './types'

export const IconSplitVertical: Icon = ({
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
      data-slot='icon-ui-split-vertical'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='4.59'
        y='22.2'
        width='20.39'
        height='14.83'
        rx='3'
        transform='rotate(-90 4.59 22.2)'
        fill='currentColor'
      />
      <rect
        x='4.59'
        y='22.2'
        width='20.39'
        height='14.83'
        rx='3'
        transform='rotate(-90 4.59 22.2)'
        stroke='currentColor'
      />
      <path d='M2.12 12h19.76' stroke='currentColor' />
    </svg>
  )
}
