import type { Icon } from './types'

export const IconCent: Icon = ({
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
      data-slot='ui-icon-cent'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M17.53 5.47a8 8 0 0 0-3.45-.8c-4.2 0-7.6 3.28-7.6 7.33s3.4 7.33 7.6 7.33a8 8 0 0 0 3.45-.8m-4.76 2.88V2.59'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
