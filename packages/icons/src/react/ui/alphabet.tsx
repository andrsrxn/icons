import type { Icon } from './types'

export const IconAlphabet: Icon = ({
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
      data-slot='icon-ui-alphabet'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M11.22 7.8h1.1a1.94 1.94 0 0 1 0 3.88h-.5' stroke='currentColor' />
      <path
        d='M11.22 7.8h-.02a1.5 1.5 0 0 0-1.5 1.5v5.4c0 .82.67 1.49 1.5 1.5h.02'
        stroke='currentColor'
      />
      <path d='M11.93 11.68h1a2.26 2.26 0 0 1 0 4.52h-1.54' stroke='currentColor' />
      <path
        d='m1.66 16.22.93-3.77c.78-3.16 1.16-4.73 1.95-4.73.78 0 1.17 1.58 1.94 4.74l.91 3.76'
        stroke='currentColor'
      />
      <path d='M6.33 12.83h-3.6' stroke='currentColor' />
      <path
        d='M22.34 8.13c-.6-.45-1.49-.45-1.49-.45-1.94 0-3.51 1.98-3.51 4.41s1.57 4.4 3.51 4.4c0 0 1 0 1.49-.37'
        stroke='currentColor'
      />
    </svg>
  )
}
