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
      <path d='M1.98 12h8.06' stroke='currentColor' />
      <path d='M13.96 9h8.06' stroke='currentColor' />
      <path d='M6.01 16.03V7.97' stroke='currentColor' />
      <path d='M13.96 15h8.06' stroke='currentColor' />
    </svg>
  )
}
