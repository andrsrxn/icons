import type { Icon } from './types'

export const IconArrowStartFromLine: Icon = ({
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
      data-slot='icon-ui-arrow-start-from-line'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M8.73 4.6 4.5 8.84c-1.34 1.33-2 2-2 2.83s.66 1.5 2 2.83l4.24 4.25'
        stroke='currentColor'
      />
      <path d='M17.65 11.67H2.95' stroke='currentColor' />
      <path d='M21.26 19.03V4.33' stroke='currentColor' />
    </svg>
  )
}
