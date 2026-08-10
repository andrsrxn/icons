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
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
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
        d='M9.4 6.34A2.16 2.16 0 1 1 6.34 9.4 2.16 2.16 0 0 1 9.4 6.34m8.26 8.26a2.16 2.16 0 1 1-3.06 3.06 2.16 2.16 0 0 1 3.06-3.06'
        fill='currentColor'
        opacity='.2'
      />
      <path
        d='M4.9 19.1 19.1 4.9M9.4 6.35A2.16 2.16 0 1 1 6.34 9.4 2.16 2.16 0 0 1 9.4 6.34Zm8.26 8.26a2.16 2.16 0 1 1-3.06 3.06 2.16 2.16 0 0 1 3.06-3.06Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
