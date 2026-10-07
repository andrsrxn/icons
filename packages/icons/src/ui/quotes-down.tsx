import type { Icon } from './types'

export const IconQuotesDown: Icon = ({
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
      data-slot='icon-ui-quotes-down'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M16.84 6.5 18 10.2a4.25 4.25 0 1 1-4.25 4.25l.43-5.03z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='m4.93 6.5 1.18 3.7a4.25 4.25 0 1 1-4.25 4.25l.43-5.03z'
        fill='currentColor'
      />
      <path
        d='M22.26 14.45a4.25 4.25 0 0 1-7.28 2.98 5.4 5.4 0 0 1-1.27-3.7c0-1.79.04-4.21 2.04-6.43.54-.6.81-.89 1.13-.76.33.13.32.59.3 1.5-.02 1.07.19 2.07 1.15 2.17 2.33.24 3.93 1.9 3.93 4.24'
        stroke='currentColor'
      />
      <path
        d='M10.36 14.45a4.25 4.25 0 0 1-7.29 2.98 5.4 5.4 0 0 1-1.26-3.7c0-1.79.03-4.21 2.03-6.43.54-.6.81-.89 1.14-.76s.3.59.3 1.5c-.03 1.07.18 2.07 1.14 2.17 2.34.24 3.94 1.9 3.94 4.24'
        stroke='currentColor'
      />
    </svg>
  )
}
