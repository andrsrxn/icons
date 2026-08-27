import type { Icon } from './types'

export const IconServer: Icon = ({
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
      data-slot='ui-icon-server'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='2.83'
        y='9'
        width='6.11'
        height='18.34'
        rx='2'
        transform='rotate(-90 2.83 9)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        x='2.83'
        y='21.23'
        width='6.11'
        height='18.34'
        rx='2'
        transform='rotate(-90 2.83 21.23)'
        fill='currentColor'
      />
      <rect
        x='2.83'
        y='9'
        width='6.11'
        height='18.34'
        rx='2'
        transform='rotate(-90 2.83 9)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='2.83'
        y='15.11'
        width='6.11'
        height='18.34'
        rx='2'
        transform='rotate(-90 2.83 15.11)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='2.83'
        y='21.23'
        width='6.11'
        height='18.34'
        rx='2'
        transform='rotate(-90 2.83 21.23)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M6.83 5.94a.41.41 0 1 1-.83 0 .41.41 0 0 1 .83 0m0 6.12a.41.41 0 1 1-.83 0 .41.41 0 0 1 .83 0m0 6.11a.41.41 0 1 1-.83 0 .41.41 0 0 1 .83 0m4-12.23a.41.41 0 1 1-.83 0 .41.41 0 0 1 .83 0m0 6.12a.41.41 0 1 1-.83 0 .41.41 0 0 1 .83 0m0 6.11a.41.41 0 1 1-.83 0 .41.41 0 0 1 .83 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
