import type { Icon } from './types'

export const IconTargetSight: Icon = ({
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
      data-slot='icon-ui-target-sight'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle
        opacity='.2'
        cx='12.01'
        cy='12'
        r='3.53'
        transform='rotate(90 12 12)'
        fill='currentColor'
      />
      <circle cx='12.01' cy='12' r='3.53' transform='rotate(90 12 12)' stroke='currentColor' />
      <circle cx='12.01' cy='12' r='8.57' transform='rotate(90 12 12)' stroke='currentColor' />
      <path d='M22.58 12h-4.15' stroke='currentColor' />
      <path d='M5.52 12H1.36' stroke='currentColor' />
      <path d='M12 1.36V5.5' stroke='currentColor' />
      <path d='M12 18.49v4.15' stroke='currentColor' />
    </svg>
  )
}
