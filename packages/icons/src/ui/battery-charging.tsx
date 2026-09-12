import type { Icon } from './types'

export const IconBatteryCharging: Icon = ({
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
      data-slot='icon-ui-battery-charging'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='1.74' y='6' width='17.23' height='12' rx='3' fill='currentColor' />
      <rect x='1.74' y='6' width='17.23' height='12' rx='3' stroke='currentColor' />
      <path
        d='m18.97 8.44.94.36c1.02.39 1.53.58 1.86.96q.15.16.25.36c.24.44.24 1 .24 2.08 0 1.11 0 1.67-.25 2.12a2 2 0 0 1-.25.35c-.34.39-.86.58-1.9.96l-.9.32'
        stroke='currentColor'
      />
      <path
        d='M10.34 9.09 9.2 10.32c-.67.72-1 1.08-.87 1.38s.62.3 1.6.3h.8c1.01 0 1.52 0 1.65.3s-.23.67-.94 1.4l-1.1 1.13'
        stroke='currentColor'
      />
    </svg>
  )
}
