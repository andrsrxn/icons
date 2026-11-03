import type { Icon } from './types'

export const IconArrowEnd: Icon = ({
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
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-arrow-end'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='m13.2 4.93 4.25 4.23c1.34 1.34 2 2 2 2.83s-.66 1.5-2 2.83l-4.24 4.25'
        stroke='currentColor'
      />
      <path d='M4.29 12h14.7' stroke='currentColor' />
    </svg>
  )
}
