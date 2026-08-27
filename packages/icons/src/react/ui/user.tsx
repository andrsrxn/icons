import type { Icon } from './types'

export const IconUser: Icon = ({
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
      data-slot='ui-icon-user'
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
        d='M20.27 21.68H3.73c0-4.65 3.7-8.43 8.27-8.43a8.35 8.35 0 0 1 8.27 8.43'
        fill='currentColor'
      />
      <path
        d='M17.33 7.92A5.3 5.3 0 0 1 12 13.25a5.33 5.33 0 1 1 5.33-5.33'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M20.27 21.52a8.27 8.27 0 1 0-16.54 0'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
