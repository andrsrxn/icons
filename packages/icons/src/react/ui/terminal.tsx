import type { Icon } from './types'

export const IconTerminal: Icon = ({
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
      data-slot='ui-icon-terminal'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='m3.28 5 3.47 2.49c2.07 1.48 3.1 2.22 3.1 3.25s-1.03 1.77-3.1 3.25l-3.47 2.5M20.47 18H10'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
