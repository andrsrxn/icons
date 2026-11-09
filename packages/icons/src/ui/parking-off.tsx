import type { Icon } from './types'

export const IconParkingOff: Icon = ({
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
      data-slot='icon-ui-parking-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.58 12a10.41 10.41 0 1 0 20.83 0 10.41 10.41 0 0 0-20.83 0'
        fill='currentColor'
      />
      <path d='m2.68 2.68 18.64 18.64' stroke='currentColor' />
      <path
        d='M4.56 4.72a10.4 10.4 0 0 0 0 14.56 10.4 10.4 0 0 0 14.73.16M7.16 2.78a10.41 10.41 0 0 1 14.06 14.06'
        stroke='currentColor'
      />
      <path
        d='M10.16 6.62h3.29a3.3 3.3 0 0 1 3.22 3.4c0 .9-.34 1.73-.88 2.34'
        stroke='currentColor'
      />
      <path d='M9.16 9.4v9.1m4.02-5.07H9.2' stroke='currentColor' />
    </svg>
  )
}
