import type { Icon } from './types'

export const IconTargetSight: Icon = ({
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
      data-slot='ui-icon-target-sight'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle
        opacity='.2'
        cx='12'
        cy='12'
        r='3.23'
        transform='rotate(90 12 12)'
        fill='currentColor'
      />
      <circle
        cx='12'
        cy='12'
        r='3.23'
        transform='rotate(90 12 12)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <circle
        cx='12'
        cy='12'
        r='7.86'
        transform='rotate(90 12 12)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M21.7 12h-3.8M6.05 12H2.24M12 2.23v3.82m0 11.9v3.82'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
