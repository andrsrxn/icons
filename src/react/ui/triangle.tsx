import type { Icon } from './types'

export const IconTriangle: Icon = ({
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
      data-slot='ui-icon-triangle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M8.47 7.32 4.4 14.74c-1.46 2.64-2.18 3.96-1.6 4.94s2.09.98 5.1.98h8.18c3.02 0 4.53 0 5.11-.98.58-.99-.15-2.3-1.61-4.95l-4.1-7.42c-1.55-2.8-2.33-4.2-3.5-4.2-1.2 0-1.96 1.4-3.5 4.2'
        fill='currentColor'
      />
      <path
        d='M8.47 7.32 4.4 14.74c-1.46 2.64-2.18 3.96-1.6 4.94s2.09.98 5.1.98h8.18c3.02 0 4.53 0 5.11-.98.58-.99-.15-2.3-1.61-4.95l-4.1-7.42c-1.55-2.8-2.33-4.2-3.5-4.2-1.2 0-1.96 1.4-3.5 4.2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
