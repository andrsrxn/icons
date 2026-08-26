import type { Icon } from './types'

export const IconFireAlarm: Icon = ({
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
      data-slot='ui-icon-fire-alarm'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        width='4.02'
        height='18.01'
        rx='1'
        transform='matrix(0 -1 -1 0 20.8 20.96)'
        fill='currentColor'
      />
      <path
        d='M4.3 16.56c0-5.47 2.2-9.9 7.7-9.9s7.7 4.16 7.7 9.9'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M14.56 10.53a3.8 3.8 0 0 1 1.52 3.45'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        width='4.02'
        height='18.66'
        rx='1'
        transform='matrix(0 -1 -1 0 21.33 20.96)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M12 4V2.25M5.82 5.82 4.9 4.45m13.24 1.37.96-1.37'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
