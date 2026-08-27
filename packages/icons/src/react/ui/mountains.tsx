import type { Icon } from './types'

export const IconMountains: Icon = ({
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
      data-slot='ui-icon-mountains'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='m19.75 10.83-5.56.4-1.28-.71-2.65.15-3.24.85-2.8-.85-1.27 8.73h18.68z'
        fill='currentColor'
      />
      <path
        d='M9.43 3.79c-3.26 0-5.28 6.91-6.29 11.7-.42 2-.63 3-.03 3.74s1.67.74 3.8.74h4.38c2.14 0 3.21 0 3.81-.74.6-.73.4-1.74-.02-3.76-.97-4.8-2.87-11.68-5.65-11.68'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M13.45 10.18s.94-3.32 3.47-3.32c2.62 0 3.81 5.12 4.33 8.96.26 1.85.38 2.78-.22 3.46s-1.58.69-3.55.69h-4.9'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M4.8 10.55s1.38.83 2.65.82c1.5 0 1.84-1.17 3.26-1.17A6.3 6.3 0 0 1 14 11.28m-.2-.41s.58.45 1.46.45c1.03-.01 1.76-.77 2.61-.77.8 0 2.21.6 2.21.6'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
