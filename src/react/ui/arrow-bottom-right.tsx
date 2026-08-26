import type { Icon } from './types'

export const IconArrowBottomRight: Icon = ({
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
      data-slot='ui-icon-arrow-bottom-right'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M17.65 7.8V14c.01 1.88.01 2.83-.57 3.42-.59.58-1.53.58-3.42.58h-6.2M5.9 6.34l10.48 10.48'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
