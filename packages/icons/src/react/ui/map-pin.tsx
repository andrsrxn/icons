import type { Icon } from './types'

export const IconMapPin: Icon = ({
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
      data-slot='ui-icon-map-pin'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.32 9.32c0 3.69 4.38 12.03 6.68 12.03s6.68-8.34 6.68-12.03a6.68 6.68 0 1 0-13.36 0M12 12a3.13 3.13 0 1 1 0-6.27A3.13 3.13 0 0 1 12 12'
        fill='currentColor'
      />
      <path
        d='M14.53 19.43c-1.04 1.3-1.56 1.96-2.53 1.96s-1.48-.66-2.52-1.97c-1.98-2.48-4.4-6.25-4.4-9.86a6.92 6.92 0 1 1 13.84 0c0 3.64-2.42 7.4-4.39 9.87'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <circle
        cx='12'
        cy='9.28'
        r='3.28'
        transform='rotate(90 12 9.28)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
