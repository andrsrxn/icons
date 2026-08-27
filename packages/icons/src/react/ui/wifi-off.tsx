import type { Icon } from './types'

export const IconWifiOff: Icon = ({
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
      data-slot='ui-icon-wifi-off'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M12.9 18.51a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M7.63 15.79c1.06-1.29 2.43-1.87 4.37-1.87.7 0 1.53.13 2.09.28m-9.32-1.6C6.52 10.47 8.79 9.5 12 9.5s5.48.97 7.23 3.1M2.22 9.5C4.6 6.62 7.66 5.3 12 5.3s7.4 1.32 9.78 4.2M3.3 3.3l17.4 17.4'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
