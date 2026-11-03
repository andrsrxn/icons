import type { Icon } from './types'

export const IconWatermelon: Icon = ({
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
      data-slot='icon-ui-watermelon'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M10.24 10.07 16.5 3.8A8.87 8.87 0 1 1 3.97 16.34z'
        fill='currentColor'
      />
      <path d='m10.3 10.04 8.4-8.41A11.9 11.9 0 0 1 1.89 18.46z' stroke='currentColor' />
      <path d='M16.6 3.73A8.93 8.93 0 0 1 3.99 16.36' stroke='currentColor' />
      <path d='m15.81 10.32-.56-1.07' stroke='currentColor' />
      <path d='m13.97 13.65-1.04-.6' stroke='currentColor' />
      <path d='m9.72 16.1-.2-1.2' stroke='currentColor' />
    </svg>
  )
}
