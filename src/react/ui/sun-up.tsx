import type { Icon } from './types'

export const IconSunUp: Icon = ({
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
      data-slot='ui-icon-sun-up'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M11.97 18.33c-.06.02-5.57 0-5.57 0 0-3.25 2.5-5.88 5.57-5.88s5.57 2.63 5.57 5.88z'
        fill='currentColor'
      />
      <path
        d='M1.82 18.34h20.36M6.4 18.03a5.57 5.57 0 0 1 11.14 0m-.48-7.67 1.54-1.54m1.47 5.69 2.11-.57m-18.25.57-2.11-.57m5.12-3.58L5.41 8.83M9.6 5.57c.9-.9 1.34-1.35 1.87-1.48a2 2 0 0 1 1 0c.53.13.98.58 1.88 1.48m-2.38 3.47V4.16'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
