import type { Icon } from './types'

export const IconParenthesis: Icon = ({
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
      data-slot='ui-icon-parenthesis'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M7.13 21A12.8 12.8 0 0 1 4 12c0-3.72.82-6.08 3.13-9m9.74 18A12.8 12.8 0 0 0 20 12c0-3.72-.82-6.08-3.13-9'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
