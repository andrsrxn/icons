import type { Icon } from './types'

export const IconRatio: Icon = ({
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
      data-slot='ui-icon-ratio'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='6.39'
        y='6.39'
        width='11.22'
        height='11.22'
        rx='3'
        fill='currentColor'
      />
      <rect
        x='2.74'
        y='6.39'
        width='18.53'
        height='11.22'
        rx='3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='6.39'
        y='21.26'
        width='18.53'
        height='11.22'
        rx='3'
        transform='rotate(-90 6.39 21.26)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
