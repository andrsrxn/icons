import type { Icon } from './types'

export const IconArrowUUp: Icon = ({
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
      data-slot='ui-icon-arrow-u-up'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'arrow-u-up-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`ui-icon ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'arrow-u-up-title'}>{title}</title> : null}
      <path d='M7.88 4.69v9.8a5.66 5.66 0 0 0 11.32 0V7.24' stroke='currentColor' />
      <path
        d='m3.35 8.03 1.7-1.7c1.33-1.34 2-2 2.83-2s1.5.66 2.83 2l1.7 1.7'
        stroke='currentColor'
      />
    </svg>
  )
}
