import type { Icon } from './types'

export const IconSimChip: Icon = ({
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
      data-slot='icon-ui-sim-chip'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M14.74 3.82c3.12 0 4.68 0 5.75.82a4 4 0 0 1 .75.75c.82 1.08.82 2.64.82 5.76v1.4c0 3.23 0 4.83-.88 5.93a4 4 0 0 1-.55.56c-1.07.9-2.68.94-5.9 1.01l1.19-8.35z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M9.26 3.82c-3.12 0-4.68 0-5.75.82a4 4 0 0 0-.75.75c-.82 1.08-.82 2.64-.82 5.76v1.4c0 3.23 0 4.83.88 5.93q.24.31.55.56c1.07.9 2.68.94 5.9 1.01l-1.2-8.35z'
        fill='currentColor'
      />
      <path d='M22.27 12h-6.42' stroke='currentColor' />
      <path d='M9.49 3.83S8.15 7.27 8.15 12s1.34 8.17 1.34 8.17' stroke='currentColor' />
      <path d='M14.53 3.83s1.32 3.44 1.32 8.18-1.32 8.17-1.32 8.17' stroke='currentColor' />
      <path d='M8.15 12H1.73' stroke='currentColor' />
      <path
        d='M1.73 12.18v-.36c0-3.77 0-5.66 1.18-6.83 1.17-1.17 3.05-1.17 6.82-1.17h4.54c3.77 0 5.65 0 6.82 1.17 1.18 1.17 1.18 3.06 1.18 6.83v.36c0 3.77 0 5.66-1.18 6.83-1.17 1.17-3.05 1.17-6.82 1.17H9.73c-3.77 0-5.65 0-6.82-1.17-1.18-1.17-1.18-3.06-1.18-6.83'
        stroke='currentColor'
      />
    </svg>
  )
}
