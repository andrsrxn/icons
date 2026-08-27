import type { Icon } from './types'

export const IconAirConditioner: Icon = ({
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
      data-slot='ui-icon-air-conditioner'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M17.78 3.25c1.14 0 1.7 0 2.14.23a2 2 0 0 1 .86.85c.22.43.22 1 .22 2.14s0 1.7-.22 2.14a2 2 0 0 1-.86.86c-.43.22-1 .22-2.14.22H6.22c-1.14 0-1.7 0-2.14-.22a2 2 0 0 1-.86-.86C3 8.18 3 7.61 3 6.47s0-1.7.22-2.14a2 2 0 0 1 .86-.85c.43-.23 1-.23 2.14-.23z'
        fill='currentColor'
      />
      <path
        d='M17.6 3.25c1.3 0 1.97 0 2.45.3a2 2 0 0 1 .65.65c.3.49.3 1.14.3 2.46 0 1.31 0 1.97-.3 2.45a2 2 0 0 1-.65.66c-.48.3-1.14.3-2.46.3H6.41c-1.32 0-1.98 0-2.46-.3a2 2 0 0 1-.65-.66C3 8.63 3 7.97 3 6.66s0-1.97.3-2.46a2 2 0 0 1 .65-.65c.48-.3 1.14-.3 2.46-.3zm-.96 10.1.98 1.05.18.2a2 2 0 0 1-.16 2.73l-.2.18-.23.19a2 2 0 0 0 .21 3.09l.85.71m-6.97-8.15 1 1.05.17.2a2 2 0 0 1-.16 2.73l-.2.18-.23.19a2 2 0 0 0 .22 3.09l.84.71m-6.96-8.15.99 1.05.18.2a2 2 0 0 1-.17 2.73l-.2.18-.22.19a2 2 0 0 0 .2 3.09l.85.71'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
