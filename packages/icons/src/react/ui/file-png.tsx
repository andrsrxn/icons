import type { Icon } from './types'

export const IconFilePng: Icon = ({
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
      data-slot='icon-ui-file-png'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M3.86 13V5.72c0-1.87 0-2.8.58-3.39.58-.58 1.52-.6 3.38-.61L10 1.7c1.28-.02 1.92-.02 2.4.25a2 2 0 0 1 .7.71c.29.47.29 1.11.29 2.4 0 1.26 0 1.89.28 2.36a2 2 0 0 0 .7.7c.47.29 1.1.29 2.37.29s1.9 0 2.38.27a2 2 0 0 1 .7.71c.28.47.28 1.1.28 2.37V13z'
        fill='currentColor'
      />
      <path
        d='M3.86 12.93V7.77c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h1.82c1.23 0 1.84 0 2.4.23.54.23.98.66 1.84 1.52l1.22 1.22 1.15 1.12c.9.87 1.34 1.3 1.57 1.86.24.56.24 1.19.24 2.43v2.78'
        stroke='currentColor'
      />
      <path
        d='m13.2 2.28-.01 2.4c0 1.89 0 2.83.58 3.42.59.58 1.53.58 3.42.58h2.4'
        stroke='currentColor'
      />
      <path d='M2.2 15.76v6.4' stroke='currentColor' />
      <path
        d='M2.22 15.76H4.5c.96 0 1.73.82 1.73 1.83s-.77 1.83-1.73 1.83H2.22'
        stroke='currentColor'
      />
      <path d='M22.2 19.02a3.26 3.26 0 1 1-1.78-2.9' stroke='currentColor' />
      <path d='M19.36 19.02h2.84' stroke='currentColor' />
      <path d='M8.88 15.8v6.47' stroke='currentColor' />
      <path d='m8.96 15.76 4.08 6.51' stroke='currentColor' />
      <path d='M13.04 15.8v6.47' stroke='currentColor' />
    </svg>
  )
}
