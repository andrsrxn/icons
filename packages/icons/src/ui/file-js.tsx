import type { Icon } from './types'

export const IconFileJs: Icon = ({
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
      data-slot='icon-ui-file-js'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M3.85 13.1V5.8c0-1.87 0-2.8.58-3.38s1.51-.6 3.38-.62l2.2-.02c1.29-.01 1.93-.02 2.41.26a2 2 0 0 1 .7.7c.3.47.3 1.12.3 2.4s0 1.92.27 2.4a2 2 0 0 0 .7.7c.47.27 1.11.27 2.39.27s1.92 0 2.4.29a2 2 0 0 1 .69.69c.28.47.28 1.11.28 2.4v1.22z'
        fill='currentColor'
      />
      <path
        d='M3.85 13.05v-5.2c0-2.83 0-4.25.88-5.13s2.3-.88 5.12-.88h1.86c1.22 0 1.84 0 2.39.23s.98.66 1.85 1.53l1.22 1.22 1.16 1.13c.9.87 1.35 1.3 1.58 1.87.24.56.24 1.18.24 2.43v2.8'
        stroke='currentColor'
      />
      <path
        d='M13.21 2.36v2.42c0 1.88 0 2.83.58 3.41.59.6 1.53.6 3.42.6h2.43'
        stroke='currentColor'
      />
      <path
        d='M9.38 15.97v3.44c0 2.25-1.03 2.93-2.29 2.93a1.8 1.8 0 0 1-1.68-1.07'
        stroke='currentColor'
      />
      <path
        d='M17.38 16.77a3.5 3.5 0 0 0-2.23-.84c-1.07 0-2.24.54-2.24 1.68 0 2.45 4.47.5 4.47 2.98 0 1.16-1.14 1.79-2.23 1.79-1.1 0-1.83-.31-2.33-1'
        stroke='currentColor'
      />
    </svg>
  )
}
