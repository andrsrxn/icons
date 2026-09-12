import type { Icon } from './types'

export const IconThermometerSun: Icon = ({
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
      data-slot='icon-ui-thermometer-sun'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M14.93 14.33V3.98a2.01 2.01 0 1 1 4.02 0v10.35s1.75 1.91 1.75 3.55a3.76 3.76 0 1 1-7.52 0c0-1.64 1.75-3.55 1.75-3.55'
        fill='currentColor'
      />
      <path d='M14.75 14.7a4.06 4.06 0 1 0 4.37 0' stroke='currentColor' />
      <path
        d='M19.06 14.6V3.73a2 2 0 0 0-1.91-1.91h-.41a2 2 0 0 0-1.91 1.9v10.9'
        stroke='currentColor'
      />
      <path
        d='M17.44 18.04a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='m10.57 5.37-.3-1.94m-3.8 4.56L4.9 6.84m.38 6.13-1.95.3m3.45 5.67 1.16-1.6'
        stroke='currentColor'
      />
      <path d='M14.82 10.2a3.42 3.42 0 1 0-.26 4.15' stroke='currentColor' />
    </svg>
  )
}
