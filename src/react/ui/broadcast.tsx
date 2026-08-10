import type { Icon } from './types'

export const IconBroadcast: Icon = ({
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
      data-slot='broadcast'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M13.95 12a1.95 1.95 0 1 1-3.9 0 1.95 1.95 0 0 1 3.9 0'
        fill='currentColor'
      />
      <path
        d='M16.2 8.82s1 1.3 1 3.18c0 2-1 3.18-1 3.18M7.8 8.82s-1 1.3-1 3.18c0 2 1 3.18 1 3.18m10.82-9.04c0 .02 1.85 2.4 1.85 5.86 0 3.7-1.85 5.86-1.85 5.86M5.38 6.14c0 .02-1.85 2.4-1.85 5.86a9.5 9.5 0 0 0 1.85 5.86M13.95 12a1.95 1.95 0 1 1-3.9 0 1.95 1.95 0 0 1 3.9 0'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
