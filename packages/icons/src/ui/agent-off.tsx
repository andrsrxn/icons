import type { Icon } from './types'

export const IconAgentOff: Icon = ({
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
      data-slot='icon-ui-agent-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M3.8 13.5c0-2.23 0-3.34.43-4.19A4 4 0 0 1 6 7.54c.85-.43 1.96-.43 4.18-.43h3.64c2.22 0 3.33 0 4.18.43a4 4 0 0 1 1.77 1.77c.43.85.43 1.96.43 4.18s0 3.33-.43 4.18A4 4 0 0 1 18 19.44c-.85.43-1.96.43-4.18.43h-3.64c-2.22 0-3.33 0-4.18-.43a4 4 0 0 1-1.77-1.77c-.43-.85-.43-1.96-.43-4.18'
        fill='currentColor'
      />
      <path d='M9.3 11.48v2.64' stroke='currentColor' />
      <path d='M14.95 11.48V12' stroke='currentColor' />
      <path d='M20.2 13.73h2.12' stroke='currentColor' />
      <path d='M1.67 13.73H3.8' stroke='currentColor' />
      <path
        d='M8.64 3.67h.2c1.36 0 2.04 0 2.53.31a2 2 0 0 1 .6.61c.32.5.32 1.17.32 2.52'
        stroke='currentColor'
      />
      <path
        d='M7 7.24q-.57.09-1 .3a4 4 0 0 0-1.77 1.77c-.43.85-.43 1.96-.43 4.18s0 3.33.43 4.18A4 4 0 0 0 6 19.44c.85.43 1.96.43 4.18.43h3.64c2.22 0 3.33 0 4.18-.43a4 4 0 0 0 .65-.41'
        stroke='currentColor'
      />
      <path
        d='M10.7 7.11h3.12c2.22 0 3.33 0 4.18.43a4 4 0 0 1 1.77 1.77c.43.85.43 1.96.43 4.18v0c0 1.27 0 2.18-.08 2.88'
        stroke='currentColor'
      />
      <path d='m2.67 2.67 18.66 18.66' stroke='currentColor' />
    </svg>
  )
}
