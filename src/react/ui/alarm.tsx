import type { Icon } from './types'

export const IconAlarm: Icon = ({
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
      data-slot='ui-icon-alarm'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='12' cy='12.82' r='8.82' fill='currentColor' />
      <circle cx='12' cy='12.82' r='8.82' stroke='currentColor' strokeWidth={strokeWidth} />
      <path
        d='M22 6.48 17.52 2M2 6.48 6.48 2m9 14.07-2.28-1.51c-.87-.58-1.3-.87-1.54-1.32-.23-.44-.23-.96-.23-2V7.92'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
