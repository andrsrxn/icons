import type { Icon } from './types'

export const IconTextTracking: Icon = ({
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
      data-slot='icon-ui-text-tracking'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M3.79 21.51c-1.3-1.28-1.94-1.93-1.96-2.72v-.11c.02-.8.67-1.44 1.96-2.73'
        stroke='currentColor'
      />
      <path
        d='M20.21 21.51c1.3-1.28 1.94-1.93 1.96-2.72v-.11c-.02-.8-.67-1.44-1.96-2.73'
        stroke='currentColor'
      />
      <path d='M22.04 18.73H1.96' stroke='currentColor' />
      <path
        d='M7.7 15.03 9.73 8.1h0c1-3.4 1.5-5.11 2.44-5.1s1.4 1.73 2.3 5.16l1.83 6.87'
        stroke='currentColor'
      />
      <path d='M9.3 10.4h5.56' stroke='currentColor' />
    </svg>
  )
}
