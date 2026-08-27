import type { Icon } from './types'

export const IconAlignVertically: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-align-vertically'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        width='5.8'
        height='15.49'
        rx='2'
        transform='matrix(0 1 1 0 4.25 9.1)'
        fill='currentColor'
      />
      <rect
        width='5.8'
        height='15.49'
        rx='2'
        transform='matrix(0 1 1 0 4.25 9.1)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path d='M21.57 5H2.43m19.14 14H2.43' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
