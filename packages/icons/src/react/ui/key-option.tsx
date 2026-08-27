import type { Icon } from './types'

export const IconKeyOption: Icon = ({
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
      data-slot='ui-icon-key-option'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M2.74 7.33h4.21c1.13 0 1.7 0 2.16.26.46.27.74.76 1.3 1.74l3.55 6.13c.56.97.84 1.46 1.3 1.73s1.03.27 2.16.27h3.84m-6-10.13h6'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
