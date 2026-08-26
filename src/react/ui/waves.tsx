import type { Icon } from './types'

export const IconWaves: Icon = ({
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
      data-slot='ui-icon-waves'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M3.45 6.58A7.8 7.8 0 0 1 8.5 4.84c2.52 0 5.54 2.22 7.99 2.22s3.59-1.2 4.07-1.85M3.45 12.62A7.8 7.8 0 0 1 8.5 10.9c2.52 0 5.54 2.22 7.99 2.22s3.59-1.2 4.07-1.85m-17.11 7.4a7.8 7.8 0 0 1 5.04-1.73c2.52 0 5.54 2.22 7.99 2.22s3.59-1.2 4.07-1.86'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
