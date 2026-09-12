import type { Icon } from './types'

export const IconTrendUpDown: Icon = ({
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
      data-slot='icon-ui-trend-up-down'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M1.52 14.97 6.94 9.4c.65-.67.98-1 1.4-1.01.4 0 .74.32 1.42.96l2.1 2c.7.68 1.05 1.01 1.47 1s.75-.38 1.4-1.1l6.33-7.07'
        stroke='currentColor'
      />
      <path
        d='M22.3 8.85v-1.8c0-1.89 0-2.83-.58-3.42-.59-.58-1.53-.58-3.42-.58h-1.8'
        stroke='currentColor'
      />
      <path
        d='M22.26 15.96v1.8c0 1.88 0 2.82-.58 3.41-.59.59-1.53.59-3.42.59h-1.8'
        stroke='currentColor'
      />
      <path d='m21.45 20.9-5.64-5.64' stroke='currentColor' />
    </svg>
  )
}
