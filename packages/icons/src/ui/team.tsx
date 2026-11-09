import type { Icon } from './types'

export const IconTeam: Icon = ({
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
      data-slot='icon-ui-team'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M16.82 17.56h5.63c-.63-3.66-2.72-6.39-5.92-6.39-1.14.1-1.09.75-2.15 2.15-.57.57-1.4 1.12-.5 1.59a10 10 0 0 1 2.94 2.65'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M7.18 17.56H1.55c.63-3.66 2.72-6.39 5.92-6.39 1.14.1 1.09.75 2.15 2.15.57.57 1.4 1.12.5 1.59-2.01 1.25-2.94 2.65-2.94 2.65'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M20.63 7.8a3.75 3.75 0 0 1-4.6 3.66c0-1.5-1.77-3.83-1.77-3.83s-1.12-.17-1.1-.34a3.75 3.75 0 0 1 7.47.51'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M3.37 7.8a3.75 3.75 0 0 0 4.6 3.66c0-1.5 1.77-3.83 1.77-3.83s1.12-.17 1.1-.34a3.75 3.75 0 0 0-7.47.51'
        fill='currentColor'
      />
      <path d='M13.21 7.06a3.75 3.75 0 1 1 2.6 4.33' stroke='currentColor' />
      <path d='M10.79 7.06a3.75 3.75 0 1 0-2.6 4.33' stroke='currentColor' />
      <path d='M15.83 10.66a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0' stroke='currentColor' />
      <path d='M6.54 19.95a5.54 5.54 0 0 1 11.08 0' stroke='currentColor' />
      <path d='M22.44 17.2a5.54 5.54 0 0 0-5.54-5.54c-.49 0-.78.05-1.23.17' stroke='currentColor' />
      <path d='M1.56 17.2a5.54 5.54 0 0 1 5.54-5.54c.49 0 .78.05 1.23.17' stroke='currentColor' />
    </svg>
  )
}
