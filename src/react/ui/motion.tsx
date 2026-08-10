import type { Icon } from './types'

export const IconMotion: Icon = ({
  size = 24,
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
      data-slot='motion'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='15.21' cy='12' r='5.13' fill='currentColor' />
      <circle cx='15.21' cy='12' r='5.13' stroke='currentColor' strokeWidth='1.5' />
      <path
        d='M8.44 7.7s-1.46 1.28-1.46 4.38c0 3.01 1.46 4.23 1.46 4.23M4.62 8.49s-.88 1.03-.88 3.53c0 2.43.88 3.4.88 3.4'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
