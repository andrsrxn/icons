import type { Icon } from './types'

export const IconMailReplyAll: Icon = ({
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
      data-slot='icon-ui-mail-reply-all'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='m3.34 5.1 4.47 4.5c2 2.02 3 3.03 4.26 3.03 1.24 0 2.25-1 4.25-3.02l4.49-4.5'
        stroke='currentColor'
      />
      <path
        d='m13.9 15.22-.33.32c-1 1-1.5 1.5-1.5 2.13s.5 1.12 1.5 2.12l.33.33'
        stroke='currentColor'
      />
      <path d='M15.87 17.67h3.69a3.06 3.06 0 0 1 3.06 3.06' stroke='currentColor' />
      <path
        d='m17.1 15.1-.33.33c-1 1-1.5 1.5-1.5 2.12s.5 1.12 1.5 2.12l.33.33'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M1.77 8.69c0-1.93 0-2.89.59-3.15.6-.27 1.3.37 2.74 1.66l5.71 5.12c.65.58.97.87 1.35.86.4 0 .71-.3 1.34-.88l5.39-4.98c1.44-1.33 2.16-2 2.76-1.74s.6 1.24.6 3.2V12c0 3.77 0 5.66-1.17 6.83C19.9 20 18.02 20 14.25 20H9.77C6 20 4.1 20 2.94 18.83S1.77 15.77 1.77 12z'
        fill='currentColor'
      />
      <path
        d='M22.25 13.07V12c0-3.77 0-5.66-1.17-6.83C19.9 4 18.02 4 14.25 4h-4.5C5.98 4 4.1 4 2.92 5.17S1.75 8.23 1.75 12v1.05c0 2.76 0 4.14.65 5.14a4 4 0 0 0 1.17 1.16c1 .65 2.37.65 5.13.65'
        stroke='currentColor'
      />
    </svg>
  )
}
