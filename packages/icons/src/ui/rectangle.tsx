import type { Icon } from './types'

export const IconRectangle: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-rectangle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <rect
        opacity='.2'
        width='14.5'
        height='20.4'
        rx='3'
        transform='matrix(0 -1 -1 0 22.2 19.25)'
        fill='currentColor'
      />
      <rect
        width='14.5'
        height='20.4'
        rx='3'
        transform='matrix(0 -1 -1 0 22.2 19.25)'
        stroke='currentColor'
      />
    </svg>
  )
}
