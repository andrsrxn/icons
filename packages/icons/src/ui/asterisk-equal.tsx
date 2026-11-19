import type { Icon } from './types'

export const IconAsteriskEqual: Icon = ({
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
      data-slot='icon-ui-asterisk-equal'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M13.96 9h8.06' stroke='currentColor' />
      <path d='M13.96 15h8.06' stroke='currentColor' />
      <path d='M6 13.25v-8.5' stroke='currentColor' />
      <path d='m1.98 11.32 8.06-4.65' stroke='currentColor' />
      <path d='M10.04 11.32 1.98 6.67' stroke='currentColor' />
    </svg>
  )
}
