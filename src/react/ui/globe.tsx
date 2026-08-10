import type { Icon } from './types'

export const IconGlobe: Icon = ({
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
      data-slot='globe'
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
      <path
        d='M20.43 12A8.43 8.43 0 0 1 12 20.43M20.43 12A8.43 8.43 0 0 0 12 3.57M20.43 12H3.57M12 20.43A8.43 8.43 0 0 1 3.57 12M12 20.43c1.78 0 3.22-3.78 3.22-8.43S13.78 3.57 12 3.57m0 16.86c-1.78 0-3.22-3.78-3.22-8.43S10.22 3.57 12 3.57M3.57 12A8.43 8.43 0 0 1 12 3.57'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
