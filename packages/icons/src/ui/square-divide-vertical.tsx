import type { Icon } from './types'

export const IconSquareDivideVertical: Icon = ({
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
      data-slot='icon-ui-square-divide-vertical'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='17.59'
        height='17.59'
        rx='3'
        transform='matrix(-1 0 0 1 20.72 3.13)'
        fill='currentColor'
      />
      <rect
        width='17.59'
        height='17.59'
        rx='3'
        transform='matrix(-1 0 0 1 20.72 3.13)'
        stroke='currentColor'
      />
      <path d='M11.75 22.34V1.66' stroke='currentColor' />
    </svg>
  )
}
