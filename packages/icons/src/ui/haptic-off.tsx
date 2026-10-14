import type { Icon } from './types'

export const IconHapticOff: Icon = ({
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
      data-slot='icon-ui-haptic-off'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='6.68'
        y='20.25'
        width='16.5'
        height='10.64'
        rx='3'
        transform='rotate(-90 6.68 20.25)'
        fill='currentColor'
      />
      <rect
        x='6.68'
        y='20.25'
        width='16.5'
        height='10.64'
        rx='3'
        transform='rotate(-90 6.68 20.25)'
        stroke='currentColor'
      />
      <path d='m3.6 14.31-1.96.53' stroke='currentColor' />
      <path d='m20.4 14.31 1.96.53' stroke='currentColor' />
      <path d='m3.67 9.7-2.02-.54' stroke='currentColor' />
      <path d='m20.33 9.7 2.02-.54' stroke='currentColor' />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
    </svg>
  )
}
