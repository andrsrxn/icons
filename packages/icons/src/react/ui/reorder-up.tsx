import type { Icon } from './types'

export const IconReorderUp: Icon = ({
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
      data-slot='icon-ui-reorder-up'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M9.78 6h-7.1' stroke='currentColor' />
      <path d='M13.08 12H2.68' stroke='currentColor' />
      <path d='M15.75 18H2.68' stroke='currentColor' />
      <path d='M14.23 6.01h1.03c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v6.7' stroke='currentColor' />
      <path
        d='M15.75 3.34c-1.18 1.18-1.77 1.77-1.84 2.5v.34c.07.73.66 1.32 1.84 2.5'
        stroke='currentColor'
      />
    </svg>
  )
}
