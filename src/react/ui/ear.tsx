import type { Icon } from './types'

export const IconEar: Icon = ({
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
      data-slot='ui-icon-ear'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M5.76 7.51C7 3.73 9.7 2.62 12.56 2.62c3.25 0 6.35 1.46 6.46 4.9.15 4.71-2.82 5.3-3.22 7.99-.39 2.57-.12 3.18-.7 4.29-.92 1.7-3.03 1.9-4.65 1.32-1.68-.61-2.19-2.12-2.48-3.44'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M7.97 11.77c.9.48 1.89.1 2.25-.94S9.82 9 8.84 8.73c.1-1.65 2.13-3.07 3.76-3.07 1.76 0 2.72 1.12 2.83 2.57.2 2.71-1.32 3.44-2.55 5.4 0 0-.67.98-.4 2.36'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
