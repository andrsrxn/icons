import type { Icon } from './types'

export const IconRegex: Icon = ({
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
      data-slot='regex'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='3.7'
        y='12.59'
        width='7.54'
        height='7.54'
        rx='1.5'
        fill='currentColor'
      />
      <rect
        x='3.7'
        y='12.59'
        width='7.54'
        height='7.54'
        rx='1.5'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M16.52 12.59V3.87m3.78 2.18-7.55 4.36m0-4.36 7.55 4.36'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
