import type { Icon } from './types'

export const IconHelmetOff: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-helmet-off'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M2.03 13.52c0 2.8 2.4 5.37 3.96 7.31h13.97c.86-.95 1.22-3.29 1.7-4.5l-3.43-.23-5.87-2L10 10.34l1.7-1.97h8.9c-1.84-3.29-4.6-5.5-8.63-5.5-5.94 0-9.95 4.7-9.95 10.65'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M21.87 13.26c-.45-6.3-4.85-10.4-9.88-10.4-5.94 0-10.24 4.47-9.97 10.4a9.4 9.4 0 0 0 3.95 7.24 3 3 0 0 0 .97.5c.44.14.78.14 1.45.14h8.44c1.43 0 2.14 0 2.91-.54.77-.53.95-1 1.3-1.94.65-1.73.95-3.74.83-5.4'
        stroke='currentColor'
      />
      <path
        d='M20.5 8.61h-7.39c-1.5 0-2.26 0-2.7.68s-.22 1.2.24 2.25c.95 2.18 3.53 4.47 10.57 4.78'
        stroke='currentColor'
      />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
    </svg>
  )
}
