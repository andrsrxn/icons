import type { Icon } from './types'

export const IconVehicleBattery: Icon = ({
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
      data-slot='ui-icon-vehicle-battery'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='2.65'
        y='7.13'
        width='18.69'
        height='12.45'
        rx='2'
        fill='currentColor'
      />
      <rect
        x='2.65'
        y='7.13'
        width='18.69'
        height='12.45'
        rx='3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M18.88 7.13v-.71c0-.95 0-1.42-.29-1.71-.3-.3-.76-.3-1.7-.3h-.08c-.94 0-1.42 0-1.7.3-.3.3-.3.76-.3 1.7v.72m-5.53 0v-.71c0-.95 0-1.42-.3-1.71-.28-.3-.76-.3-1.7-.3h-.07c-.95 0-1.42 0-1.71.3s-.3.76-.3 1.7v.72m11.5 6.53V9.9M9 11.63H5.84m12.74.16H14.8'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
