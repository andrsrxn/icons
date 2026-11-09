import type { Icon } from './types'

export const IconVehicleBatteryOff: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-vehicle-battery-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.69 13.5c0-2.69 0-4.03.62-5.01a4 4 0 0 1 1.24-1.24c.98-.62 2.32-.62 5-.62h6.9c2.68 0 4.02 0 5 .62a4 4 0 0 1 1.24 1.24c.62.98.62 2.32.62 5 0 2.7 0 4.04-.62 5.02a4 4 0 0 1-1.24 1.24c-.98.62-2.32.62-5 .62h-6.9c-2.68 0-4.02 0-5-.62a4 4 0 0 1-1.24-1.24c-.62-.98-.62-2.33-.62-5.01'
        fill='currentColor'
      />
      <path
        d='M6.65 6.64c-1.48.03-2.39.15-3.1.6A4 4 0 0 0 2.31 8.5c-.62.98-.62 2.32-.62 5 0 2.7 0 4.04.62 5.02a4 4 0 0 0 1.24 1.24c.98.62 2.32.62 5 .62h6.9c2.28 0 3.6 0 4.54-.39'
        stroke='currentColor'
      />
      <path
        d='M10.54 6.63h4.9c2.69 0 4.03 0 5.01.62a4 4 0 0 1 1.24 1.24c.62.98.62 2.32.62 5 0 1.55 0 2.66-.12 3.5q-.06.48-.19.86'
        stroke='currentColor'
      />
      <path
        d='M19.6 6.63v-1c0-.94 0-1.41-.3-1.7-.29-.3-.76-.3-1.7-.3h-.5c-.94 0-1.41 0-1.7.3-.3.29-.3.76-.3 1.7v1'
        stroke='currentColor'
      />
      <path d='M7 3.63c.94 0 1.41 0 1.7.3.3.29.3.94.3 1.37' stroke='currentColor' />
      <path d='M4.5 6.63v-1c0-.48 0-.8.04-1.08' stroke='currentColor' />
      <path d='M17.18 13.5V9.68' stroke='currentColor' />
      <path d='M8.69 11.6h-3.5' stroke='currentColor' />
      <path d='M19.26 11.77H15.6' stroke='currentColor' />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
    </svg>
  )
}
