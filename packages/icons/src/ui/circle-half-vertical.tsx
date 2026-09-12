import type { Icon } from './types'

export const IconCircleHalfVertical: Icon = ({
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
      data-slot='icon-ui-circle-half-vertical'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' d='M12 22.3a10.3 10.3 0 1 1 0-20.6z' fill='currentColor' />
      <circle cx='12' cy='12' r='10.3' transform='rotate(90 12 12)' stroke='currentColor' />
      <path d='M12 1.94v20.13' stroke='currentColor' />
    </svg>
  )
}
