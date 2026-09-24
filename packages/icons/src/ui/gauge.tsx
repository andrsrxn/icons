import type { Icon } from './types'

export const IconGauge: Icon = ({
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
      data-slot='icon-ui-gauge'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' d='M12 17H1.7a10.3 10.3 0 1 1 20.6 0z' fill='currentColor' />
      <path d='M1.7 17a10.3 10.3 0 1 1 20.6 0' stroke='currentColor' />
      <path d='m12 14.71 3.56-3.56' stroke='currentColor' />
    </svg>
  )
}
