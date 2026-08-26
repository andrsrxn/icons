import type { Icon } from './types'

export const IconJustice: Icon = ({
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
      data-slot='ui-icon-justice'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle
        opacity='.2'
        cx='12'
        cy='5.01'
        r='2.46'
        transform='rotate(90 12 5)'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M6.53 16.63a2.46 2.46 0 0 1-2.46-2.46c0-1.36 1.1-4.08 2.46-4.08s2.46 2.72 2.46 4.08-1.1 2.46-2.46 2.46m10.93 0A2.46 2.46 0 0 1 15 14.17c0-1.36 1.1-4.08 2.46-4.08s2.46 2.72 2.46 4.08-1.1 2.46-2.46 2.46'
        fill='currentColor'
      />
      <circle
        cx='12'
        cy='5.01'
        r='2.46'
        transform='rotate(90 12 5)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M6.53 16.63a2.46 2.46 0 0 1-2.46-2.46c0-2.11 2.46-4.44 2.46-4.44s2.46 2.17 2.46 4.44c0 1.36-1.1 2.46-2.46 2.46m10.93 0A2.46 2.46 0 0 1 15 14.17c0-2.11 2.46-4.44 2.46-4.44s2.46 2.17 2.46 4.44c0 1.36-1.1 2.46-2.46 2.46m-8.81 4.7h6.67M11.99 7.47v13.86M12 8.27c-.51.16-1.82.63-3.1.76a8 8 0 0 1-3.6-.3m6.7-.46c.51.16 1.82.63 3.1.76a8 8 0 0 0 3.6-.3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
