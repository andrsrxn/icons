import type { Icon } from './types'

export const IconGlobeSparkle: Icon = ({
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
      data-slot='icon-ui-globe-sparkle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M12 22.22a10.22 10.22 0 1 1 8.17-4.07c-.31.4-2.16-3.01-4.1.26l1.22 2.24c-.29.29-.68.5-1.3.76q-1.86.8-3.99.81'
        fill='currentColor'
      />
      <path d='M22.3 12a10.3 10.3 0 1 0-11.23 10.27' stroke='currentColor' />
      <path
        d='M16.37 12c0-5.7-1.96-10.3-4.37-10.3S7.63 6.3 7.63 12c0 4.77 1.56 9.03 3.42 10.2'
        stroke='currentColor'
      />
      <path d='M1.7 12h20.6' stroke='currentColor' />
      <path d='M14.39 18.81c1.77 0 3.66-1.9 3.66-3.66' stroke='currentColor' />
      <path d='M21.72 18.81c-1.76 0-3.67-1.9-3.67-3.66' stroke='currentColor' />
      <path d='M14.39 18.81c1.76 0 3.66 1.94 3.66 3.67' stroke='currentColor' />
      <path d='M21.72 18.81c-1.74 0-3.67 1.92-3.67 3.67' stroke='currentColor' />
    </svg>
  )
}
