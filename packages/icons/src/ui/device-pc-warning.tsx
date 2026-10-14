import type { Icon } from './types'

export const IconDevicePcWarning: Icon = ({
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
      data-slot='icon-ui-device-pc-warning'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='1.74'
        y='3.07'
        width='20.52'
        height='13.75'
        rx='3'
        fill='currentColor'
      />
      <rect x='1.74' y='3.07' width='20.52' height='13.75' rx='3' stroke='currentColor' />
      <path d='M7.64 20.93h8.7' stroke='currentColor' />
      <path d='M12 20.93v-3.99' stroke='currentColor' />
      <path d='M12 10.34V6.15' stroke='currentColor' />
      <path
        d='M12.44 13.46a.44.44 0 1 1-.88 0 .44.44 0 0 1 .88 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
