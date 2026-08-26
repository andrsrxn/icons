import type { Icon } from './types'

export const IconGreaterOrEqualThan: Icon = ({
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
      data-slot='ui-icon-greater-or-equal-than'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M5.11 19.46h13.72M5.51 4.54l5.61 1.75c5.03 1.56 7.54 2.34 7.54 3.81s-2.51 2.26-7.53 3.83L5.5 15.68'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
