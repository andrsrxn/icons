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
      <path
        opacity='.2'
        d='M12 20.03H3.26C-.96 12.73 3.87 3.97 12 3.97c7.64 0 12.26 6.69 8.99 16.06z'
        fill='currentColor'
      />
      <path d='m11.88 15.15 4.49-5.21' stroke='currentColor' />
      <path d='M3.38 20.03a10.34 10.34 0 1 1 17.24 0' stroke='currentColor' />
    </svg>
  )
}
