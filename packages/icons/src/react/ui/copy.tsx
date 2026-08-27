import type { Icon } from './types'

export const IconCopy: Icon = ({
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
      data-slot='ui-icon-copy'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M21.26 8.88c0-2.83 0-4.25-.87-5.13-.88-.87-2.3-.87-5.13-.87h-3.99a2.96 2.96 0 0 0-.23 5.9l.83.06c.53.04.79.06 1.01.12a3 3 0 0 1 2.27 2.36c.04.23.05.5.06 1.03l.02.59v.03a3 3 0 0 0 2.99 2.89h.06a3 3 0 0 0 2.98-2.99z'
        fill='currentColor'
      />
      <rect
        width='12.98'
        height='12.98'
        rx='3'
        transform='matrix(1 0 0 -1 2.74 21.3)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M15.93 15.69c2.19 0 3.28 0 4.06-.55a3 3 0 0 0 .73-.73c.54-.78.54-1.87.54-4.06V8.7c0-2.82 0-4.24-.87-5.12-.88-.88-2.3-.88-5.13-.88H13.6c-2.16 0-3.24 0-4 .53a3 3 0 0 0-.8.77c-.53.77-.53 1.85-.53 4'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
