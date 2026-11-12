import type { Icon } from './types'

export const IconListClock: Icon = ({
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
      data-slot='icon-ui-list-clock'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M21.32 6H2.6' stroke='currentColor' />
      <path d='M9.32 12H2.6' stroke='currentColor' />
      <path d='M9.32 18H2.6' stroke='currentColor' />
      <circle opacity='.2' cx='17.34' cy='15.16' r='4.87' fill='currentColor' />
      <circle cx='17.34' cy='15.16' r='4.87' stroke='currentColor' />
      <path d='M17.25 13.5v1.29q-.02.37.06.5c.05.11.16.19.38.33l.92.61' stroke='currentColor' />
    </svg>
  )
}
