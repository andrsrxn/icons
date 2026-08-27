import type { Icon } from './types'

export const IconTeam: Icon = ({
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
      data-slot='ui-icon-team'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M16.44 17.05h5.14c-.57-3.34-2.48-5.83-5.4-5.83-1.04.1-1 .68-1.96 1.96-.52.52-1.29 1.02-.45 1.45a9 9 0 0 1 2.67 2.42m-8.88 0H2.42c.57-3.34 2.48-5.83 5.4-5.83 1.04.1 1 .68 1.96 1.96.52.52 1.29 1.02.45 1.45-1.83 1.14-2.67 2.42-2.67 2.42'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M20.13 8.05a3.53 3.53 0 0 1-4.33 3.44c0-1.41-1.67-3.61-1.67-3.61s-1.06-.16-1.03-.32a3.53 3.53 0 0 1 7.03.49m-16.26 0a3.53 3.53 0 0 0 4.33 3.44c0-1.41 1.67-3.61 1.67-3.61s1.06-.16 1.03-.32a3.53 3.53 0 0 0-7.03.49'
        fill='currentColor'
      />
      <path
        d='M13.14 7.35a3.53 3.53 0 1 1 2.45 4.08m-4.73-4.08a3.53 3.53 0 1 0-2.45 4.08'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M15.6 10.73a3.5 3.5 0 0 1-3.53 3.54 3.53 3.53 0 1 1 3.54-3.54'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M17.3 19.49a5.22 5.22 0 1 0-10.45 0m14.98-2.59a5.22 5.22 0 0 0-6.37-5.06M2.17 16.9a5.22 5.22 0 0 1 6.37-5.06'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
