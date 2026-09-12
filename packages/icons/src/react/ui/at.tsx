import type { Icon } from './types'

export const IconAt: Icon = ({
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
      data-slot='icon-ui-at'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle cx='11.62' cy='12' r='5.25' stroke='currentColor' />
      <path
        d='M15.74 21.4a8 8 0 0 1-3.74.87A10.27 10.27 0 1 1 22.27 12c0 2.5-.96 5.77-2.38 6.57s-3 0-3-2.15V7.14'
        stroke='currentColor'
      />
    </svg>
  )
}
