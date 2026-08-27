import type { Icon } from './types'

export const IconHelp: Icon = ({
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
      data-slot='ui-icon-help'
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
        r='9.43'
        transform='rotate(90 12 12)'
        fill='currentColor'
      />
      <circle
        cx='12'
        cy='12'
        r='9.43'
        transform='rotate(90 12 12)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M12 13.83c0-2.06 2.67-2.22 2.67-4.4 0-1.38-1.2-2.5-2.67-2.5-1.48 0-2.67 1.12-2.67 2.5'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M12.39 16.94a.39.39 0 1 1-.78 0 .39.39 0 0 1 .78 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
