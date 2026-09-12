import type { Icon } from './types'

export const IconAlignCenterHorizontal: Icon = ({
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
      data-slot='icon-ui-align-center-horizontal'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='3.79' y='2.93' width='6.42' height='18.14' rx='2' fill='currentColor' />
      <rect opacity='.2' x='13.8' y='5.13' width='6.42' height='13.74' rx='2' fill='currentColor' />
      <rect x='3.79' y='2.93' width='6.42' height='18.14' rx='2' stroke='currentColor' />
      <rect x='13.8' y='5.13' width='6.42' height='13.74' rx='2' stroke='currentColor' />
      <path d='M1.67 12h2.12' stroke='currentColor' />
      <path d='M20.22 12h2.11' stroke='currentColor' />
      <path d='M10.63 12h2.74' stroke='currentColor' />
    </svg>
  )
}
