import type { Icon } from './types'

export const IconAirplaneTakeoff: Icon = ({
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
      data-slot='ui-icon-airplane-takeoff'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path d='M21.42 20.62H2.3' stroke='currentColor' strokeWidth={strokeWidth} />
      <path
        opacity='.2'
        d='m8.14 16.28 9.65-5.4 1.45-.82c1.41-.8 2.12-1.19 2.01-2.18s-.68-1.16-1.83-1.49a4.5 4.5 0 0 0-3.55.45l-.04.02c-.91.5-1.37.75-1.75.75-.39 0-1.06-.37-2.42-1.1-1.24-.68-2.69-1.13-3.53-.66l-.66.37c-.77.43-1.16.65-1.15.95 0 .3.42.5 1.24.9l.79.4c.84.45 1.26.68 1.27 1.27 0 .6-.47.86-1.41 1.39l-.94.52c-.4.22-.6.34-.82.35-.22.02-.43-.06-.86-.22l-1.08-.41-.36-.12a1 1 0 0 0-.5.04c-.09.03-.17.07-.33.17-.52.28-.77.43-.9.6a1 1 0 0 0-.05 1.11c.1.19.35.35.83.69l1.91 1.31 1.83 1.1c.37.21.83.22 1.2 0'
        fill='currentColor'
      />
      <path
        d='m10.7 14.84 7.09-3.97 2.63-1.47c.88-.5 1.32-.74 1.32-1.32S21.4 7.3 20.7 6.9a5.4 5.4 0 0 0-4.74-.3q-.25.08-.76.32c-.96.43-1.45.65-1.8.64s-1.01-.38-2.33-1.1a4.5 4.5 0 0 0-4.15-.25c-.73.34-1.1.5-1.11.8s.4.56 1.23 1.1l.65.41c.84.57 1.26.85 1.26 1.39s-.5.85-1.47 1.5l-.12.07c-.47.31-.7.47-.94.5-.24.02-.49-.07-.98-.26l-.95-.36c-.16-.06-.24-.1-.33-.1a1 1 0 0 0-.52.03q-.1.04-.31.16c-.49.27-.73.4-.85.56a1 1 0 0 0-.04 1.18c.1.17.34.32.8.63l1.25.81c1.49.97 2.23 1.45 3.06 1.48s1.61-.4 3.16-1.27'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
