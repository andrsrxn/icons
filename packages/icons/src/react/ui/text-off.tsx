import type { Icon } from './types'

export const IconTextOff: Icon = ({
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
      data-slot='icon-ui-text-off'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'text-off-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'text-off-title'}>{title}</title> : null}
      <path
        d='M12 3.75v16.5m2.74 0H9.26m9.41-14.58c0-1.06-.86-1.92-1.92-1.92H6.83c-.83 0-1.5.68-1.5 1.5M3.3 3.3l17.4 17.4'
        stroke='currentColor'
      />
    </svg>
  )
}
