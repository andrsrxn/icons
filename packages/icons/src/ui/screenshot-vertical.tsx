import type { Icon } from './types'

export const IconScreenshotVertical: Icon = ({
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
      data-slot='icon-ui-screenshot-vertical'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='19.25'
        y='22.2'
        width='14.5'
        height='20.4'
        rx='3'
        transform='rotate(-180 19.25 22.2)'
        fill='currentColor'
      />
      <rect
        x='19.25'
        y='22.2'
        width='14.5'
        height='20.4'
        rx='3'
        transform='rotate(-180 19.25 22.2)'
        stroke='currentColor'
      />
      <path
        d='M7.82 10.56V9.4c0-1.89 0-2.83.58-3.42.59-.58 1.53-.58 3.42-.58h1.16'
        stroke='currentColor'
      />
      <path
        d='M16.18 13.44v1.16c0 1.89 0 2.83-.58 3.42-.59.58-1.53.58-3.42.58h-1.16'
        stroke='currentColor'
      />
    </svg>
  )
}
