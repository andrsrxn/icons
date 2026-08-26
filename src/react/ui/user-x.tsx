import type { Icon } from './types'

export const IconUserX: Icon = ({
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
      data-slot='ui-icon-user-x'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M17.33 7.92a5.33 5.33 0 1 1-10.66 0 5.33 5.33 0 0 1 10.66 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M17.5 21.68H3.73c0-4.65 3.7-8.43 8.27-8.43 4 0 7.34 2.9 8.1 6.75z'
        fill='currentColor'
      />
      <path
        d='M17.33 7.92A5.3 5.3 0 0 1 12 13.25a5.33 5.33 0 1 1 5.33-5.33M17 16.94l5 5m-5 0 5-5'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3.73 21.52A8.27 8.27 0 0 1 15.2 13.9'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
