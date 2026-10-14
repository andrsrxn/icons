import type { Icon } from './types'

export const IconSignalStatusLow: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-signal-status-low'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7 15.36c0-.94 0-1.42-.3-1.7-.29-.3-.76-.3-1.7-.3h-.25c-.94 0-1.4 0-1.7.3-.3.28-.3.76-.3 1.7v3.85c0 .94 0 1.41.3 1.7s.76.3 1.7.3H5c.94 0 1.41 0 1.7-.3.3-.29.3-.76.3-1.7z'
        fill='currentColor'
      />
      <rect
        width='4.25'
        height='7.85'
        rx='1'
        transform='matrix(-1 0 0 1 7 13.36)'
        stroke='currentColor'
      />
    </svg>
  )
}
