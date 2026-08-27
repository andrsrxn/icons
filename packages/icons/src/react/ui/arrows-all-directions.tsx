import type { Icon } from './types'

export const IconArrowsAllDirections: Icon = ({
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
      data-slot='ui-icon-arrows-all-directions'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='m9.01 19 .18.18c1.34 1.34 2 2 2.83 2s1.5-.66 2.83-2l.19-.18M19 9.05l.17.16c1.33 1.33 2 2 2 2.83s-.67 1.5-2 2.83l-.17.17m-14-.05-.17-.17c-1.33-1.33-2-2-2-2.83 0-.82.67-1.5 2-2.83L5 9m9.95-4-.14-.15c-1.34-1.33-2-2-2.83-2s-1.5.66-2.83 2L9 5m11.66 7H3.08m8.89 8.68V3.1'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
