import type { Icon } from './types'

export const IconMotionOff: Icon = ({
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
      data-slot='icon-ui-motion-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='15.99' cy='12' r='6.4' fill='currentColor' />
      <path
        d='M9.84 10.23a6.4 6.4 0 0 0 7.92 7.92m2.97-1.85a6.4 6.4 0 0 0-9.04-9.04'
        stroke='currentColor'
      />
      <path d='M7.55 17.37s-1.82-1.52-1.82-5.27c0-2.47.74-4.02 1.28-4.82' stroke='currentColor' />
      <path d='M2.79 7.62s-1.1 1.3-1.1 4.4c0 3.03 1.1 4.25 1.1 4.25' stroke='currentColor' />
      <path d='M2.74 2.69 21.26 21.2' stroke='currentColor' />
    </svg>
  )
}
