import type { Icon } from './types'

export const Icon4k: Icon = ({
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
      data-slot='ui-icon-4k'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M13.77 7.1v9.8m-4.37.14V9c0-1.3 0-1.94-.36-2.05-.34-.11-.72.42-1.46 1.47l-2.56 3.61c-.49.7-.73 1.04-.6 1.3.15.28.57.28 1.42.28h5.25m2.68-1.51 5-5m-5 5 5 4.8m2.42 3.1H2.8M21.19 4H2.8'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
