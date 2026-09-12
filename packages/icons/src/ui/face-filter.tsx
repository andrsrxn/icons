import type { Icon } from './types'

export const IconFaceFilter: Icon = ({
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
      data-slot='icon-ui-face-filter'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M11.57 22.29a9.85 9.85 0 1 1 5.6-17.96c.34 1.06 1.15 2.24 2.3 2.24a9.85 9.85 0 0 1-7.9 15.72'
        fill='currentColor'
      />
      <path d='M13.38 2.79a9.85 9.85 0 1 0 8.04 9.66c0-.4 0-1.2-.15-1.9' stroke='currentColor' />
      <path
        d='M9.26 10.44a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M15.42 10.44a.77.77 0 1 1-1.53 0 .77.77 0 0 1 1.53 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M15.14 15.93a5 5 0 0 1-3.57 1.23 5.4 5.4 0 0 1-3.56-1.23' stroke='currentColor' />
      <path d='M15.33 5.2c1.66 0 3.44-1.8 3.44-3.45' stroke='currentColor' />
      <path d='M22.22 5.2c-1.65 0-3.44-1.8-3.44-3.45' stroke='currentColor' />
      <path d='M15.33 5.2c1.65 0 3.44 1.82 3.44 3.45' stroke='currentColor' />
      <path d='M22.22 5.2c-1.63 0-3.44 1.8-3.44 3.45' stroke='currentColor' />
    </svg>
  )
}
