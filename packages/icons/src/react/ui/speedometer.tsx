import type { Icon } from './types'

export const IconSpeedometer: Icon = ({
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
      data-slot='ui-icon-speedometer'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M2.57 12a9.43 9.43 0 1 0 18.86 0 9.43 9.43 0 0 0-18.86 0'
        fill='currentColor'
      />
      <path
        d='M13.38 11.75a1.4 1.4 0 1 1-2.75.5 1.4 1.4 0 0 1 2.75-.5'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M15.34 6.74 13 10.72M2.57 12A9.4 9.4 0 0 0 12 21.43 9.43 9.43 0 1 0 2.57 12'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M6.01 12.16c0-3.3 2.68-5.98 5.99-5.98m5.66 2.58c.76 1.03 1 3 .76 3.95'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
