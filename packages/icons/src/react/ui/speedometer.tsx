import type { Icon } from './types'

export const IconSpeedometer: Icon = ({
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
      data-slot='icon-ui-speedometer'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.68 12a10.32 10.32 0 1 0 20.64 0 10.32 10.32 0 0 0-20.64 0'
        fill='currentColor'
      />
      <path
        d='M13.5 11.72a1.53 1.53 0 1 1-3 .56 1.53 1.53 0 0 1 3-.56'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='m15.65 6.24-2.54 4.35' stroke='currentColor' />
      <path d='M1.68 12A10.3 10.3 0 0 0 12 22.32 10.32 10.32 0 1 0 1.68 12' stroke='currentColor' />
      <path d='M5.45 12.18A6.55 6.55 0 0 1 12 5.63' stroke='currentColor' />
      <path d='M18.2 8.45a6.3 6.3 0 0 1 .83 4.33' stroke='currentColor' />
    </svg>
  )
}
