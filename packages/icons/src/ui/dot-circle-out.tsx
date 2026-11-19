import type { Icon } from './types'

export const IconDotCircleOut: Icon = ({
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
      data-slot='icon-ui-dot-circle-out'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='12' cy='12' r='10.22' fill='currentColor' />
      <path
        d='M13.23 12a1.23 1.23 0 1 1-2.46 0 1.23 1.23 0 0 1 2.46 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M18.58 14.91v6.76' stroke='currentColor' />
      <path
        d='m14.93 19.42 1.52 1.52c1 1 1.5 1.5 2.12 1.5s1.12-.5 2.13-1.5l1.52-1.52'
        stroke='currentColor'
      />
      <path d='M12 22.22a10.22 10.22 0 1 1 10.14-8.92' stroke='currentColor' />
    </svg>
  )
}
