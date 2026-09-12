import type { Icon } from './types'

export const IconVehicleBattery: Icon = ({
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
      data-slot='icon-ui-vehicle-battery'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='1.69'
        y='6.63'
        width='20.62'
        height='13.74'
        rx='2'
        fill='currentColor'
      />
      <rect x='1.69' y='6.63' width='20.62' height='13.74' rx='3' stroke='currentColor' />
      <path
        d='M19.6 6.63v-1c0-.94 0-1.41-.3-1.7-.29-.3-.76-.3-1.7-.3h-.5c-.94 0-1.41 0-1.7.3-.3.29-.3.76-.3 1.7v1'
        stroke='currentColor'
      />
      <path
        d='M9 6.63v-1c0-.94 0-1.41-.3-1.7-.29-.3-.76-.3-1.7-.3h-.5c-.94 0-1.41 0-1.7.3-.3.29-.3.76-.3 1.7v1'
        stroke='currentColor'
      />
      <path d='M17.18 13.84V9.68' stroke='currentColor' />
      <path d='M8.69 11.6h-3.5' stroke='currentColor' />
      <path d='M19.26 11.77H15.1' stroke='currentColor' />
    </svg>
  )
}
