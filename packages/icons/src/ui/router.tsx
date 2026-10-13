import type { Icon } from './types'

export const IconRouter: Icon = ({
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
      data-slot='icon-ui-router'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='1.76' y='13.1' width='20.48' height='7.66' rx='2' fill='currentColor' />
      <rect x='1.76' y='13.1' width='20.48' height='7.66' rx='3' stroke='currentColor' />
      <path d='m9.67 13.1-4.9-5.57' stroke='currentColor' />
      <path d='m14.35 13.1 4.94-5.57' stroke='currentColor' />
      <path d='M18.57 17h-3.69' stroke='currentColor' />
      <path
        d='M6.79 17a.68.68 0 1 1-1.36 0 .68.68 0 0 1 1.36 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M8.94 6.68a5 5 0 0 1 3.1-.84c1.36 0 2.33.26 3.08.84' stroke='currentColor' />
      <path d='M6.28 4.24C7.68 3.06 9.46 2.52 12 2.52s4.33.54 5.72 1.72' stroke='currentColor' />
    </svg>
  )
}
