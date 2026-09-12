import type { Icon } from './types'

export const IconAlignBottom: Icon = ({
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
      data-slot='icon-ui-align-bottom'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='6.42'
        height='17.15'
        rx='2'
        transform='matrix(1 0 0 -1 3.78 18.95)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='6.42'
        height='12.86'
        rx='2'
        transform='matrix(1 0 0 -1 13.8 18.95)'
        fill='currentColor'
      />
      <rect
        width='6.42'
        height='17.15'
        rx='2'
        transform='matrix(1 0 0 -1 3.78 18.95)'
        stroke='currentColor'
      />
      <rect
        width='6.42'
        height='12.86'
        rx='2'
        transform='matrix(1 0 0 -1 13.8 18.95)'
        stroke='currentColor'
      />
      <path d='M2.82 22.3h18.36' stroke='currentColor' />
    </svg>
  )
}
