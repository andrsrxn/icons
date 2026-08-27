import type { Icon } from './types'

export const IconBarrel: Icon = ({
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
      data-slot='ui-icon-barrel'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M3.34 12c0-3.47.6-5.16 1.72-7.26.53-.98.79-1.47 1.26-1.76.48-.28 1.06-.28 2.22-.28h7.26c1.17 0 1.75 0 2.22.28s.74.78 1.26 1.76C20.4 6.84 21 8.55 21 12s-.6 5.15-1.72 7.26c-.52.98-.78 1.47-1.26 1.76-.47.28-1.05.28-2.22.28H8.54c-1.16 0-1.74 0-2.22-.28-.47-.29-.73-.78-1.26-1.76-1.12-2.1-1.72-3.79-1.72-7.26'
        fill='currentColor'
      />
      <path
        d='M3.34 12c0-2.88.42-4.54 1.2-6.22.66-1.43 1-2.14 1.73-2.61.74-.47 1.64-.47 3.44-.47h4.93c1.8 0 2.7 0 3.43.47.74.47 1.07 1.18 1.73 2.61.8 1.7 1.2 3.36 1.2 6.22s-.41 4.53-1.2 6.22c-.66 1.43-1 2.14-1.73 2.61-.74.47-1.64.47-3.43.47H9.7c-1.8 0-2.7 0-3.44-.47s-1.07-1.18-1.73-2.61c-.78-1.68-1.2-3.34-1.2-6.22'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M10.15 2.7C9.15 5.99 8.6 8.25 8.6 12s.55 6.01 1.56 9.3M13.8 2.7c1.02 3.29 1.56 5.55 1.56 9.3s-.54 6.01-1.55 9.3M4.22 8.62h15.65M4.22 15.38h15.65'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
