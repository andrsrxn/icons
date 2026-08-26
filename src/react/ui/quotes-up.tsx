import type { Icon } from './types'

export const IconQuotesUp: Icon = ({
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
      data-slot='ui-icon-quotes-up'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M20.67 7.45a3.7 3.7 0 1 0-7.42 0 3.7 3.7 0 0 0 7.42 0m-10.25 0a3.7 3.7 0 1 0-7.42 0 3.7 3.7 0 0 0 7.42 0'
        fill='currentColor'
      />
      <path
        d='M20.66 7.45a3.7 3.7 0 0 0-3.7-3.71 3.7 3.7 0 1 0 3.7 3.7m-10.24.01A3.7 3.7 0 0 0 6.7 3.74a3.7 3.7 0 1 0 3.7 3.7'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M20.66 7.5c0 1.55.1 4.46-.88 7.06a12.5 12.5 0 0 1-4.67 6.13M10.42 7.5c0 1.55.1 4.46-.89 7.06a12.5 12.5 0 0 1-4.67 6.13'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
