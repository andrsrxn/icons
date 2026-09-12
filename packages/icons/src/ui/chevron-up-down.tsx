import type { Icon } from './types'

export const IconChevronUpDown: Icon = ({
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
      data-slot='icon-ui-chevron-up-down'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m6.78 16.04 2.39 2.4c1.33 1.33 2 2 2.83 2 .82 0 1.5-.67 2.83-2l2.39-2.4'
        stroke='currentColor'
      />
      <path
        d='m6.78 7.96 2.39-2.4c1.33-1.33 2-2 2.83-2 .82 0 1.5.67 2.83 2l2.39 2.4'
        stroke='currentColor'
      />
    </svg>
  )
}
