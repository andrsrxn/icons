import type { Icon } from './types'

export const IconPanelsLeftFilled: Icon = ({
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
      data-slot='icon-ui-panels-left-filled'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect x='2.96' y='2.74' width='9.35' height='18.52' rx='2' fill='currentColor' />
      <rect x='2.74' y='2.74' width='18.53' height='18.52' rx='3' stroke='currentColor' />
      <path d='M12 20.87V3.13' stroke='currentColor' />
    </svg>
  )
}
