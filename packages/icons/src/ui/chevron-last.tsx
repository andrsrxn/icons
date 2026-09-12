import type { Icon } from './types'

export const IconChevronLast: Icon = ({
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
      data-slot='icon-ui-chevron-last'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m6.1 4.52 4.65 4.64c1.34 1.34 2 2 2 2.83s-.66 1.5-2 2.83L6.1 19.48'
        stroke='currentColor'
      />
      <path d='M17.07 4.52v14.96' stroke='currentColor' />
    </svg>
  )
}
