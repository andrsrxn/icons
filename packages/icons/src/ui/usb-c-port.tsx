import type { Icon } from './types'

export const IconUsbCPort: Icon = ({
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
      data-slot='icon-ui-usb-c-port'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.63 11.9a4.6 4.6 0 0 1 4.6-4.61h11.53a4.61 4.61 0 0 1 0 9.22H6.24a4.6 4.6 0 0 1-4.61-4.6'
        fill='currentColor'
      />
      <path
        d='M1.63 12a4.7 4.7 0 0 1 4.7-4.71h11.33a4.71 4.71 0 0 1 0 9.42H6.34A4.7 4.7 0 0 1 1.63 12'
        stroke='currentColor'
      />
      <path d='M6.09 12h11.82' stroke='currentColor' />
    </svg>
  )
}
