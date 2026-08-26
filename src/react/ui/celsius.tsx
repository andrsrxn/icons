import type { Icon } from './types'

export const IconCelsius: Icon = ({
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
      data-slot='ui-icon-celsius'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='5.49' cy='6.23' r='2.35' fill='currentColor' />
      <circle cx='5.49' cy='6.23' r='2.35' stroke='currentColor' strokeWidth={strokeWidth} />
      <path
        d='M20.6 4.51c-1.23-.86-3.09-.86-3.09-.86-4.04 0-7.32 3.79-7.32 8.47s3.28 8.47 7.32 8.47c0 0 2.07 0 3.1-.72'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
