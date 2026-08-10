import type { Icon } from './types'

export const IconWarningCircle: Icon = ({
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
      data-slot='warning-circle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M20.3 12a8.3 8.3 0 1 1-16.6 0 8.3 8.3 0 0 1 16.6 0'
        fill='currentColor'
      />
      <path d='M12.4 16.4a.4.4 0 1 1-.8 0 .4.4 0 0 1 .8 0' fill='currentColor' />
      <path
        d='M12 13.34V7.41M20.3 12a8.3 8.3 0 1 1-16.6 0 8.3 8.3 0 0 1 16.6 0Zm-7.9 4.4a.4.4 0 1 1-.8 0 .4.4 0 0 1 .8 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
