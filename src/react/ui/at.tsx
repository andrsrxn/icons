import type { Icon } from './types'

export const IconAt: Icon = ({
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
      data-slot='at'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M15.86 12a3.86 3.86 0 1 1-7.72 0 3.86 3.86 0 0 1 7.72 0'
        fill='currentColor'
      />
      <path
        d='M15.13 19.73q-1.46.6-3.13.61A8.34 8.34 0 1 1 20.34 12a7.3 7.3 0 0 1-1.03 4.02c-.39.63-.94 1.2-1.7 1.2-1.7 0-1.7-2.1-1.7-2.1V7.84M15.85 12a3.86 3.86 0 1 1-7.72 0 3.86 3.86 0 0 1 7.72 0'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
