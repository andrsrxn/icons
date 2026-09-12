import type { Icon } from './types'

export const IconBluetoothOn: Icon = ({
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
      data-slot='icon-ui-bluetooth-on'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m1.67 17.27 12.8-9.3c1.03-.74 1.55-1.1 1.54-1.62 0-.51-.51-.88-1.54-1.62l-2.5-1.78c-1.38-.99-2.07-1.48-2.62-1.2-.54.28-.54 1.13-.54 2.83v14.84c0 1.7 0 2.55.54 2.83.55.28 1.24-.21 2.62-1.2l2.49-1.78c1.03-.74 1.55-1.1 1.55-1.62 0-.51-.51-.88-1.54-1.63L1.67 6.8'
        stroke='currentColor'
      />
      <path d='M17.87 9.23c.63.61.92 1.4.92 2.5 0 1.12-.29 1.9-.92 2.5' stroke='currentColor' />
      <path d='M20.67 7.6c1.05 1 1.52 2.3 1.52 4.14s-.47 3.14-1.52 4.14' stroke='currentColor' />
      <path opacity='.2' d='M16.18 6.35 8.53 12l.53-10.18z' fill='currentColor' />
      <path opacity='.2' d='M16.18 17.65 8.53 12l.53 10.18z' fill='currentColor' />
    </svg>
  )
}
