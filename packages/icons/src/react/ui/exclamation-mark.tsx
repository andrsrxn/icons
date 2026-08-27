import type { Icon } from './types'

export const IconExclamationMark: Icon = ({
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
      data-slot='ui-icon-exclamation-mark'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M12.67 19.96a.67.67 0 1 1-1.34 0 .67.67 0 0 1 1.34 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path d='M12 15.28V3.38' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
