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
        d='m2.42 19.37 2.89-10.1c.78-2.75 1.17-4.12 1.93-4.12.75 0 1.14 1.38 1.92 4.12L12 19.37'
        stroke='currentColor'
      />
      <path
        d='m12 19.37 2.88-10.1c.79-2.75 1.18-4.12 1.94-4.12.75 0 1.14 1.38 1.91 4.12l2.85 10.1'
        stroke='currentColor'
      />
      <path d='M10.25 13.59H4.17' stroke='currentColor' />
      <path d='M19.83 13.59h-6.08' stroke='currentColor' />
    </svg>
  )
}
