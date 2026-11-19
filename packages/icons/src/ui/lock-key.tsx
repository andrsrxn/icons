import type { Icon } from './types'

export const IconLockKey: Icon = ({
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
      data-slot='icon-ui-lock-key'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M3.32 15.25c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h7.76c.56 0 .84 0 1.07.04a3 3 0 0 1 2.5 2.49c.03.23.03.51.03 1.07l-2.6-.58-2.38 1.99v2.77l-3.18 3.03v2.14h-3.2c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12z'
        fill='currentColor'
      />
      <path
        d='M16.63 9.28q-1-.04-2.42-.03H9.79c-2.79 0-4.18 0-5.14.75a4 4 0 0 0-.58.58c-.75.96-.75 2.35-.75 5.14 0 2.8 0 4.2.75 5.14q.26.33.58.59c.73.57 1.71.7 3.37.74h1.3'
        stroke='currentColor'
      />
      <path d='M7.63 9.25 8.1 5.2a3.96 3.96 0 0 1 7.88.04l.43 4' stroke='currentColor' />
      <path d='M15.91 16.8c-.2-.42-.32-.96-.33-1.47a3.4 3.4 0 1 1 2.2 3.11' stroke='currentColor' />
      <path
        d='M19.43 15.15a.44.44 0 1 1-.89 0 .44.44 0 0 1 .9 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='m15.9 16.82-3.13 3.13c-.15.15-.22.22-.26.31-.03.1-.03.2-.03.4v1.04c0 .47 0 .7.14.85s.38.15.86.15h.66c.24 0 .36 0 .46-.04a.5.5 0 0 0 .26-.26c.04-.1.04-.22.04-.46s0-.36.04-.45a.5.5 0 0 1 .26-.26c.1-.04.22-.04.46-.04h.05c.3 0 .44 0 .55-.06a.5.5 0 0 0 .2-.2c.07-.12.07-.26.07-.56v-.27c0-.2 0-.3.03-.4a1 1 0 0 1 .26-.3l.94-.94'
        stroke='currentColor'
      />
    </svg>
  )
}
