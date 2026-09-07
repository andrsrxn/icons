import type { Icon } from './types'

export const IconChevronUpDown: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

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
      aria-labelledby={isLabelled && title && !ariaLabel ? 'chevron-up-down-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? (
        <title id={'chevron-up-down-title'}>{title}</title>
      ) : null}
      <path
        d='m6.87 15.97 2.3 2.3c1.33 1.33 2 2 2.83 2 .82 0 1.5-.67 2.83-2l2.3-2.3M6.87 8.03l2.3-2.3c1.33-1.33 2-2 2.83-2 .82 0 1.5.67 2.83 2l2.3 2.3'
        stroke='currentColor'
      />
    </svg>
  )
}
