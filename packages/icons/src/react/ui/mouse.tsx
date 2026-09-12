import type { Icon } from './types'

export const IconMouse: Icon = ({
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
      data-slot='icon-ui-mouse'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' d='M5.6 12.35h12.68v3.58a6.34 6.34 0 1 1-12.67 0z' fill='currentColor' />
      <rect x='5.61' y='1.79' width='12.67' height='20.48' rx='6.34' stroke='currentColor' />
      <path d='M5.6 12.5h12.68' stroke='currentColor' />
      <rect x='10.24' y='5.02' width='3.53' height='4.96' rx='1.76' stroke='currentColor' />
      <path d='M11.98 12.48v-2.5' stroke='currentColor' />
      <path d='M11.98 4.98V2.44' stroke='currentColor' />
    </svg>
  )
}
