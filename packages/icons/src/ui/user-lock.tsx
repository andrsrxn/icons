import type { Icon } from './types'

export const IconUserLock: Icon = ({
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
      data-slot='icon-ui-user-lock'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M15.4 7.92a5.33 5.33 0 1 1-10.65 0 5.33 5.33 0 0 1 10.66 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M16.07 21.84H1.77a8.4 8.4 0 0 1 8.3-8.46c2.37 0 5.1 1.18 6.8 3.32-.8 1-.98 2.4-.8 5.14'
        fill='currentColor'
      />
      <rect x='15.74' y='17.36' width='6.48' height='4.84' rx='1' stroke='currentColor' />
      <path d='M20.81 17.36 20.65 16a1.65 1.65 0 0 0-3.28-.01l-.18 1.37' stroke='currentColor' />
      <path
        d='M15.4 7.92a5.3 5.3 0 0 1-5.33 5.33 5.33 5.33 0 1 1 5.34-5.33'
        stroke='currentColor'
      />
      <path d='M1.78 21.68a8.3 8.3 0 0 1 12.32-7.26' stroke='currentColor' />
    </svg>
  )
}
