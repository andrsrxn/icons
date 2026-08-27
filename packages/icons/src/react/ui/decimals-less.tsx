import type { Icon } from './types'

export const IconDecimalsLess: Icon = ({
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
      data-slot='ui-icon-decimals-less'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M16.39 4.63a2.23 2.23 0 1 1 4.46 0v3.38a2.23 2.23 0 1 1-4.46 0zm-7.44 0a2.23 2.23 0 1 1 4.46 0v3.38a2.23 2.23 0 1 1-4.46 0zm7.44 11.36a2.23 2.23 0 1 1 4.46 0v3.38a2.23 2.23 0 0 1-4.46 0z'
        fill='currentColor'
      />
      <path
        d='M16.39 4.63a2.23 2.23 0 1 1 4.46 0v3.38a2.23 2.23 0 1 1-4.46 0zm-7.44 0a2.23 2.23 0 1 1 4.46 0v3.38a2.23 2.23 0 1 1-4.46 0zm7.44 11.36a2.23 2.23 0 1 1 4.46 0v3.38a2.23 2.23 0 1 1-4.46 0z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M13.4 21.13a.47.47 0 1 1-.92 0 .47.47 0 0 1 .93 0M5.97 9.78a.47.47 0 1 1-.93 0 .47.47 0 0 1 .93 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m7.65 14.15.7.7c1.33 1.33 2 2 2 2.82 0 .83-.67 1.5-2 2.83l-.7.7m-5.08-3.52h7.4'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
