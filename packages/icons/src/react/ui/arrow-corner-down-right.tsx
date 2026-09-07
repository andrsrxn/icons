import type { Icon } from './types'

export const IconArrowCornerDownRight: Icon = ({
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
      data-slot='icon-ui-arrow-corner-down-right'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={
        isLabelled && title && !ariaLabel ? 'arrow-corner-down-right-title' : undefined
      }
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? (
        <title id={'arrow-corner-down-right-title'}>{title}</title>
      ) : null}
      <path
        d='M18.18 15.5h-5.52c-3.78 0-5.66 0-6.83-1.17s-1.17-3.05-1.17-6.82V4.23'
        stroke='currentColor'
      />
      <path
        d='m16.04 19.77 1.44-1.43c1.33-1.34 2-2 2-2.83s-.67-1.5-2-2.83l-1.44-1.44'
        stroke='currentColor'
      />
    </svg>
  )
}
