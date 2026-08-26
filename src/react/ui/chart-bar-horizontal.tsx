import type { Icon } from './types'

export const IconChartBarHorizontal: Icon = ({
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
      data-slot='ui-icon-chart-bar-horizontal'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path d='M3.65 21.73V2.27' stroke='currentColor' strokeWidth={strokeWidth} />
      <path
        opacity='.2'
        d='M14.85 4.04c.94 0 1.42 0 1.7.3.3.29.3.76.3 1.7v1.3c0 .95 0 1.42-.3 1.71-.28.3-.76.3-1.7.3H3.65v-5.3zm-4 10.61c.94 0 1.42 0 1.7.3.3.29.3.76.3 1.7v1.3c0 .95 0 1.42-.3 1.71-.28.3-.76.3-1.7.3h-7.2v-5.3z'
        fill='currentColor'
      />
      <path
        d='M18.35 9.35c.94 0 1.42 0 1.7.3.3.28.3.75.3 1.7v1.3c0 .95 0 1.42-.3 1.7-.28.3-.76.3-1.7.3H3.65v-5.3z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M14.85 4.04c.94 0 1.42 0 1.7.3.3.29.3.76.3 1.7v1.3c0 .95 0 1.42-.3 1.71-.28.3-.76.3-1.7.3H3.65v-5.3zm-4 10.61c.94 0 1.42 0 1.7.3.3.29.3.76.3 1.7v1.3c0 .95 0 1.42-.3 1.71-.28.3-.76.3-1.7.3h-7.2v-5.3z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
