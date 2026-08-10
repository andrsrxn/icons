import type { Icon } from './types'

export const IconPool: Icon = ({
  size = 24,
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
      data-slot='pool'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M8.76 15.38V5.74c0-1.27.74-2.25 2.08-2.25 1.08 0 1.86.87 1.86 1.97m2.54 11.62V5.74c0-1.27.75-2.25 2.08-2.25 1.09 0 1.86.87 1.86 1.97m-3.94 2.59H8.76m6.48 3.93H8.76'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path
        d='M3.85 16.7a9.7 9.7 0 0 1 5.4-1.32c2.74.01 3.34 1.93 6.18 1.93 2.08 0 3.55-.45 4.72-1.46M3.85 19.9a9.6 9.6 0 0 1 5.4-1.32c2.74 0 3.34 1.93 6.18 1.93 2.08 0 3.55-.45 4.72-1.46'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path opacity='.2' fill='currentColor' d='M8.76 8.04H15v3.95H8.76z' />
      <path opacity='.2' d='M8.76 11.98H15V17l-3-1.16-3.24-.46z' fill='currentColor' />
    </svg>
  )
}
