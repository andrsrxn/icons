import type { Icon } from './types'

export const IconClock: Icon = ({
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
      data-slot='icon-ui-clock'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='12' cy='12' r='10.25' fill='currentColor' />
      <circle cx='12' cy='12' r='10.25' stroke='currentColor' />
      <path
        d='m16.04 15.78-2.93-1.95c-.87-.58-1.3-.87-1.54-1.32-.24-.44-.24-.96-.24-2.01V6.31'
        stroke='currentColor'
      />
    </svg>
  )
}
