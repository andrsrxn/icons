import type { Icon } from './types'

export const IconFiveCircle: Icon = ({
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
      data-slot='icon-ui-five-circle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle
        opacity='.2'
        cx='12'
        cy='12'
        r='10.22'
        transform='rotate(90 12 12)'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='10.22' transform='rotate(90 12 12)' stroke='currentColor' />
      <path
        d='M9.85 16.86h2.36a2.6 2.6 0 0 0 0-5.21H9.52q0 0 0 0V9.13c0-.94 0-1.42.3-1.7.28-.3.76-.3 1.7-.3h2.76'
        stroke='currentColor'
      />
    </svg>
  )
}
