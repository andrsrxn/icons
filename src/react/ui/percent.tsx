import type { Icon } from './types'

export const IconPercent: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='percent'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M9.398 6.343a2.16 2.16 0 1 1-3.055 3.054 2.16 2.16 0 0 1 3.055-3.054Zm8.259 8.259a2.16 2.16 0 1 1-3.055 3.055 2.16 2.16 0 0 1 3.055-3.055Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M4.908 19.092 19.092 4.908M9.398 6.343a2.16 2.16 0 1 1-3.055 3.054 2.16 2.16 0 0 1 3.055-3.054Zm8.259 8.26a2.16 2.16 0 1 1-3.055 3.054 2.16 2.16 0 0 1 3.055-3.055Z'
      />
    </svg>
  )
}
