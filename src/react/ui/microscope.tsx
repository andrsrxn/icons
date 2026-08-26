import type { Icon } from './types'

export const IconMicroscope: Icon = ({
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
      data-slot='ui-icon-microscope'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        x='10.36'
        y='12.69'
        width='3.67'
        height='6.86'
        rx='1.5'
        transform='rotate(90 10.36 12.7)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M9.2 12.32V4.25a2 2 0 0 0-1.78-1.77h-1a2 2 0 0 0-1.76 1.77c-.02.11-.02.24-.02.5v7.57'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        opacity='.2'
        x='9.21'
        y='2.47'
        width='10.49'
        height='4.45'
        rx='2.23'
        transform='rotate(90 9.2 2.47)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        x='20.51'
        y='21.16'
        width='7.58'
        height='3.71'
        rx='1.86'
        transform='rotate(-180 20.5 21.16)'
        fill='currentColor'
      />
      <path
        d='M13.16 21.38v-.55c0-1.5 0-2.25.38-2.78a2 2 0 0 1 .44-.44c.53-.38 1.28-.38 2.78-.38s2.26 0 2.79.38a2 2 0 0 1 .44.44c.38.53.38 1.28.38 2.78v.55m-16.27 0h16.27M9.54 5.4c3.18-.7 7.01 0 8.99 2.98 1.85 2.8.79 6.07 0 8.6'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
