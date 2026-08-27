import type { Icon } from './types'

export const IconChartCombined: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-chart-combined'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M20.58 21.32h-9.83c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83v-10'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M6 9.45 8.51 7.6c.84-.62 1.26-.93 1.74-1.01a2 2 0 0 1 .67 0c.47.08.89.4 1.73 1.02.94.71 1.42 1.06 1.94 1.13a2 2 0 0 0 .74-.05c.51-.12.94-.53 1.8-1.35l2-1.91M6.5 13.29v4.18m8.33-4.18v4.18m-4.17-6v6m8.34-6v6'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
