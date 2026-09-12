import type { Icon } from './types'

export const IconPenNibCircle: Icon = ({
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
      data-slot='icon-ui-pen-nib-circle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.15 21.45C5.1 19.65 2.19 15.79 2.19 12a10.31 10.31 0 0 1 20.62 0c0 3.88-2.91 7.68-6.07 9.45l1.88-8.06-6.12-8.3-6.23 8.3z'
        fill='currentColor'
      />
      <path d='M2.2 12a10.3 10.3 0 0 0 10.3 10.31A10.31 10.31 0 1 0 2.2 12' stroke='currentColor' />
      <path
        d='m16.07 21.55 1.87-4.67c.56-1.4.84-2.1.78-2.83-.07-.72-.48-1.35-1.29-2.63l-1.5-2.35c-1.5-2.36-2.26-3.54-3.35-3.55S10.73 6.7 9.2 9.05l-1.57 2.43c-.81 1.24-1.21 1.87-1.29 2.58-.08.7.18 1.4.7 2.8l1.77 4.69'
        stroke='currentColor'
      />
      <path d='m12.57 6.56.02 6' stroke='currentColor' />
      <path
        d='M10.74 14.55a1.76 1.76 0 0 1 1.76-1.77 1.77 1.77 0 1 1-1.76 1.77'
        stroke='currentColor'
      />
    </svg>
  )
}
