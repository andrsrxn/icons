import type { Icon } from './types'

export const IconJupiter: Icon = ({
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
      data-slot='ui-icon-jupiter'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='11.97' cy='11.61' r='8.2' fill='currentColor' />
      <circle cx='11.97' cy='11.61' r='8.2' stroke='currentColor' strokeWidth={strokeWidth} />
      <path
        d='M16.47 4.13c2.36-1.39 4.19-1.9 4.83-1.2 1.17 1.28-2.03 6.13-7.15 10.84s-10.23 7.49-11.41 6.2c-.62-.66-.03-2.32 1.41-4.42'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
