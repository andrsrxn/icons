import type { Icon } from './types'

export const IconAlignVertically: Icon = ({
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
      data-slot='icon-ui-align-vertically'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='6.24'
        height='16.66'
        rx='2'
        transform='matrix(0 1 1 0 3.67 8.88)'
        fill='currentColor'
      />
      <rect
        width='6.24'
        height='16.66'
        rx='2'
        transform='matrix(0 1 1 0 3.67 8.88)'
        stroke='currentColor'
      />
      <path d='M22.3 4.47H1.7' stroke='currentColor' />
      <path d='M22.3 19.53H1.7' stroke='currentColor' />
    </svg>
  )
}
