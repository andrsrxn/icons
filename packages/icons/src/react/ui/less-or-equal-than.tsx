import type { Icon } from './types'

export const IconLessOrEqualThan: Icon = ({
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
      data-slot='ui-icon-less-or-equal-than'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M19 19.46H5.28M18.6 4.54 13 6.3c-5.03 1.55-7.55 2.33-7.55 3.8s2.52 2.26 7.54 3.83l5.61 1.75'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
