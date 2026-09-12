import type { Icon } from './types'

export const IconAsteroid: Icon = ({
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
      data-slot='icon-ui-asteroid'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.4 22.19a6.3 6.3 0 1 0 0-12.6 6.3 6.3 0 0 0 0 12.6m-1.51-9.1q1.7-.31 1.99 1.3c.22 1.23-.18 1.8-1.4 1.92-.95.09-1.65-.11-2-1.3-.32-1.1.47-1.75 1.4-1.92'
        fill='currentColor'
      />
      <path
        d='M14.93 15.89q0 6.3-6.42 6.3c-3.54 0-6.1-1.76-6.4-6.3-.27-3.92 1.57-5.83 6.4-6.3 4.45-.43 6.42 2.82 6.42 6.3'
        stroke='currentColor'
      />
      <path
        d='M6.89 13.09q1.7-.31 1.99 1.3c.22 1.23-.18 1.8-1.4 1.92-.95.09-1.65-.11-2-1.3-.32-1.1.47-1.75 1.4-1.92'
        stroke='currentColor'
      />
      <path
        d='M11.69 17.94a.5.5 0 1 1-1.01 0 .5.5 0 0 1 1 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='m16.31 7.74 5.93-5.93m-4.35 11.8 4.35-4.34m-11.8-3.11 4.34-4.34'
        stroke='currentColor'
      />
    </svg>
  )
}
