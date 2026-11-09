import type { Icon } from './types'

export const IconTrendUp: Icon = ({
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
      data-slot='icon-ui-trend-up'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='m1.55 18.01 3.71-4.39c1.1-1.3 1.65-1.95 2.4-2.05.76-.1 1.47.36 2.88 1.31l.7.48c1.42.94 2.13 1.42 2.89 1.31.75-.1 1.3-.76 2.4-2.06l4.53-5.37'
        stroke='currentColor'
      />
      <path
        d='M22.3 11.9v-1.8c0-1.89 0-2.83-.58-3.42-.59-.58-1.53-.58-3.42-.58h-1.79'
        stroke='currentColor'
      />
    </svg>
  )
}
