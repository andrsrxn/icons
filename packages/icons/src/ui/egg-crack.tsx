import type { Icon } from './types'

export const IconEggCrack: Icon = ({
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
      data-slot='icon-ui-egg-crack'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M20.27 12.93c0 2.63-.5 9.32-8.27 9.32-7.78 0-8.48-6.69-8.48-9.32.57-2.22 1.56 1.2 4 1.34 1.31.07 2.9-1.78 4.66-2.67 1.6.74 2.95 2.6 4.02 2.67 1.84 0 3.53-3.3 4.07-1.34'
        fill='currentColor'
      />
      <path
        d='M20.31 13.75c0 5.66-3.72 8.5-8.31 8.5s-8.31-2.84-8.31-8.5 4.24-12 8.31-12 8.31 6.34 8.31 12'
        stroke='currentColor'
      />
      <path
        d='m3.92 11.82 2.1 1.45c.81.55 1.22.83 1.68.83s.86-.27 1.68-.81l.97-.65c.8-.52 1.19-.78 1.63-.79.45 0 .85.25 1.65.76l1.06.67c.82.53 1.23.79 1.69.78s.85-.3 1.64-.86L20 11.83'
        stroke='currentColor'
      />
    </svg>
  )
}
