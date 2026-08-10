import type { Icon } from './types'

export const IconChevronLeftDouble: Icon = ({
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
      data-slot='chevron-left-double'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M11.47 19.58 6.54 14.9C5.1 13.54 4.38 12.86 4.38 12s.72-1.55 2.16-2.9l4.93-4.69m8 15.16-4.93-4.67c-1.44-1.36-2.16-2.04-2.16-2.9s.72-1.55 2.16-2.9l4.93-4.69'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
