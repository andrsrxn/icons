import type { Icon } from './types'

export const IconTextUppercase: Icon = ({
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
      data-slot='icon-ui-text-uppercase'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m1.69 20.02 3.25-11.4C5.73 5.87 6.12 4.5 6.87 4.5c.76 0 1.15 1.38 1.92 4.13L12 20.02'
        stroke='currentColor'
      />
      <path
        d='m12 20.02 3.25-11.4c.79-2.75 1.18-4.12 1.94-4.12.75 0 1.14 1.38 1.91 4.13l3.21 11.39'
        stroke='currentColor'
      />
      <path d='M10.12 13.79H3.57' stroke='currentColor' />
      <path d='M20.43 13.79h-6.55' stroke='currentColor' />
    </svg>
  )
}
