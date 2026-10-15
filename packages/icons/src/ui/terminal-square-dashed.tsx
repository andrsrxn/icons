import type { Icon } from './types'

export const IconTerminalSquareDashed: Icon = ({
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
      data-slot='icon-ui-terminal-square-dashed'
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
      <path d='M6.03 2.66h-.08l-.45.01a3 3 0 0 0-2.8 2.8v.45' stroke='currentColor' />
      <path d='M17.98 2.66h.07l.45.01a3 3 0 0 1 2.8 2.8v.45' stroke='currentColor' />
      <path d='M6.03 21.24H5.5a3 3 0 0 1-2.8-2.8V18' stroke='currentColor' />
      <path d='M17.98 21.24h.52a3 3 0 0 0 2.8-2.8V18' stroke='currentColor' />
      <path d='M2.76 10.14v3.57' stroke='currentColor' />
      <path d='M21.24 10.14v3.57' stroke='currentColor' />
      <path d='M10.22 21.14h3.57' stroke='currentColor' />
      <path d='M10.22 2.67h3.57' stroke='currentColor' />
      <path
        d='M6.76 9.31c1.99 1.42 2.98 2.13 3.02 3.12v.14c-.04.98-1.03 1.7-3.02 3.12'
        stroke='currentColor'
      />
      <path d='M17.24 17.21h-5.87' stroke='currentColor' />
    </svg>
  )
}
