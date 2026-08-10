import type { Icon } from './types'

export const IconHeartFilled: Icon = ({
  size = 24,
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
      data-slot='heart-filled'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M17.67 15.88c1.8-1.65 3.34-3.77 3.34-6.95 0-1.12-.45-2.37-1.26-3.34a4.7 4.7 0 0 0-3.62-1.73c-1.25 0-2.3.51-3.1 1.1a7 7 0 0 0-1.03.95 7 7 0 0 0-1.03-.95 5.2 5.2 0 0 0-3.1-1.1c-1.56 0-2.8.74-3.62 1.73A5.4 5.4 0 0 0 3 8.93c0 3.18 1.53 5.3 3.34 6.95a34 34 0 0 0 2.77 2.2c.9.69 1.71 1.32 2.35 2a.75.75 0 0 0 1.1 0 19 19 0 0 1 2.65-2.22c.81-.6 1.68-1.26 2.47-1.98'
        fill='currentColor'
      />
    </svg>
  )
}
