import type { Icon } from './types'

export const IconLogs: Icon = ({
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
      data-slot='icon-ui-logs'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M14.01 5.76h7.29M14 12h7.29M14 18.24h7.29' stroke='currentColor' />
      <path d='M2.7 5.76h1.26M2.7 12h1.26M2.7 18.24h1.26' stroke='currentColor' />
      <path d='M7.54 5.76h2.9M7.54 12h2.9m-2.9 6.24h2.9' stroke='currentColor' />
    </svg>
  )
}
