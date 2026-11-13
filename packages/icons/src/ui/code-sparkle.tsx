import type { Icon } from './types'

export const IconCodeSparkle: Icon = ({
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
      data-slot='icon-ui-code-sparkle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='m16.03 5.88 4.46 3.72h0c.95.79 1.42 1.18 1.6 1.64a2 2 0 0 1 0 1.5c-.18.47-.65.86-1.6 1.65'
        stroke='currentColor'
      />
      <path
        d='M7.97 5.88 4.32 8.93h0c-1.7 1.42-2.56 2.13-2.56 3.06s.85 1.65 2.55 3.08l3.66 3.05'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='m17.4 16.35-1.12-2.12-1.14 2.12-2.17 1.2 2.17 1.12 1.14 2.48 1.12-2.48 2.37-1.23z'
        fill='currentColor'
      />
      <path d='M16.43 13.77c0 1.91-2.06 3.98-3.98 3.98' stroke='currentColor' />
      <path d='M16.43 13.77c0 1.91 2.07 3.98 3.98 3.98' stroke='currentColor' />
      <path d='M16.43 21.74c0-1.88-2.07-3.99-3.98-3.99' stroke='currentColor' />
      <path d='M16.43 21.74c0-1.9 2.1-3.99 3.98-3.99' stroke='currentColor' />
    </svg>
  )
}
