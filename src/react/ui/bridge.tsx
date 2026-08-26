import type { Icon } from './types'

export const IconBridge: Icon = ({
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
      data-slot='ui-icon-bridge'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <g opacity='.2'>
        <path d='M9.17 14.93h-5V6.55L9 9.13z' fill='currentColor' />
        <path d='M9.17 14.93h-5V6.55L9 9.13z' fill='currentColor' />
      </g>
      <g opacity='.2'>
        <path d='M14.71 14.93h5V6.55l-4.84 2.58z' fill='currentColor' />
        <path d='M14.71 14.93h5V6.55l-4.84 2.58z' fill='currentColor' />
      </g>
      <path
        d='M4.29 18.3V5.23M19.71 18.3V5.23M9.1 14.8V9.26m5.8 5.54V9.26m6.74 5.66H2.36m17.35-8.67A10.2 10.2 0 0 1 12 9.26c-3.23 0-5.34-.82-7.71-3.01m0 0a13 13 0 0 1-2.05 1.58m17.47-1.58q1.04.96 2.05 1.58'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
