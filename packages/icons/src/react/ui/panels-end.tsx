import type { Icon } from './types'

export const IconPanelsEnd: Icon = ({
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
      data-slot='icon-ui-panels-end'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='11.91' y='2.75' width='9.35' height='18.5' rx='2' fill='currentColor' />
      <rect x='2.74' y='2.75' width='18.53' height='18.5' rx='3' stroke='currentColor' />
      <path d='M12 20.85V3.15' stroke='currentColor' />
    </svg>
  )
}
