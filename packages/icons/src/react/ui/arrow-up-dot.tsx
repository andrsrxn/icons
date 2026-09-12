import type { Icon } from './types'

export const IconArrowUpDot: Icon = ({
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
      data-slot='icon-ui-arrow-up-dot'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m5.56 8.25 3.6-3.61c1.34-1.34 2-2 2.83-2s1.5.66 2.83 2l3.63 3.61'
        stroke='currentColor'
      />
      <path d='M12 16.08V2.8' stroke='currentColor' />
      <path
        d='M12.62 20.8a.62.62 0 1 1-1.24 0 .62.62 0 0 1 1.24 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
