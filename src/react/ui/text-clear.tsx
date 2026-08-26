import type { Icon } from './types'

export const IconTextClear: Icon = ({
  size = 24,
  strokeWidth = 1.5,
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
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-text-clear'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='m12.44 3.75-4.42 16.5m2.93 0H5.48M18.9 5.67c0-1.06-.86-1.92-1.93-1.92h-9.5c-1.06 0-1.92.86-1.92 1.92m8.43 9.66 4.92 4.92m-4.93 0 4.92-4.92'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
