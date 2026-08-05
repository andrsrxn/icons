import type { Icon } from './types'

export const IconQuotesUp: Icon = ({
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
      data-slot='quotes-up'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M3.698 8.217a3.436 3.436 0 1 1 6.871 0 3.436 3.436 0 0 1-6.871 0Zm9.733 0a3.436 3.436 0 1 1 6.871 0 3.436 3.436 0 0 1-6.87 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M10.569 8.323s-.15 4.383-1.074 6.723c-1.769 4.483-4.43 4.483-4.43 4.483M20.302 8.323s-.15 4.383-1.073 6.723c-1.77 4.483-4.43 4.483-4.43 4.483M3.697 8.217a3.436 3.436 0 1 1 6.871 0 3.436 3.436 0 0 1-6.871 0Zm9.733 0a3.436 3.436 0 1 1 6.871 0 3.436 3.436 0 0 1-6.87 0Z'
      />
    </svg>
  )
}
