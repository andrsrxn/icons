import type { Icon } from './types'

export const IconDecimalsMore: Icon = ({
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
      data-slot='ui-icon-decimals-more'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M16.39 4.63a2.23 2.23 0 1 1 4.46 0v3.38a2.23 2.23 0 1 1-4.46 0zM8.95 15.99a2.23 2.23 0 1 1 4.46 0v3.38a2.23 2.23 0 0 1-4.46 0zm7.44 0a2.23 2.23 0 1 1 4.46 0v3.38a2.23 2.23 0 0 1-4.46 0z'
        fill='currentColor'
      />
      <path
        d='M16.39 4.63a2.23 2.23 0 1 1 4.46 0v3.38a2.23 2.23 0 1 1-4.46 0zM8.95 15.99a2.23 2.23 0 0 1 4.46 0v3.38a2.23 2.23 0 0 1-4.46 0zm7.44 0a2.23 2.23 0 1 1 4.46 0v3.38a2.23 2.23 0 0 1-4.46 0z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M13.4 9.78a.47.47 0 1 1-.92 0 .47.47 0 0 1 .93 0M5.97 21.13a.47.47 0 1 1-.93 0 .47.47 0 0 1 .93 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m5.53 2.76-.7.7c-1.33 1.33-2 2-2 2.82 0 .83.67 1.5 2 2.83l.7.7m5.07-3.52H3.21'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
