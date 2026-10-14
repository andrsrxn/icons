import type { Icon } from './types'

export const IconVersusCircle: Icon = ({
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
      data-slot='icon-ui-versus-circle'
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
        d='m5.97 9.2 1.59 4.6c.4 1.14.59 1.71.95 1.71.35 0 .55-.57.94-1.72L11 9.19'
        stroke='currentColor'
      />
      <path
        d='M17.96 10.13C17.76 9.5 16.83 9 15.75 9c-1.1 0-2.28.43-2.28 1.72 0 2.53 4.36.56 4.55 3.05.1 1.2-1.16 1.83-2.27 1.83-1.12 0-1.92-.5-2.28-1.15'
        stroke='currentColor'
      />
    </svg>
  )
}
