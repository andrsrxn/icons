import type { Icon } from './types'

export const IconGlobeCheck: Icon = ({
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
      data-slot='icon-ui-globe-check'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M12 22.22a10.22 10.22 0 1 1 7.15-2.91c-.91.88-1.97 3.75-3.16 2.1q-1.86.8-3.99.81'
        fill='currentColor'
      />
      <path d='M22.3 12a10.3 10.3 0 1 0-11.23 10.27' stroke='currentColor' />
      <path
        d='M16.37 12c0-5.7-1.96-10.3-4.37-10.3S7.63 6.3 7.63 12c0 4.77 1.56 9.03 3.42 10.2'
        stroke='currentColor'
      />
      <path d='M1.7 12h20.6' stroke='currentColor' />
      <path
        d='m14.06 19.53 1.01 1.27c.73.91 1.09 1.36 1.57 1.36s.85-.45 1.57-1.37l3.87-4.9'
        stroke='currentColor'
      />
    </svg>
  )
}
