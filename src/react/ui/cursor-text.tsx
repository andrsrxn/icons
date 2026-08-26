import type { Icon } from './types'

export const IconCursorText: Icon = ({
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
      data-slot='ui-icon-cursor-text'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M9 21c.93 0 1.4 0 1.77-.15a2 2 0 0 0 1.08-1.08c.15-.37.15-.84.15-1.77V6c0-.93 0-1.4-.15-1.77a2 2 0 0 0-1.08-1.08C10.4 3 9.93 3 9 3m6 18c-.93 0-1.4 0-1.77-.15a2 2 0 0 1-1.08-1.08C12 19.4 12 18.93 12 18V6c0-.93 0-1.4.15-1.77a2 2 0 0 1 1.08-1.08C13.6 3 14.07 3 15 3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
