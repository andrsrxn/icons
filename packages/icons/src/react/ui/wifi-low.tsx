import type { Icon } from './types'

export const IconWifiLow: Icon = ({
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
      data-slot='ui-icon-wifi-low'
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
        d='M7.63 15.79c1.06-1.29 2.43-1.87 4.37-1.87s3.3.58 4.37 1.87'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
