import type { Icon } from './types'

export const IconAlignCenterVertical: Icon = ({
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
      data-slot='ui-icon-align-center-vertical'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='20.2'
        y='4.58'
        width='5.8'
        height='16.4'
        rx='2'
        transform='rotate(90 20.2 4.58)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        x='18.21'
        y='13.62'
        width='5.8'
        height='12.42'
        rx='2'
        transform='rotate(90 18.21 13.62)'
        fill='currentColor'
      />
      <rect
        x='20.2'
        y='4.58'
        width='5.8'
        height='16.4'
        rx='2'
        transform='rotate(90 20.2 4.58)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='18.21'
        y='13.62'
        width='5.8'
        height='12.42'
        rx='2'
        transform='rotate(90 18.21 13.62)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path d='M12 2v2.58m0 14.84V22m0-11.3v2.59' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
