import type { Icon } from './types'

export const IconUserX: Icon = ({
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
      data-slot='icon-ui-user-x'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M15.47 7.93a5.4 5.4 0 1 1-10.79 0 5.4 5.4 0 0 1 10.8 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M17.44 21.84H1.78a8.4 8.4 0 0 1 8.3-8.46c2.89 0 5.43 1.5 6.92 3.8 2.31 1.26 2.22 2.26.44 4.66'
        fill='currentColor'
      />
      <path d='m16 16.06 5.79 5.78' stroke='currentColor' />
      <path d='m16 21.84 5.78-5.78' stroke='currentColor' />
      <path d='M15.47 7.93a5.4 5.4 0 1 0-10.79 0 5.4 5.4 0 0 0 10.79 0' stroke='currentColor' />
      <path d='M1.78 21.62a8.3 8.3 0 0 1 11.28-7.74' stroke='currentColor' />
    </svg>
  )
}
