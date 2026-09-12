import type { Icon } from './types'

export const IconTextTracking: Icon = ({
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
      data-slot='icon-ui-text-tracking'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m7.75 15.44 2.37-8.31c.79-2.74 1.18-4.12 1.93-4.12.76 0 1.15 1.38 1.92 4.13l2.34 8.3'
        stroke='currentColor'
      />
      <path d='M14.75 10.37H9.31' stroke='currentColor' />
      <path
        d='M3.79 21.51c-1.3-1.28-1.94-1.93-1.96-2.72v-.11c.02-.8.67-1.44 1.96-2.73'
        stroke='currentColor'
      />
      <path
        d='M20.21 21.51c1.3-1.28 1.94-1.93 1.96-2.72v-.11c-.02-.8-.67-1.44-1.96-2.73'
        stroke='currentColor'
      />
      <path d='M22.04 18.73H1.96' stroke='currentColor' />
    </svg>
  )
}
