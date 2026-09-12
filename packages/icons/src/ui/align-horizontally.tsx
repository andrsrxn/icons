import type { Icon } from './types'

export const IconAlignHorizontally: Icon = ({
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
      data-slot='icon-ui-align-horizontally'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='6.21'
        height='16.59'
        rx='2'
        transform='matrix(1 0 0 -1 8.9 20.3)'
        fill='currentColor'
      />
      <rect
        width='6.21'
        height='16.59'
        rx='2'
        transform='matrix(1 0 0 -1 8.9 20.3)'
        stroke='currentColor'
      />
      <path d='M4.5 1.75v20.5' stroke='currentColor' />
      <path d='M19.5 1.75v20.5' stroke='currentColor' />
    </svg>
  )
}
