import type { Icon } from './types'

export const IconHeartCircle: Icon = ({
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
      data-slot='icon-ui-heart-circle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.76 12a10.24 10.24 0 1 0 20.48 0 10.24 10.24 0 0 0-20.48 0m14.38 2.34L12 17.35l-4.27-3.01-1.43-4.12 1.43-2.66 4.27.4 3.86-.61 2.05 2.87z'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='10.24' transform='rotate(90 12 12)' stroke='currentColor' />
      <path
        d='M15 7.49a3.8 3.8 0 0 0-3 1.72A3.8 3.8 0 0 0 9 7.5c-1.91 0-3.35 2.18-2.73 4.49.62 2.3 4.28 4.18 5.73 5.83 1.45-1.65 5.11-3.53 5.73-5.83s-.82-4.5-2.73-4.5'
        stroke='currentColor'
      />
    </svg>
  )
}
