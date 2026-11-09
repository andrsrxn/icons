import type { Icon } from './types'

export const IconVersusCircle: Icon = ({
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
      data-slot='icon-ui-versus-circle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='12' cy='12' r='10.22' fill='currentColor' />
      <circle cx='12' cy='12' r='10.22' stroke='currentColor' />
      <path
        d='m5.67 8.95 2.1 5.95c.24.67.36 1 .57 1 .22 0 .33-.33.57-1l2.1-5.95'
        stroke='currentColor'
      />
      <path
        d='M18.19 9.75a3.3 3.3 0 0 0-2.24-.93c-1.07 0-2.24.6-2.24 1.85 0 2.7 4.48.55 4.48 3.28 0 1.29-1.15 1.98-2.24 1.98s-1.83-.35-2.33-1.1'
        stroke='currentColor'
      />
    </svg>
  )
}
