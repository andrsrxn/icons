import type { Icon } from './types'

export const IconLock: Icon = ({
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
      data-slot='icon-ui-lock'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M3.32 15.25c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h5.36c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v.95c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H9.32c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12z'
        fill='currentColor'
      />
      <path
        d='M9.8 22.2h4.4c2.8 0 4.2 0 5.15-.75q.31-.26.58-.58c.75-.96.75-2.35.75-5.15v0c0-2.79 0-4.18-.75-5.14a4 4 0 0 0-.58-.58c-.96-.75-2.35-.75-5.14-.75H9.79c-2.79 0-4.18 0-5.14.75a4 4 0 0 0-.58.58c-.75.96-.75 2.35-.75 5.14v0c0 2.8 0 4.2.75 5.15q.26.31.58.58c.96.75 2.35.75 5.14.75'
        stroke='currentColor'
      />
      <path d='m7.63 9.25.47-4.04a3.96 3.96 0 0 1 7.88.04l.43 4' stroke='currentColor' />
      <path
        d='M13.11 15.44a1.11 1.11 0 1 1-2.22 0 1.11 1.11 0 0 1 2.22 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
