import type { Icon } from './types'

export const IconBatteryEmpty: Icon = ({
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
      data-slot='icon-ui-battery-empty'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect x='1.72' y='6' width='17.26' height='12' rx='3' stroke='currentColor' />
      <path
        d='m18.98 8.32.88.34c1.11.44 1.67.65 2 1.1l.13.18c.3.48.3 1.07.29 2.27 0 1.21 0 1.82-.3 2.3q-.05.1-.12.19c-.35.44-.92.65-2.05 1.08l-.83.31'
        stroke='currentColor'
      />
    </svg>
  )
}
