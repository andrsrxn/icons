import type { Icon } from './types'

export const IconBriefcase: Icon = ({
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
      data-slot='ui-icon-briefcase'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='2.53'
        y='10.78'
        width='18.93'
        height='10.41'
        rx='2'
        fill='currentColor'
      />
      <rect
        x='2.53'
        y='7'
        width='18.93'
        height='14.19'
        rx='3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m6 7 .83-1.4c.57-.96.86-1.44 1.32-1.7s1.01-.26 2.12-.26h3.5c1.13 0 1.7 0 2.16.27s.75.76 1.3 1.75L18 7m3.47 4H2.54'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
