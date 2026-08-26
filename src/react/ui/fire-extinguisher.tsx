import type { Icon } from './types'

export const IconFireExtinguisher: Icon = ({
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
      data-slot='ui-icon-fire-extinguisher'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        fill='currentColor'
        d='M8.82 13.06h7.37v7.77H8.82zm2.07-10.18h3.23v3.41h-3.23z'
      />
      <rect
        x='8.53'
        y='6.72'
        width='7.94'
        height='14.71'
        rx='2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M16.47 13.06H8.82m5.76-6.34V4.57c0-.94 0-1.41-.3-1.7s-.76-.3-1.7-.3h-.15c-.94 0-1.41 0-1.7.3-.3.29-.3.76-.3 1.7v2.15m0-2.36s-1.35-.13-2.74 0c-1.67.16-2.31 1.9-2.31 3.2 0 1.29 0 2.81-.76 3.95m13.76-7.15h-3.8'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
