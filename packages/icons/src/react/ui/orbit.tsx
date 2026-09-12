import type { Icon } from './types'

export const IconOrbit: Icon = ({
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
      data-slot='icon-ui-orbit'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='12' cy='12' r='5.06' fill='currentColor' />
      <circle opacity='.2' cx='19.16' cy='4.76' r='1.93' fill='currentColor' />
      <circle cx='12' cy='12' r='5.06' stroke='currentColor' />
      <circle cx='19.16' cy='4.76' r='1.93' stroke='currentColor' />
      <path
        d='M20.52 6.44A10.17 10.17 0 1 1 12 1.83c1.7 0 3.67.4 5.38 1.62'
        stroke='currentColor'
      />
    </svg>
  )
}
