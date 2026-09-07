import type { Icon } from './types'

export const IconArrowUDown: Icon = ({
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
      data-slot='ui-icon-arrow-u-down'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'arrow-u-down-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`ui-icon ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'arrow-u-down-title'}>{title}</title> : null}
      <path d='M15.99 19.36V9.55a5.66 5.66 0 0 0-11.32 0v7.26' stroke='currentColor' />
      <path
        d='m20.52 16-1.7 1.71c-1.33 1.34-2 2-2.83 2s-1.5-.66-2.83-2l-1.7-1.7'
        stroke='currentColor'
      />
    </svg>
  )
}
