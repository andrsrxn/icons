import type { Icon } from './types'

export const IconEggs: Icon = ({
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
      data-slot='icon-ui-eggs'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M14.63 17.32c4.92.97 6.87-1.85 7.44-6.1.61-4.5-.63-8.26-3.9-9.14s-6.19 1.94-7.96 5.97l3.12 3.18L14.82 16z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M14.39 14.09c1.13 4.22-1.08 7.09-4.5 8-3.43.93-6.78-.45-7.91-4.67-1.13-4.23.76-9.8 3.8-10.62s7.47 3.07 8.6 7.29'
        stroke='currentColor'
      />
      <path
        d='M10.14 7.88c1.56-3.73 5.33-6.71 8.08-5.98 3.04.82 4.93 6.4 3.8 10.62-1.08 4.02-4.17 5.46-7.42 4.8'
        stroke='currentColor'
      />
    </svg>
  )
}
