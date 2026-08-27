import type { Icon } from './types'

export const IconSquareRoot: Icon = ({
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
      data-slot='ui-icon-square-root'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M3 12.16h1.77c.65 0 .98 0 1.23.17.26.17.38.48.62 1.08l1.64 4.05c.84 2.09 1.27 3.13 1.96 3.11.7-.02 1.06-1.08 1.79-3.22l4.04-11.82c.22-.66.33-.98.6-1.17.25-.19.6-.19 1.29-.19H21'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
