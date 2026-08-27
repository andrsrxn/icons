import type { Icon } from './types'

export const IconBluetoothConnecting: Icon = ({
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
      data-slot='ui-icon-bluetooth-connecting'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M16.35 6.78 9.3 12l.48-9.39zm0 10.44L9.3 12l.48 9.39z'
        fill='currentColor'
      />
      <path
        d='M21.6 12.05a.67.67 0 1 1-1.34 0 .67.67 0 0 1 1.34 0m-4.26 0a.67.67 0 1 1-1.34 0 .67.67 0 0 1 1.34 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M2.67 16.86 14.3 8.42c1.03-.75 1.54-1.12 1.54-1.63 0-.52-.52-.88-1.55-1.62l-1.88-1.34c-1.39-1-2.08-1.49-2.62-1.2-.54.27-.54 1.12-.54 2.82v13.1c0 1.7 0 2.55.54 2.83s1.23-.22 2.62-1.2l1.87-1.34c1.04-.74 1.55-1.11 1.55-1.63 0-.5-.51-.88-1.54-1.62L2.67 7.19'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
