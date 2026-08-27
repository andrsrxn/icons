import type { Icon } from './types'

export const IconUsbPort: Icon = ({
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
      data-slot='ui-icon-usb-port'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='15.47' y='6.58' width='2.75' height='2.75' rx='1' fill='currentColor' />
      <rect
        opacity='.2'
        x='10.65'
        y='18.75'
        width='2.66'
        height='2.66'
        rx='1'
        fill='currentColor'
      />
      <rect opacity='.2' x='6.3' y='8.17' width='2.87' height='2.87' rx='1' fill='currentColor' />
      <path
        d='M13.41 20.08a1.43 1.43 0 1 1-2.86 0 1.43 1.43 0 0 1 2.86 0M9.08 9.6a1.38 1.38 0 1 1-2.75 0 1.38 1.38 0 0 1 2.75 0'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m11.98 16.72-2.23-1.25c-1-.56-1.5-.84-1.77-1.3-.27-.48-.27-1.05-.27-2.19v-.99m4.27 3.16 2.92-1.28a5 5 0 0 0 1.36-.75 2 2 0 0 0 .46-.7c.13-.35.13-.74.13-1.54m-4.87 8.77V2.6'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='15.47'
        y='6.58'
        width='2.6'
        height='2.6'
        rx='.5'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m9.59 4.4.97-.98c.67-.67 1-1 1.42-1s.75.33 1.41 1l.99.98'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
