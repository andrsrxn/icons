import type { Icon } from './types'

export const IconPlatter: Icon = ({
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
      data-slot='platter'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M18.95 16.31H5.05c0-4.33 3.11-7.85 6.95-7.85s6.95 3.52 6.95 7.85'
        fill='currentColor'
      />
      <path
        d='M18.95 16.31c0-4.33-3.11-7.85-6.95-7.85s-6.95 3.52-6.95 7.85'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M12 8.23V6.35m8.7 9.96H3.3'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
