import type { Icon } from './types'

export const IconWifiLow: Icon = ({
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
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-wifi-low'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M12.96 18.36a.96.96 0 1 1-1.92 0 .96.96 0 0 1 1.92 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M7.28 15.12A7.7 7.7 0 0 1 12 13.45c2.1 0 3.55.74 4.72 1.67' stroke='currentColor' />
    </svg>
  )
}
