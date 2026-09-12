import type { Icon } from './types'

export const IconBluetoothX: Icon = ({
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
      data-slot='icon-ui-bluetooth-x'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' d='M16.43 6.36 8.81 12l.52-10.14z' fill='currentColor' />
      <path opacity='.2' d='M16.43 17.64 8.81 12l.52 10.14z' fill='currentColor' />
      <path
        d='M1.7 17.25 14.44 8c1.03-.75 1.54-1.12 1.54-1.63 0-.52-.52-.88-1.55-1.62l-2.47-1.76c-1.38-1-2.08-1.49-2.62-1.2-.54.27-.54 1.12-.54 2.82V19.4c0 1.7 0 2.55.54 2.83s1.24-.22 2.62-1.2l2.46-1.76c1.04-.74 1.55-1.11 1.55-1.63 0-.5-.51-.88-1.54-1.62L1.69 6.8'
        stroke='currentColor'
      />
      <path d='m17.53 9.61 4.78 4.78' stroke='currentColor' />
      <path d='m17.53 14.39 4.78-4.78' stroke='currentColor' />
    </svg>
  )
}
