import type { Icon } from './types'

export const IconClock: Icon = ({
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
      data-slot='ui-icon-clock'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='12' cy='12' r='9.32' fill='currentColor' />
      <circle cx='12' cy='12' r='9.32' stroke='currentColor' strokeWidth={strokeWidth} />
      <path
        d='m15.67 15.44-2.5-1.67c-.87-.58-1.3-.87-1.54-1.31s-.24-.97-.24-2.02V6.83'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
