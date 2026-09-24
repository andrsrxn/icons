import type { Icon } from './types'

export const IconFieldNumber: Icon = ({
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
      data-slot='icon-ui-field-number'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='10.75'
        height='20.61'
        rx='2'
        transform='matrix(0 -1 -1 0 22.3 17.38)'
        fill='currentColor'
      />
      <rect
        width='10.75'
        height='20.61'
        rx='3'
        transform='matrix(0 -1 -1 0 22.3 17.38)'
        stroke='currentColor'
      />
      <path
        d='m4.85 11.02.55-.5c.72-.64 1.07-.96 1.37-.83s.3.61.3 1.58v3.2'
        stroke='currentColor'
      />
      <path
        d='M10.27 10.25c.4-.43.79-.77 1.61-.77 1.45 0 1.69 1.52.96 2.28-.37.39-1.15.95-1.83 1.51-.43.36-.65.54-.53.87s.43.33 1.05.33h1.71'
        stroke='currentColor'
      />
      <path
        d='M16.26 9.93c.42-.27.67-.45 1.39-.45 1.26 0 1.63 1.45 1 2.03-.64.59-1.56.46-1.56.46'
        stroke='currentColor'
      />
      <path
        d='M16.3 14.07c.43.25.63.4 1.35.4 1.26 0 1.63-1.44 1-2.03-.64-.58-1.56-.45-1.56-.45'
        stroke='currentColor'
      />
    </svg>
  )
}
