import type { Icon } from './types'

export const IconDoorOpen: Icon = ({
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
      data-slot='ui-icon-door-open'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path opacity='.2' fill='currentColor' d='M13.77 4.21h5.12v17.08h-5.12z' />
      <path
        d='m9.93 12.43 1.68-.35M14.3 21V7c0-2.46 0-3.7-.81-4.3-.8-.6-1.98-.24-4.34.47l-1.18.35c-1.37.4-2.06.61-2.46 1.15s-.4 1.25-.4 2.68v13.67m15.89.27H3M14.3 4.2h.58c1.89 0 2.83 0 3.42.6.58.58.58 1.52.58 3.4V21'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
