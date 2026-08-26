import type { Icon } from './types'

export const IconChevronLeftDouble: Icon = ({
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
      data-slot='ui-icon-chevron-left-double'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='m19.55 4.32-5.02 5c-1.33 1.34-2 2-2 2.83s.66 1.5 2 2.83L19.55 20M11.7 4.32l-5.02 5c-1.33 1.34-2 2-2 2.83s.67 1.5 2 2.83L11.7 20'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
