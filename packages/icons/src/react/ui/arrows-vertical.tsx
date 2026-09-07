import type { Icon } from './types'

export const IconArrowsVertical: Icon = ({
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
      data-slot='icon-ui-arrows-vertical'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'arrows-vertical-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? (
        <title id={'arrows-vertical-title'}>{title}</title>
      ) : null}
      <path
        d='M12.09 2.74V21.1m4.81-3.67-1.98 1.99c-1.33 1.33-2 2-2.83 2s-1.5-.67-2.83-2l-2-2M16.9 6.57l-1.98-1.99c-1.33-1.33-2-2-2.83-2s-1.5.67-2.83 2l-2 2'
        stroke='currentColor'
      />
    </svg>
  )
}
