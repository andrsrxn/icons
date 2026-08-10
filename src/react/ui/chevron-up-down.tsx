import type { Icon } from './types'

export const IconChevronUpDown: Icon = ({
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
      data-slot='chevron-up-down'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='m7.38 7.94 1.7-1.81c1.36-1.47 2.05-2.2 2.92-2.2.86 0 1.55.73 2.92 2.2l1.7 1.81m-9.24 8.12 1.7 1.81c1.36 1.47 2.05 2.2 2.92 2.2.86 0 1.55-.73 2.92-2.2l1.7-1.81'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
