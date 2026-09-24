import type { Icon } from './types'

export const IconServerX: Icon = ({
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
      data-slot='icon-ui-server-x'
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
        d='M4.84 21.23c-.98 0-1.48 0-1.86-.17a2 2 0 0 1-1.03-1.03c-.17-.38-.17-.88-.17-1.86s0-1.48.17-1.86a2 2 0 0 1 1.03-1.03c.38-.17.88-.17 1.86-.17h13.04l.58 1c.57.97.85 1.45.86 1.98 0 .53-.27 1.02-.8 2l-.64 1.14z'
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
        d='M22.22 12.1c0-1.03 0-1.54-.19-1.94a2 2 0 0 0-.98-.98c-.4-.18-.9-.18-1.93-.18H4.84c-.98 0-1.48 0-1.86.17a2 2 0 0 0-1.03 1.02c-.17.39-.17.88-.17 1.87 0 .98 0 1.47.17 1.86a2 2 0 0 0 1.03 1.02c.38.17.88.17 1.86.17h8.45'
        stroke='currentColor'
      />
      <path
        d='M13.8 15.11H4.83a5 5 0 0 0-1.86.17 2 2 0 0 0-1.03 1.03c-.17.38-.17.87-.17 1.86 0 .98 0 1.48.17 1.86a2 2 0 0 0 1.03 1.03c.38.17.88.17 1.86.17h8.95'
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
      <path d='m17.62 15.72 4.9 4.9' stroke='currentColor' />
      <path d='m17.62 20.62 4.9-4.9' stroke='currentColor' />
    </svg>
  )
}
