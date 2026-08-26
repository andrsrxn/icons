import type { Icon } from './types'

export const IconShredder: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-shredder'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M2.43 13.35h19.1M4.7 19.36v-3.48m7.15 3.48v-3.48m7.42 3.48v-3.48m-11 5.68v-5.68m7.16 5.68v-5.68'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        opacity='.2'
        d='M4.5 13.35V6.93c0-1.86 0-2.8.57-3.38.58-.59 1.52-.6 3.38-.62l1.72-.01c1.04-.01 1.55-.02 1.96.16a2 2 0 0 1 .99.98c.18.4.18.92.18 1.96 0 1.03 0 1.54.19 1.94a2 2 0 0 0 .97.98c.4.18.92.18 1.94.18 1.03 0 1.55 0 1.95.19a2 2 0 0 1 .97.97c.19.4.19.91.19 1.94v1.13z'
        fill='currentColor'
      />
      <path
        d='M4.5 13.3V8.98c0-2.83 0-4.25.87-5.13.88-.87 2.3-.87 5.13-.87h1.04c1.22 0 1.84 0 2.39.22.55.23.98.66 1.85 1.53l.99.99.93.9c.89.87 1.34 1.3 1.57 1.87.24.56.24 1.18.24 2.43v2.38'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M13.12 3.45v1.91c0 1.89 0 2.83.58 3.42.59.59 1.53.59 3.42.59h1.92'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
