import type { Icon } from './types'

export const IconCelsius: Icon = ({
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
      data-slot='icon-ui-celsius'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M20.65 4.23c-1.26-.88-3.16-.88-3.16-.88-4.13 0-7.47 3.87-7.47 8.65s3.34 8.65 7.47 8.65c0 0 2.1 0 3.16-.73'
        stroke='currentColor'
      />
      <circle opacity='.2' cx='5.4' cy='6.03' r='2.48' fill='currentColor' />
      <circle cx='5.4' cy='6.03' r='2.48' stroke='currentColor' />
    </svg>
  )
}
