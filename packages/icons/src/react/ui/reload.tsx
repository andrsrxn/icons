import type { Icon } from './types'

export const IconReload: Icon = ({
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
      data-slot='ui-icon-reload'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M20.16 7.47c-2.98-3.73-5.73-4.43-8.21-4.43a9.08 9.08 0 1 0 6.36 15.55'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M21.4 3.61v1.18c0 1.89 0 2.83-.58 3.42s-1.53.59-3.41.59h-1.2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
