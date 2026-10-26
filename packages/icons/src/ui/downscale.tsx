import type { Icon } from './types'

export const IconDownscale: Icon = ({
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
      data-slot='icon-ui-downscale'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='8.28'
        height='8.28'
        rx='2'
        transform='matrix(0 -1 -1 0 11.02 21.26)'
        fill='currentColor'
      />
      <rect
        width='8.28'
        height='8.28'
        rx='2'
        transform='matrix(0 -1 -1 0 11.02 21.26)'
        stroke='currentColor'
      />
      <path d='m17.45 6.53-4.48 4.48' stroke='currentColor' />
      <path
        d='M16.55 11.68h-1.24c-1.42 0-2.13 0-2.57-.44-.44-.43-.44-1.14-.44-2.56V7.43'
        stroke='currentColor'
      />
      <path
        d='M2.81 10.04V8.72c0-2.83 0-4.25.88-5.13s2.3-.87 5.12-.87h6.4c2.83 0 4.24 0 5.12.87.88.88.88 2.3.88 5.13v6.53c0 2.82 0 4.24-.88 5.12s-2.3.88-5.12.88h-1.2'
        stroke='currentColor'
      />
    </svg>
  )
}
