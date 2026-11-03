import type { Icon } from './types'

export const IconPlusEqual: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-plus-equal'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M10.5 6.62H2.72' stroke='currentColor' />
      <path d='M21.2 19.7h-6.63' stroke='currentColor' />
      <path d='M21.2 16.02h-6.63' stroke='currentColor' />
      <path d='M6.62 2.74v7.76' stroke='currentColor' />
      <path d='M20.96 3.05 3.04 20.96' stroke='currentColor' />
    </svg>
  )
}
