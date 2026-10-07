import type { Icon } from './types'

export const IconCodeCircle: Icon = ({
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
      data-slot='icon-ui-code-circle'
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
      <path
        d='m14.5 8.19.9.74c1.7 1.42 2.55 2.13 2.55 3.07s-.85 1.64-2.55 3.07l-.9.74'
        stroke='currentColor'
      />
      <path
        d='m9.5 8.19-.9.74C6.9 10.35 6.06 11.06 6.06 12s.85 1.64 2.55 3.07l.9.74'
        stroke='currentColor'
      />
      <circle cx='12' cy='12' r='10.22' transform='rotate(90 12 12)' stroke='currentColor' />
    </svg>
  )
}
