import type { Icon } from './types'

export const IconQuotesDown: Icon = ({
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
      data-slot='ui-icon-quotes-down'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M3.33 16.56a3.7 3.7 0 1 0 7.42 0 3.7 3.7 0 0 0-7.42 0m10.25 0a3.7 3.7 0 1 0 7.42 0 3.7 3.7 0 0 0-7.42 0'
        fill='currentColor'
      />
      <path
        d='M3.34 16.56a3.7 3.7 0 0 0 3.7 3.71 3.7 3.7 0 1 0-3.7-3.7m10.24-.01a3.7 3.7 0 0 0 3.71 3.71 3.7 3.7 0 1 0-3.7-3.7'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3.34 16.51c0-1.55-.1-4.47.88-7.07A12.5 12.5 0 0 1 8.9 3.32m4.68 13.19c0-1.55-.1-4.47.89-7.07a12.5 12.5 0 0 1 4.67-6.12'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
