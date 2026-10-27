import type { Icon } from './types'

export const IconFileFunction: Icon = ({
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
      data-slot='icon-ui-file-function'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M7.67 22.24c-1.89 0-2.83 0-3.42-.59s-.58-1.53-.58-3.41V5.74c0-1.87 0-2.8.58-3.38.57-.59 1.5-.6 3.38-.62l2.24-.02c1.31-.01 1.97-.02 2.45.27q.42.25.68.67c.3.48.3 1.14.3 2.45 0 1.3 0 1.95.29 2.43q.25.41.67.67c.48.3 1.13.3 2.43.3s1.95 0 2.43.28q.41.26.67.67c.3.48.3 1.13.3 2.43v4.35c0 2.82 0 4.24-.89 5.12-.88.88-2.3.88-5.12.88z'
        fill='currentColor'
      />
      <path
        d='M3.67 16.24V7.78c0-2.83 0-4.24.88-5.12s2.29-.88 5.12-.88h1.93c1.22 0 1.84 0 2.39.23s.98.66 1.85 1.53l1.24 1.24 1.19 1.15c.9.87 1.34 1.31 1.58 1.87s.23 1.18.23 2.43v6c0 2.83 0 4.25-.88 5.13s-2.3.88-5.12.88H9.67h0c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12'
        stroke='currentColor'
      />
      <path d='M13.1 2.3v2.47c0 1.88 0 2.83.58 3.41s1.53.59 3.41.59h2.48' stroke='currentColor' />
      <path
        d='M8.27 18.3c0 .48.37 1.1 1.1 1.16.84.07 1.24-.51 1.52-1.29.92-2.51 1.15-3 1.81-5.36.17-.58.7-1.02 1.33-1.08.5-.04 1.33.24 1.45 1.08'
        stroke='currentColor'
      />
      <path d='M10 15.27h4.42' stroke='currentColor' />
    </svg>
  )
}
