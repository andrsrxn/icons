import type { Icon } from './types'

export const IconTrendDown: Icon = ({
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
      data-slot='icon-ui-trend-down'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M22.33 12.58v1.77c0 1.89 0 2.83-.58 3.42-.6.59-1.53.59-3.42.59h-1.78'
        stroke='currentColor'
      />
      <path
        d='m1.55 6.67 4.85 5.74c.55.65.82.97 1.2 1.02s.73-.18 1.44-.65l3.66-2.46c.7-.47 1.06-.7 1.44-.65s.65.37 1.2 1.02l5.67 6.72'
        stroke='currentColor'
      />
    </svg>
  )
}
