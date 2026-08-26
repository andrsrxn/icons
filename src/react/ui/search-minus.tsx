import type { Icon } from './types'

export const IconSearchMinus: Icon = ({
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
      data-slot='ui-icon-search-minus'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M17.8 10.26a7.61 7.61 0 1 1-15.23 0 7.61 7.61 0 0 1 15.22 0'
        fill='currentColor'
      />
      <path
        d='M6.54 10.26h7.29m1.77 5.3 5.78 5.77M17.8 10.26a7.6 7.6 0 0 1-7.62 7.6 7.61 7.61 0 1 1 7.61-7.6'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
