import type { Icon } from './types'

export const IconArrowsStartEnd: Icon = ({
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
      data-slot='icon-ui-arrows-start-end'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m6.81 3.55-1.2 1.2C4.26 6.1 3.6 6.75 3.6 7.58s.67 1.5 2 2.83l1.21 1.21'
        stroke='currentColor'
      />
      <path
        d='m17.19 12.38 1.2 1.2c1.34 1.33 2.01 2 2.01 2.83s-.67 1.5-2 2.83l-1.21 1.21'
        stroke='currentColor'
      />
      <path d='M19.83 7.59H3.72' stroke='currentColor' />
      <path d='M4.17 16.41h16.11' stroke='currentColor' />
    </svg>
  )
}
