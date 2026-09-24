import type { Icon } from './types'

export const IconServerRestore: Icon = ({
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
      data-slot='icon-ui-server-restore'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='1.78'
        y='9'
        width='6.11'
        height='20.43'
        rx='2'
        transform='rotate(-90 1.78 9)'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M4.84 21.23c-.98 0-1.48 0-1.86-.17a2 2 0 0 1-1.03-1.03c-.17-.38-.17-.88-.17-1.86s0-1.48.17-1.86a2 2 0 0 1 1.03-1.03c.38-.17.88-.17 1.86-.17h14.31c.99 0 1.48 0 1.86.17a2 2 0 0 1 1.03 1.03c.17.38.17.87.17 1.86 0 .98 0 1.48-.17 1.86A2 2 0 0 1 21 21.06c-.38.17-.87.17-1.86.17z'
        fill='currentColor'
      />
      <rect
        x='1.78'
        y='9'
        width='6.11'
        height='20.43'
        rx='2'
        transform='rotate(-90 1.78 9)'
        stroke='currentColor'
      />
      <path
        d='M22.22 12.23c0-1.15 0-1.72-.23-2.16a2 2 0 0 0-.85-.84C20.71 9 20.14 9 19 9H4.84c-.98 0-1.48 0-1.86.17a2 2 0 0 0-1.03 1.02c-.17.39-.17.88-.17 1.87 0 .98 0 1.47.17 1.86a2 2 0 0 0 1.03 1.02c.38.17.88.17 1.86.17h7.13'
        stroke='currentColor'
      />
      <path
        d='M12.02 15.11H4.84c-.98 0-1.48 0-1.86.17a2 2 0 0 0-1.03 1.03c-.17.38-.17.87-.17 1.86 0 .98 0 1.48.17 1.86a2 2 0 0 0 1.03 1.03c.38.17.88.17 1.86.17h7.18'
        stroke='currentColor'
      />
      <path
        d='M5.83 5.94a.41.41 0 1 1-.83 0 .41.41 0 0 1 .83 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M5.83 12.06a.41.41 0 1 1-.83 0 .41.41 0 0 1 .83 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M5.83 18.17a.41.41 0 1 1-.83 0 .41.41 0 0 1 .83 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M9.93 5.94a.41.41 0 1 1-.82 0 .41.41 0 0 1 .82 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M9.93 12.06a.41.41 0 1 1-.82 0 .41.41 0 0 1 .82 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M9.93 18.17a.41.41 0 1 1-.82 0 .41.41 0 0 1 .82 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M16.2 16.85c1.1-1.46 2.2-1.74 3.08-1.74a3.24 3.24 0 1 1-2.27 5.54'
        stroke='currentColor'
      />
      <path d='M15.91 14.75v1.41c0 .47 0 .7.15.86.14.14.38.14.85.14h1.41' stroke='currentColor' />
    </svg>
  )
}
