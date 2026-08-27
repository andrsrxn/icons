import type { Icon } from './types'

export const IconUserSettings: Icon = ({
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
      data-slot='ui-icon-user-settings'
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
        d='m16.91 19.32.36 2.36H3.73c0-4.65 3.7-8.43 8.27-8.43 2.2 0 4.19.87 5.67 2.3 0 0-1.29 2.23-.76 3.77'
        fill='currentColor'
      />
      <path
        d='M17.33 7.92A5.3 5.3 0 0 1 12 13.25a5.33 5.33 0 1 1 5.33-5.33'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3.73 21.52a8.27 8.27 0 0 1 10.7-7.9'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <circle
        cx='18.76'
        cy='18.59'
        r='2.04'
        transform='rotate(-30 18.76 18.6)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m15 18.58 1.14.03m4.51-3.26-.48.81m-3.33 5.69.48-.82m5.2-2.42-1.22-.03m-1.31 2.15.66 1.12m-3.78-6.5.82 1.4'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
