import type { Icon } from './types'

export const IconPanelsTop: Icon = ({
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
      data-slot='ui-icon-panels-top'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        width='9.35'
        height='16.71'
        rx='2'
        transform='matrix(0 -1 -1 0 20.36 12.09)'
        fill='currentColor'
      />
      <rect
        width='18.53'
        height='16.71'
        rx='3'
        transform='matrix(0 -1 -1 0 20.36 21.26)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path d='M4 12h16' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
