import type { Icon } from './types'

export const IconExclude: Icon = ({
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
      data-slot='icon-ui-exclude'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' d='M8.46 8.45h7.01v6.99h-7z' fill='currentColor' />
      <rect x='1.81' y='1.78' width='14.27' height='14.27' rx='3' stroke='currentColor' />
      <rect x='7.91' y='7.95' width='14.27' height='14.27' rx='3' stroke='currentColor' />
    </svg>
  )
}
