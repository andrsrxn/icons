import type { Icon } from './types'

export const IconChartCombined: Icon = ({
  size = 24,
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
      data-slot='chart-combined'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M7.28 14.16v3.39m7.35-4.72v4.72m-3.68-5.91v5.9m7.35-6.91v6.92M3.9 4v14.61c0 .83.67 1.5 1.5 1.5H20M6.7 11.64l3.76-3.76a1 1 0 0 1 1.42 0l1.72 1.77a1 1 0 0 0 1.44 0l4.31-4.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
