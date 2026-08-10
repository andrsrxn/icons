import type { Icon } from './types'

export const IconInfo: Icon = ({
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
      data-slot='info'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M20.43 12a8.43 8.43 0 1 1-16.86 0 8.43 8.43 0 0 1 16.86 0'
        fill='currentColor'
      />
      <path d='M12.27 7.93a.52.52 0 1 1-1.04 0 .52.52 0 0 1 1.04 0' fill='currentColor' />
      <path
        d='M11.75 11.18v4.64c0 .82.58 1.38 1.48 1.38M12 20.43a8.43 8.43 0 1 0 0-16.86 8.43 8.43 0 0 0 0 16.86Zm.27-12.5a.52.52 0 1 1-1.04 0 .52.52 0 0 1 1.04 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
