import type { Icon } from './types'

export const IconLamp: Icon = ({
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
      data-slot='ui-icon-lamp'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M5.95 4.43c.59-.83.88-1.24 1.31-1.46.44-.23.94-.23 1.96-.23h5.62c1.02 0 1.53 0 1.97.23s.73.65 1.31 1.49l1.51 2.16C20.6 8 21.07 8.7 20.8 9.22c-.28.55-1.12.55-2.8.55H6.04c-1.7 0-2.54 0-2.82-.54s.21-1.24 1.19-2.62z'
        fill='currentColor'
      />
      <path
        d='M12 21.3V9.76m3.26 11.54H8.74M5.95 4.43c.59-.83.88-1.24 1.31-1.46.44-.23.94-.23 1.96-.23h5.62c1.02 0 1.53 0 1.97.23s.73.65 1.31 1.49l1.51 2.16C20.6 8 21.07 8.7 20.8 9.22c-.28.55-1.12.55-2.8.55H6.04c-1.7 0-2.54 0-2.82-.54s.21-1.24 1.19-2.62z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
