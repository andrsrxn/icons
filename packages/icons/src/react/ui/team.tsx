import type { Icon } from './types'

export const IconTeam: Icon = ({
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
      data-slot='icon-ui-team'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M16.72 17.36h5.45c-.61-3.54-2.63-6.19-5.73-6.19-1.1.1-1.06.73-2.09 2.08-.55.56-1.36 1.09-.48 1.54a10 10 0 0 1 2.85 2.57'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M7.28 17.36H1.83c.61-3.54 2.63-6.19 5.73-6.19 1.1.1 1.06.73 2.09 2.08.55.56 1.36 1.09.48 1.54-1.95 1.21-2.85 2.57-2.85 2.57'
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
      <path
        d='M15.83 10.66a3.74 3.74 0 0 1-3.75 3.74 3.75 3.75 0 1 1 3.75-3.74'
        stroke='currentColor'
      />
      <path d='M17.62 19.95a5.54 5.54 0 1 0-11.08 0' stroke='currentColor' />
      <path d='M22.44 17.2a5.54 5.54 0 0 0-5.54-5.54c-.49 0-.78.05-1.23.17' stroke='currentColor' />
      <path d='M1.56 17.2a5.54 5.54 0 0 1 5.54-5.54c.49 0 .78.05 1.23.17' stroke='currentColor' />
    </svg>
  )
}
