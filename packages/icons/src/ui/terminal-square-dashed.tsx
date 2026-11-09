import type { Icon } from './types'

export const IconTerminalSquareDashed: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-terminal-square-dashed'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M13.3 21.3c3.78 0 5.66 0 6.83-1.17s1.17-3.05 1.17-6.83v-2.6c0-3.78 0-5.66-1.17-6.83S17.08 2.7 13.3 2.7h-2.6c-3.78 0-5.66 0-6.83 1.17S2.7 6.92 2.7 10.7v2.6c0 3.78 0 5.66 1.17 6.83s3.05 1.17 6.83 1.17z'
        fill='currentColor'
      />
      <path d='M6.03 2.66h-.08A3.25 3.25 0 0 0 2.7 5.92' stroke='currentColor' />
      <path d='M17.98 2.66h.07c1.8 0 3.25 1.46 3.25 3.26' stroke='currentColor' />
      <path d='M6.03 21.24h-.08A3.25 3.25 0 0 1 2.7 18' stroke='currentColor' />
      <path d='M17.98 21.24h.07c1.8 0 3.25-1.45 3.25-3.25' stroke='currentColor' />
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
