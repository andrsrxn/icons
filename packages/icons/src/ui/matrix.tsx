import type { Icon } from './types'

export const IconMatrix: Icon = ({
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
      data-slot='icon-ui-matrix'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M14.21 21.29c3.77 0 5.66 0 6.83-1.18 1.17-1.17 1.17-3.05 1.17-6.82V10.7c0-3.77 0-5.65-1.17-6.83S17.98 2.7 14.21 2.7H9.8c-3.77 0-5.66 0-6.83 1.17C1.8 5.06 1.8 6.94 1.8 10.71v2.58c0 3.77 0 5.65 1.17 6.82C4.13 21.3 6.02 21.3 9.8 21.3z'
        fill='currentColor'
      />
      <path
        d='M6.93 21.38c-1.06 0-1.6 0-2.03-.1a4 4 0 0 1-3.01-3.01c-.1-.44-.1-.97-.1-2.03V7.76c0-1.06 0-1.59.1-2.03a4 4 0 0 1 3.01-3c.44-.1.97-.1 2.03-.1'
        stroke='currentColor'
      />
      <path
        d='M17.1 21.38c1.06 0 1.59 0 2.03-.1a4 4 0 0 0 3-3c.1-.45.1-.98.1-2.05V7.77c0-1.07 0-1.6-.1-2.04a4 4 0 0 0-3-3c-.44-.1-.97-.1-2.04-.1'
        stroke='currentColor'
      />
      <path
        d='M7.26 7.26a.6.6 0 1 1-1.19 0 .6.6 0 0 1 1.19 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M7.26 12a.6.6 0 1 1-1.19 0 .6.6 0 0 1 1.19 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M7.26 16.74a.6.6 0 1 1-1.19 0 .6.6 0 0 1 1.19 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M12.6 7.26a.6.6 0 1 1-1.18 0 .6.6 0 0 1 1.19 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M12.6 12a.6.6 0 1 1-1.18 0 .6.6 0 0 1 1.19 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M12.6 16.74a.6.6 0 1 1-1.18 0 .6.6 0 0 1 1.19 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M17.95 7.26a.6.6 0 1 1-1.18 0 .6.6 0 0 1 1.18 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M17.95 12a.6.6 0 1 1-1.18 0 .6.6 0 0 1 1.18 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M17.95 16.74a.6.6 0 1 1-1.18 0 .6.6 0 0 1 1.18 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
