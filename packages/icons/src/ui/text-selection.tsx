import type { Icon } from './types'

export const IconTextSelection: Icon = ({
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
      data-slot='icon-ui-text-selection'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M3.76 21.28c1.31 0 1.97 0 2.45-.3a2 2 0 0 0 .66-.65c.3-.48.3-1.14.3-2.46V6.13c0-1.32 0-1.97-.3-2.46a2 2 0 0 0-.66-.65c-.48-.3-1.14-.3-2.45-.3'
        stroke='currentColor'
      />
      <path
        d='M10.57 21.28c-1.31 0-1.97 0-2.45-.3a2 2 0 0 1-.66-.65c-.3-.49-.3-1.14-.3-2.46V6.13c0-1.32 0-1.98.3-2.46a2 2 0 0 1 .66-.65c.48-.3 1.14-.3 2.45-.3'
        stroke='currentColor'
      />
      <path
        d='M16.6 21.13c-1.63 0-2.95-1.2-2.95-2.66 0-1.95 1.32-2.66 2.95-2.66h2.95v2.66c0 1.47-1.32 2.66-2.95 2.66'
        stroke='currentColor'
      />
      <path
        d='M20.24 21.28s-.4-.32-.4-1.3v-5.34c0-2.12-.48-3.39-2.45-3.76-1.26-.23-2.25.33-3 1.3'
        stroke='currentColor'
      />
    </svg>
  )
}
