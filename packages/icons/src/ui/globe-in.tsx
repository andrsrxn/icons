import type { Icon } from './types'

export const IconGlobeIn: Icon = ({
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
      data-slot='icon-ui-globe-in'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.7 11.92a10.23 10.23 0 0 0 15.95 8.48v-4.94l2.86 2.03A10.23 10.23 0 1 0 1.7 11.92'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M22.3 12a10.3 10.3 0 1 0-11.23 10.27' stroke='currentColor' />
      <path
        d='M16.37 12c0-5.7-1.96-10.3-4.37-10.3S7.63 6.3 7.63 12c0 4.77 1.56 9.03 3.42 10.2'
        stroke='currentColor'
      />
      <path d='M1.7 12h20.6' stroke='currentColor' />
      <path d='M17.76 15.8V22' stroke='currentColor' />
      <path
        d='m14.8 17.87.83-.84c1-1 1.5-1.5 2.12-1.5s1.13.5 2.13 1.5h0l.83.84'
        stroke='currentColor'
      />
    </svg>
  )
}
