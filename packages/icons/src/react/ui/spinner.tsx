import type { Icon } from './types'

export const IconSpinner: Icon = ({
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
      data-slot='ui-icon-spinner'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M2.38 12H6.1m11.68 0h3.84m-9.66 9.44v-3.6m0-11.67v-3.6m4.74 4.68 2.56-2.56M4.65 19.3l2.57-2.57M7.2 7.24 4.66 4.7m14.6 14.6-2.56-2.57'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
