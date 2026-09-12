import type { Icon } from './types'

export const IconPercent: Icon = ({
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
      data-slot='icon-ui-percent'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='7.45' cy='7.35' r='2.73' fill='currentColor' />
      <circle opacity='.2' cx='16.65' cy='16.55' r='2.73' fill='currentColor' />
      <path d='M19.16 4.84 4.84 19.16' stroke='currentColor' />
      <circle cx='7.45' cy='7.35' r='2.73' stroke='currentColor' />
      <circle cx='16.65' cy='16.55' r='2.73' stroke='currentColor' />
    </svg>
  )
}
