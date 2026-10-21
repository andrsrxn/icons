import type { Icon } from './types'

export const IconWindDown: Icon = ({
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
      data-slot='icon-ui-wind-down'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M12.12 14.84a3.17 3.17 0 1 1-2.81 4.63' stroke='currentColor' />
      <path d='M19.7 10.52a2.53 2.53 0 1 1-1.8 4.3c-.17-.16-.3-.39-.4-.6' stroke='currentColor' />
      <path d='M9.35 10.52H1.77' stroke='currentColor' />
      <path d='M12.05 14.84H4' stroke='currentColor' />
      <path d='M19.75 10.52h-4.47' stroke='currentColor' />
      <path d='M12.46 1.9v6.35' stroke='currentColor' />
      <path d='m9.64 6.27.7.7c1 1 1.5 1.5 2.12 1.5s1.12-.5 2.12-1.5l.7-.7' stroke='currentColor' />
    </svg>
  )
}
