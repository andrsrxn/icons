import type { Icon } from './types'

export const IconVpn: Icon = ({
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
      data-slot='icon-ui-vpn'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M14.73 4.37a2.73 2.73 0 1 1-5.46 0 2.73 2.73 0 0 1 5.46 0m0 15.26a2.73 2.73 0 1 1-5.46 0 2.73 2.73 0 0 1 5.46 0M7 11.9a2.73 2.73 0 1 1-5.46 0 2.73 2.73 0 0 1 5.46 0m15.46 0a2.73 2.73 0 1 1-5.46 0 2.73 2.73 0 0 1 5.46 0'
        fill='#000'
      />
      <path
        d='M14.73 4.37A2.7 2.7 0 0 1 12 7.1a2.73 2.73 0 1 1 2.73-2.73m0 15.26A2.7 2.7 0 0 1 12 22.36a2.73 2.73 0 1 1 2.73-2.73M7 11.9a2.7 2.7 0 0 1-2.73 2.73A2.73 2.73 0 1 1 7 11.9m15.46 0a2.7 2.7 0 0 1-2.73 2.73 2.73 2.73 0 1 1 2.73-2.73M9.83 6.33l-3.5 3.5M18 14l-3.5 3.5M7 11.9h10'
        stroke='#000'
      />
    </svg>
  )
}
