import type { Icon } from './types'

export const IconWind: Icon = ({
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
      data-slot='ui-icon-wind'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M9.45 10.62a3.78 3.78 0 1 0-3.77-3.78m6.42 7.73a2.9 2.9 0 1 1-2.56 4.23m9.49-8.18a2.31 2.31 0 1 1-1.64 3.94 2 2 0 0 1-.36-.56m-7.45-3.38H2.65m9.39 3.95H3.76m15.32-3.95H15'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
