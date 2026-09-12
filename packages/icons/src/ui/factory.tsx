import type { Icon } from './types'

export const IconFactory: Icon = ({
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
      data-slot='icon-ui-factory'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' fill='currentColor' d='M3.48 3h3.64v3.85H3.48z' />
      <path
        opacity='.2'
        d='m8.11 21.35-.35-9.49 6.23-5 1.22 4.6 6.29-4.2v12.37l-1.42 1.72z'
        fill='currentColor'
      />
      <path
        d='m7.75 12.12 4.03-3.75c.78-.72 1.17-1.08 1.54-1.1a1 1 0 0 1 .62.2c.3.23.42.74.64 1.78.22 1.02.33 1.54.63 1.76q.28.2.62.2c.38 0 .76-.36 1.54-1.07l.82-.75c1.43-1.3 2.15-1.96 2.75-1.7.6.27.6 1.24.6 3.18v4.45c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H8.18'
        stroke='currentColor'
      />
      <path d='M12 16.11h6.2' stroke='currentColor' />
      <path d='M3.3 7.26h4.1' stroke='currentColor' />
      <path
        d='M3.25 4.56c.05-.9.07-1.36.36-1.63.29-.28.74-.28 1.64-.28h.08c.9 0 1.35 0 1.64.28.3.27.32.72.36 1.62l.85 16.77H4.56c-.98 0-1.48 0-1.77-.31s-.27-.8-.23-1.79z'
        stroke='currentColor'
      />
    </svg>
  )
}
