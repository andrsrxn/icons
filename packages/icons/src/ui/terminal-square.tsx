import type { Icon } from './types'

export const IconTerminalSquare: Icon = ({
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
      data-slot='icon-ui-terminal-square'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='18.61'
        height='18.61'
        rx='3'
        transform='matrix(0 -1 -1 0 21.3 21.3)'
        fill='currentColor'
      />
      <path
        d='M6.52 9.35c1.98 1.42 2.97 2.13 3 3.11v.15c-.03.98-1.02 1.69-3 3.12'
        stroke='currentColor'
      />
      <path d='M17.48 17.25h-6.36' stroke='currentColor' />
      <rect
        width='18.61'
        height='18.61'
        rx='3'
        transform='matrix(0 -1 -1 0 21.3 21.3)'
        stroke='currentColor'
      />
    </svg>
  )
}
