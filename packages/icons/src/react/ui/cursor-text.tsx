import type { Icon } from './types'

export const IconCursorText: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-cursor-text'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M8.6 21.28c1.3 0 1.97 0 2.45-.3a2 2 0 0 0 .65-.65c.3-.48.3-1.14.3-2.46V6.13c0-1.32 0-1.97-.3-2.46a2 2 0 0 0-.65-.65c-.48-.3-1.14-.3-2.45-.3'
        stroke='currentColor'
      />
      <path
        d='M15.4 21.28c-1.3 0-1.97 0-2.45-.3a2 2 0 0 1-.65-.65c-.3-.49-.3-1.14-.3-2.46V6.13c0-1.32 0-1.98.3-2.46a2 2 0 0 1 .65-.65c.48-.3 1.14-.3 2.45-.3'
        stroke='currentColor'
      />
    </svg>
  )
}
