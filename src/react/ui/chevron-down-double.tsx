import type { Icon } from './types'

export const IconChevronDownDouble: Icon = ({
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
      data-slot='chevron-down-double'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='m19.58 12.39-4.67 4.93c-1.36 1.45-2.04 2.17-2.9 2.17s-1.55-.72-2.9-2.16l-4.69-4.94m15.16-8L14.9 9.32c-1.36 1.45-2.04 2.17-2.9 2.17s-1.55-.72-2.9-2.16L4.41 4.39'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
