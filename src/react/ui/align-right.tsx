import type { Icon } from './types'

export const IconAlignRight: Icon = ({
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
      data-slot='ui-icon-align-right'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='18.23'
        y='4.63'
        width='5.8'
        height='15.49'
        rx='2'
        transform='rotate(90 18.23 4.63)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        x='18.23'
        y='13.68'
        width='5.8'
        height='11.62'
        rx='2'
        transform='rotate(90 18.23 13.68)'
        fill='currentColor'
      />
      <rect
        x='18.23'
        y='13.68'
        width='5.8'
        height='11.62'
        rx='2'
        transform='rotate(90 18.23 13.68)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='18.23'
        y='4.63'
        width='5.8'
        height='15.49'
        rx='2'
        transform='rotate(90 18.23 4.63)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path d='M21.26 3.76v16.58' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
