import type { Icon } from './types'

export const IconAlignLeft: Icon = ({
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
      data-slot='icon-ui-align-left'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='6.44'
        height='17.2'
        rx='2'
        transform='matrix(0 1 1 0 5.09 3.81)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='6.44'
        height='12.9'
        rx='2'
        transform='matrix(0 1 1 0 5.09 13.85)'
        fill='currentColor'
      />
      <rect
        width='6.44'
        height='17.2'
        rx='2'
        transform='matrix(0 1 1 0 5.09 3.81)'
        stroke='currentColor'
      />
      <rect
        width='6.44'
        height='12.9'
        rx='2'
        transform='matrix(0 1 1 0 5.09 13.85)'
        stroke='currentColor'
      />
      <path d='M1.72 2.85v18.4' stroke='currentColor' />
    </svg>
  )
}
