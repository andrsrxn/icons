import type { Icon } from './types'

export const IconWhisk: Icon = ({
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
      data-slot='icon-ui-whisk'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M22.24 1.74 3.56 20.42' stroke='currentColor' />
      <path
        d='M3.95 13.2c-2.34 2.35-2.71 5.78-.82 7.67 1.89 1.9 5.32 1.52 7.67-.82C13.15 17.7 14.78 9.3 14.78 9.3S6.3 10.85 3.95 13.2'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M12.5 17.52c-1.38 3.02-3.26 4.81-5.92 4.81a4.8 4.8 0 0 1-4.81-4.81c0-2.66 2.9-5.44 5.42-6.19l7.28-2z'
        fill='currentColor'
      />
    </svg>
  )
}
