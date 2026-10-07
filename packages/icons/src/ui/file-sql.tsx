import type { Icon } from './types'

export const IconFileSql: Icon = ({
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
      data-slot='icon-ui-file-sql'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M3.83 13.04V5.72c0-1.87 0-2.8.58-3.4.58-.58 1.51-.58 3.38-.6L10 1.69c1.3-.01 1.95-.02 2.43.27a2 2 0 0 1 .7.68c.28.48.28 1.13.28 2.43 0 1.28 0 1.92.28 2.4a2 2 0 0 0 .7.69c.47.28 1.11.28 2.4.28s1.92 0 2.4.29a2 2 0 0 1 .69.68c.28.48.28 1.12.28 2.4v1.23z'
        fill='currentColor'
      />
      <path
        d='M3.83 12.98V7.76c0-2.83 0-4.25.88-5.12s2.3-.88 5.12-.88h1.88c1.22 0 1.84 0 2.39.22.55.23.98.67 1.85 1.53l1.23 1.23 1.17 1.14c.9.87 1.34 1.3 1.57 1.86.24.56.24 1.19.24 2.43v2.81'
        stroke='currentColor'
      />
      <path
        d='M13.21 2.27V4.7c0 1.9 0 2.84.58 3.42.59.59 1.53.59 3.42.59h2.44'
        stroke='currentColor'
      />
      <path d='M18.5 15.76v6.5' stroke='currentColor' />
      <path d='m13.1 19.57 2.82 2.82' stroke='currentColor' />
      <path d='M21.65 22.26H18.5' stroke='currentColor' />
      <path
        d='M7.3 16.53a3.5 3.5 0 0 0-2.29-.87c-1.09 0-2.29.56-2.29 1.72 0 2.51 4.58.51 4.58 3.06 0 1.19-1.17 1.83-2.29 1.83-1.11 0-1.87-.32-2.38-1.02'
        stroke='currentColor'
      />
      <path
        d='M15.8 19.02a3.3 3.3 0 0 1-.89 2.27c-.56.6-1.35.98-2.22.98a3.2 3.2 0 0 1-3.11-3.25c0-1.8 1.39-3.26 3.1-3.26a3.2 3.2 0 0 1 3.12 3.26'
        stroke='currentColor'
      />
    </svg>
  )
}
