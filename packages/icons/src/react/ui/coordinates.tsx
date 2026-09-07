import type { Icon } from './types'

export const IconCoordinates: Icon = ({
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
      data-slot='icon-ui-coordinates'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'coordinates-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'coordinates-title'}>{title}</title> : null}
      <path
        d='M20.22 17.72H3.79M6.28 3.86v16.43m11.86.71.44-.44c1.34-1.34 2-2 2-2.83s-.66-1.5-2-2.83l-.44-.45M9.55 5.94l-.44-.45c-1.34-1.34-2-2-2.83-2s-1.5.66-2.83 2L3 5.94'
        stroke='currentColor'
      />
    </svg>
  )
}
