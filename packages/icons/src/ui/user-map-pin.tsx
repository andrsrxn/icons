import type { Icon } from './types'

export const IconUserMapPin: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-user-map-pin'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M15.47 7.99a5.4 5.4 0 1 1-10.79 0 5.4 5.4 0 0 1 10.8 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M17.82 21.84H1.78a8.4 8.4 0 0 1 8.3-8.46c2.36 0 4.95 1.04 6.27 3.1-.8 1-.08 2.72 1.47 5.36'
        fill='currentColor'
      />
      <path d='M15.47 7.99a5.4 5.4 0 1 0-10.79 0 5.4 5.4 0 0 0 10.79 0' stroke='currentColor' />
      <path d='M1.78 21.68a8.3 8.3 0 0 1 8.3-8.3c.87 0 2.18.29 3.23.73' stroke='currentColor' />
      <path
        d='M15.86 16.9c0 1.67 1.08 3.4 2 4.56.52.66.77.99 1.26.99.48 0 .74-.33 1.26-.98.91-1.17 2-2.9 2-4.57a3.26 3.26 0 0 0-6.52 0'
        stroke='currentColor'
      />
      <path
        d='M19.6 17.08a.48.48 0 1 1-.96 0 .48.48 0 0 1 .95 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
