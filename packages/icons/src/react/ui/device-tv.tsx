import type { Icon } from './types'

export const IconDeviceTv: Icon = ({
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
      data-slot='icon-ui-device-tv'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='1.72' y='6.5' width='20.55' height='13.77' rx='3' fill='currentColor' />
      <rect x='1.72' y='6.5' width='20.55' height='13.77' rx='3' stroke='currentColor' />
      <path d='M10.9 6.5 8.48 1.53' stroke='currentColor' />
      <path d='m13.1 6.5 1.69-4.33' stroke='currentColor' />
    </svg>
  )
}
