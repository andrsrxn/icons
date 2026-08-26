import type { Icon } from './types'

export const IconBattery: Icon = ({
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
      data-slot='ui-icon-battery'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='2.74'
        y='6.48'
        width='15.55'
        height='10.69'
        rx='3'
        fill='currentColor'
      />
      <rect
        x='2.74'
        y='6.48'
        width='15.55'
        height='10.69'
        rx='3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m18.55 8.65.64.27c.8.33 1.2.5 1.48.77a2 2 0 0 1 .43.65c.16.37.16.8.16 1.67s0 1.31-.16 1.69a2 2 0 0 1-.44.65c-.3.28-.7.44-1.52.76l-.59.24'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
