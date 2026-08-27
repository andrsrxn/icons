import type { Icon } from './types'

export const IconMapPinPlus: Icon = ({
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
      data-slot='ui-icon-map-pin-plus'
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
        d='M5.32 9.36c0 3.68 4.38 12.03 6.68 12.03s6.68-8.35 6.68-12.03a6.68 6.68 0 1 0-13.36 0'
        fill='currentColor'
      />
      <path
        d='M14.53 19.46c-1.04 1.3-1.56 1.96-2.53 1.96s-1.48-.65-2.52-1.96c-1.98-2.48-4.4-6.25-4.4-9.86a6.92 6.92 0 1 1 13.84 0c0 3.63-2.42 7.4-4.39 9.86M8.76 9.47h6.48M12 12.71V6.24'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
