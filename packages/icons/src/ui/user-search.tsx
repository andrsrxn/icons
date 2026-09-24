import type { Icon } from './types'

export const IconUserSearch: Icon = ({
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
      data-slot='icon-ui-user-search'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M15.47 7.99a5.4 5.4 0 1 1-10.79 0 5.4 5.4 0 0 1 10.8 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M16.93 21.84H1.78a8.4 8.4 0 0 1 8.3-8.46c1.96 0 4.2.82 5.87 2.34L14.8 17.9s.74 1.66 2.13 3.94'
        fill='currentColor'
      />
      <path d='M15.47 7.99a5.4 5.4 0 0 1-5.4 5.4 5.4 5.4 0 1 1 5.4-5.4' stroke='currentColor' />
      <path d='M1.78 21.68a8.3 8.3 0 0 1 11.28-7.74' stroke='currentColor' />
      <path d='m20.36 20.62 1.88 1.87' stroke='currentColor' />
      <path d='M21.26 18.13a3.2 3.2 0 0 1-3.2 3.2 3.2 3.2 0 1 1 3.2-3.2' stroke='currentColor' />
    </svg>
  )
}
