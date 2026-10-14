import type { Icon } from './types'

export const IconSimChip: Icon = ({
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
      data-slot='icon-ui-sim-chip'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M16.06 3.82c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v6.16c0 1.84 0 2.77-.57 3.35s-1.5.6-3.34.65l-3.41.07 1.18-8.35-1.18-7.88z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M7.94 3.82c-2.83 0-4.24 0-5.12.88S1.94 7 1.94 9.82v6.16c0 1.84 0 2.77.57 3.35s1.5.6 3.34.65l3.41.07-1.18-8.35 1.18-7.88z'
        fill='currentColor'
      />
      <path d='M22.27 12h-6.42' stroke='currentColor' />
      <path d='M9.49 3.83S8.15 7.27 8.15 12s1.34 8.17 1.34 8.17' stroke='currentColor' />
      <path d='M14.53 3.83s1.32 3.44 1.32 8.18-1.32 8.17-1.32 8.17' stroke='currentColor' />
      <path d='M8.15 12H1.73' stroke='currentColor' />
      <rect
        width='16.36'
        height='20.53'
        rx='3'
        transform='matrix(0 -1 -1 0 22.27 20.18)'
        stroke='currentColor'
      />
    </svg>
  )
}
