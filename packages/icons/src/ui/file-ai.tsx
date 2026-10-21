import type { Icon } from './types'

export const IconFileAi: Icon = ({
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
      data-slot='icon-ui-file-ai'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M3.88 13.08V5.8c0-1.87 0-2.8.57-3.39.58-.58 1.52-.6 3.38-.61l2.19-.03c1.28 0 1.92-.02 2.4.26a2 2 0 0 1 .71.7c.28.48.28 1.12.28 2.4s0 1.91.28 2.38a2 2 0 0 0 .7.7c.48.28 1.11.28 2.38.28 1.28 0 1.91 0 2.39.28a2 2 0 0 1 .7.7c.28.48.28 1.11.28 2.38v1.23z'
        fill='currentColor'
      />
      <path
        d='M3.88 13.02V7.84c0-2.83 0-4.24.87-5.12.88-.88 2.3-.88 5.13-.88h1.83c1.23 0 1.84 0 2.39.23.55.22.98.66 1.85 1.52l1.22 1.22 1.15 1.12c.9.87 1.34 1.31 1.58 1.87s.24 1.18.24 2.43v2.79'
        stroke='currentColor'
      />
      <path
        d='M13.22 2.35v2.4c0 1.9 0 2.84.58 3.42.58.6 1.53.6 3.41.6h2.42'
        stroke='currentColor'
      />
      <path d='M15.7 22.17V15.6' stroke='currentColor' />
      <path d='M7.76 19.94h3.41' stroke='currentColor' />
      <path
        d='m6.88 22.17.71-2.42c.82-2.77 1.22-4.15 1.98-4.14.76 0 1.13 1.4 1.87 4.19l.64 2.37'
        stroke='currentColor'
      />
    </svg>
  )
}
