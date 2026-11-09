import type { Icon } from './types'

export const IconDeviceLaptopOff: Icon = ({
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
      data-slot='icon-ui-device-laptop-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
      <path
        opacity='.2'
        d='M3.37 15.41c.15-.23.23-.34.33-.43a1 1 0 0 1 .4-.21c.13-.04.27-.04.54-.04h14.7c.27 0 .4 0 .53.04a1 1 0 0 1 .4.2c.1.1.18.2.33.43.98 1.43 1.47 2.14 1.49 2.74a2 2 0 0 1-.91 1.73c-.5.32-1.37.32-3.1.32H5.9c-1.72 0-2.59 0-3.09-.33a2 2 0 0 1-.9-1.7c0-.6.49-1.31 1.45-2.75'
        fill='currentColor'
      />
      <path
        d='M20.02 14.73v-3.92c0-3.3 0-4.95-1.02-5.98-1.03-1.02-2.68-1.02-5.98-1.02h-2q-2.01-.02-3.3.07m-3.7 10.85v-3.92c0-3.07 0-4.71.83-5.75'
        stroke='currentColor'
      />
      <path
        d='M3.96 14.73c-1.54 1.92-2.3 2.88-2.23 3.69a2 2 0 0 0 .6 1.24c.58.57 1.8.57 4.27.57h10.86c1.14 0 2 0 2.67-.06m-.11-5.44c1.58 1.88 2.37 2.82 2.32 3.62'
        stroke='currentColor'
      />
      <path d='M14.67 14.73H4.02' stroke='currentColor' />
      <path d='M20.02 14.73H18' stroke='currentColor' />
    </svg>
  )
}
