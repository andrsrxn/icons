import type { Icon } from './types'

export const IconLogs: Icon = ({
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
      data-slot='ui-icon-logs'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M13.9 5.76h6.85M13.9 12h6.85m-6.85 6.24h6.85M3.25 5.76h1.19M3.25 12h1.19m-1.19 6.24h1.19M7.8 5.76h2.73M7.8 12h2.73M7.8 18.24h2.73'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
