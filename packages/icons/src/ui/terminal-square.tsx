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
      <rect
        width='18.61'
        height='18.61'
        rx='3'
        transform='matrix(0 -1 -1 0 21.3 21.3)'
        stroke='currentColor'
      />
      <path
        d='M7.12 9.39c1.99 1.42 2.98 2.13 3.02 3.11v.14c-.04.99-1.03 1.7-3.02 3.12'
        stroke='currentColor'
      />
      <path d='M17.6 17.29h-6.37' stroke='currentColor' />
    </svg>
  )
}
