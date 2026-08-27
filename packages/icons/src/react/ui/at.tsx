import type { Icon } from './types'

export const IconAt: Icon = ({
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
      data-slot='ui-icon-at'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='11.66' cy='12' r='4.79' fill='currentColor' />
      <circle cx='11.66' cy='12' r='4.79' stroke='currentColor' strokeWidth={strokeWidth} />
      <path
        d='M15.41 20.58a7.4 7.4 0 0 1-3.41.8A9.38 9.38 0 1 1 21.38 12c0 2.28-.88 5.27-2.17 6-1.3.73-2.74 0-2.74-1.97V7.56'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
