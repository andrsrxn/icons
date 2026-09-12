import type { Icon } from './types'

export const IconTrendUp: Icon = ({
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
      data-slot='icon-ui-trend-up'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m1.55 18.01 4.86-5.75c.55-.65.83-.98 1.2-1.03.39-.05.74.18 1.45.66l3.68 2.46c.7.48 1.06.71 1.44.66s.65-.38 1.2-1.03l5.68-6.74'
        stroke='currentColor'
      />
      <path
        d='M22.3 11.9v-1.8c0-1.89 0-2.83-.58-3.42-.59-.58-1.53-.58-3.42-.58h-1.79'
        stroke='currentColor'
      />
    </svg>
  )
}
