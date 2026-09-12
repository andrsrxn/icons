import type { Icon } from './types'

export const IconWifiHigh: Icon = ({
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
      data-slot='icon-ui-wifi-high'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M12.9 18.51a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M7.63 15.79c1.06-1.29 2.43-1.87 4.37-1.87s3.3.58 4.37 1.87' stroke='currentColor' />
      <path d='M4.77 12.6C6.52 10.47 8.79 9.5 12 9.5s5.48.97 7.23 3.1' stroke='currentColor' />
      <path d='M2.22 9.5C4.6 6.62 7.66 5.3 12 5.3s7.4 1.32 9.78 4.2' stroke='currentColor' />
    </svg>
  )
}
