import type { Icon } from './types'

export const IconUsersPlus: Icon = ({
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
      data-slot='ui-icon-users-plus'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M14.75 18.54h6.54C20.55 14.23 18.13 11 14.4 11c-1.32.12-1.26.88-2.49 2.53-.66.68-1.64 1.32-.58 1.87 2.33 1.47 3.4 3.13 3.4 3.13'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M19.44 6.97a4.5 4.5 0 0 1-5.5 4.38c0-1.8-2.14-4.59-2.14-4.59s-1.33-.2-1.3-.4a4.5 4.5 0 0 1 8.94.61'
        fill='currentColor'
      />
      <path
        d='M15.29 18.54h6.42m-3.21 3.21v-6.42m-7.95-9.25a4.5 4.5 0 1 1 3.11 5.19'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M13.7 10.39a4.5 4.5 0 0 1-4.49 4.5 4.5 4.5 0 1 1 4.5-4.5'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M2.64 21.52A6.57 6.57 0 0 1 12 15.57m1.91-4.11h.88q1.51.01 2.82.64'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
