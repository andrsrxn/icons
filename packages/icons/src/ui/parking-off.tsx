import type { Icon } from './types'

export const IconParkingOff: Icon = ({
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
      data-slot='icon-ui-parking-off'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.58 12a10.41 10.41 0 1 0 20.83 0 10.41 10.41 0 0 0-20.83 0'
        fill='currentColor'
      />
      <path d='m2.68 2.68 18.64 18.64' stroke='currentColor' />
      <path d='M1.6 12A10.4 10.4 0 0 0 12 22.41 10.41 10.41 0 1 0 1.6 12' stroke='currentColor' />
      <path d='M9.13 6.44v11.94' stroke='currentColor' />
      <path
        d='M9.18 6.44h4.26a3.33 3.33 0 0 1 3.23 3.42 3.33 3.33 0 0 1-3.23 3.42H9.18'
        stroke='currentColor'
      />
    </svg>
  )
}
