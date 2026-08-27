import type { Icon } from './types'

export const IconTextIndent: Icon = ({
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
      data-slot='ui-icon-text-indent'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M3 17.85h18M3 11.98h18M10.86 6.1H21M3 3.83l1.1.39C6.3 5 7.4 5.39 7.4 6.1c0 .7-1.1 1.1-3.3 1.88l-1.1.4'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
