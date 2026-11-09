import type { Icon } from './types'

export const IconTrendDown: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-trend-down'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M22.33 12.58v1.77c0 1.89 0 2.83-.58 3.42-.6.59-1.53.59-3.42.59h-1.78'
        stroke='currentColor'
      />
      <path
        d='m1.55 6.67 3.7 4.37c1.09 1.3 1.64 1.95 2.4 2.06.75.1 1.46-.37 2.87-1.32l.7-.46c1.4-.95 2.11-1.42 2.87-1.32.76.11 1.3.76 2.4 2.06l4.52 5.35'
        stroke='currentColor'
      />
    </svg>
  )
}
