import type { Icon } from './types'

export const IconKeyboardSignal: Icon = ({
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
      data-slot='icon-ui-keyboard-signal'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M15.52 22.27c2.83 0 4.24 0 5.12-.88s.88-2.3.88-5.12V14.4c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H8.48c-2.83 0-4.24 0-5.12.88s-.88 2.29-.88 5.12v1.86c0 2.82 0 4.24.88 5.12s2.3.88 5.12.88z'
        fill='currentColor'
      />
      <path
        d='M2.48 15.34c0-3.23 0-4.85.99-5.87l.07-.08c1.02-.98 2.64-.98 5.87-.98h5.18c3.23 0 4.85 0 5.87.98l.07.08c.99 1.02.99 2.64.99 5.87v0c0 3.23 0 4.84-.99 5.86l-.07.08c-1.02.99-2.64.99-5.87.99H9.41c-3.23 0-4.85 0-5.87-.99l-.07-.08c-.99-1.02-.99-2.63-.99-5.86'
        stroke='currentColor'
      />
      <path
        d='M6.55 12.1a.4.4 0 1 1-.8 0 .4.4 0 0 1 .8 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M10.43 16.05a.4.4 0 1 1-.8 0 .4.4 0 0 1 .8 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M6.55 16.05a.4.4 0 1 1-.8 0 .4.4 0 0 1 .8 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M10.43 12.1a.4.4 0 1 1-.8 0 .4.4 0 0 1 .8 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M14.3 16.05a.4.4 0 1 1-.8 0 .4.4 0 0 1 .8 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M14.3 12.1a.4.4 0 1 1-.8 0 .4.4 0 0 1 .8 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M18.18 16.05a.4.4 0 1 1-.8 0 .4.4 0 0 1 .8 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M18.18 12.1a.4.4 0 1 1-.8 0 .4.4 0 0 1 .8 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M15.33 19.27H8.67' stroke='currentColor' />
      <path d='M14.09 5.6a3.5 3.5 0 0 0-4.36 0' stroke='currentColor' />
      <path d='M16.05 3.16c-2.17-1.95-6.24-1.85-8.17 0' stroke='currentColor' />
    </svg>
  )
}
