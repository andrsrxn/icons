import type { Icon } from './types'

export const IconBluetooth: Icon = ({
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
      data-slot='ui-icon-bluetooth'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='m5.11 16.86 11.64-8.44c1.03-.75 1.54-1.12 1.54-1.63 0-.52-.52-.88-1.55-1.62l-1.88-1.34c-1.38-1-2.08-1.49-2.62-1.2-.54.27-.54 1.12-.54 2.82v13.1c0 1.7 0 2.55.54 2.83s1.24-.22 2.62-1.2l1.87-1.34c1.04-.74 1.55-1.11 1.56-1.63 0-.5-.52-.88-1.55-1.62L5.11 7.19'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        opacity='.2'
        d='M18.75 6.78 11.7 12l.48-9.39zm0 10.44L11.7 12l.48 9.39z'
        fill='currentColor'
      />
    </svg>
  )
}
