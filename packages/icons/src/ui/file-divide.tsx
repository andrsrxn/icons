import type { Icon } from './types'

export const IconFileDivide: Icon = ({
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
      data-slot='icon-ui-file-divide'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M7.7 22.25c-1.89 0-2.83 0-3.41-.58-.59-.59-.59-1.53-.59-3.42V5.78c0-1.87 0-2.8.58-3.38s1.51-.6 3.38-.62l2.23-.02c1.31-.01 1.97-.02 2.45.27a2 2 0 0 1 .68.67c.3.48.3 1.14.3 2.45 0 1.3 0 1.94.29 2.42q.25.42.67.67c.48.3 1.13.3 2.42.3 1.3 0 1.95 0 2.43.28q.42.26.67.68c.3.47.3 1.12.3 2.42v6.33c0 1.89 0 2.83-.6 3.42-.58.58-1.52.58-3.4.58z'
        fill='currentColor'
      />
      <path
        d='M3.7 11V7.83c0-2.82 0-4.24.88-5.12s2.3-.88 5.12-.88h1.92c1.22 0 1.84 0 2.39.23s.98.66 1.85 1.53l1.24 1.24 1.18 1.15c.9.87 1.34 1.3 1.58 1.86s.23 1.19.23 2.43v.75'
        stroke='currentColor'
      />
      <path
        d='M20.1 18c0 1.17 0 1.75-.17 2.22a3 3 0 0 1-1.87 1.87c-.47.16-1.05.16-2.22.16h-7.9c-1.15 0-1.73 0-2.2-.16a3 3 0 0 1-1.88-1.87c-.16-.47-.16-1.05-.16-2.22'
        stroke='currentColor'
      />
      <path d='M13.12 2.34V4.8c0 1.89 0 2.83.58 3.42s1.53.58 3.41.58h2.47' stroke='currentColor' />
      <path d='M14.04 14.53H9.96' stroke='currentColor' />
      <path d='M5.74 14.53H1.66' stroke='currentColor' />
      <path d='M22.13 14.53h-4.08' stroke='currentColor' />
    </svg>
  )
}
