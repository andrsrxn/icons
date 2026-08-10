import type { Icon } from './types'

export const IconCheckDouble: Icon = ({
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
      data-slot='check-double'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='m3.8 13.57.61 1.22c1.58 3.14 2.36 4.71 3.6 4.7s2.02-1.58 3.57-4.74l4.63-9.44m-8.42 8.25.62 1.23c1.57 3.14 2.36 4.71 3.6 4.7s2.02-1.58 3.56-4.74l4.63-9.44'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
