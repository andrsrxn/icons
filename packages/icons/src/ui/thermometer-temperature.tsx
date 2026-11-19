import type { Icon } from './types'

export const IconThermometerTemperature: Icon = ({
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
      data-slot='icon-ui-thermometer-temperature'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M14.29 14.72a4.03 4.03 0 1 0 4.34 0' stroke='currentColor' />
      <path
        d='M18.57 14.62V3.8a2 2 0 0 0-1.92-1.92h-.37a2 2 0 0 0-1.92 1.92v10.81'
        stroke='currentColor'
      />
      <path
        d='M16.96 18.03a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M14.44 14.24V3.86a2.02 2.02 0 0 1 4.04 0v10.38s1.75 1.91 1.75 3.56c0 2.08-1.68 4.36-3.77 4.36s-3.77-2.28-3.77-4.36c0-1.65 1.75-3.56 1.75-3.56'
        fill='currentColor'
      />
      <path d='M3.44 3.74h6.42' stroke='currentColor' />
      <path d='M3.44 7.87h6.42' stroke='currentColor' />
      <path d='M3.44 12h6.42' stroke='currentColor' />
    </svg>
  )
}
