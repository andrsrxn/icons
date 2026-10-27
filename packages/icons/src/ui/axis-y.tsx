import type { Icon } from './types'

export const IconAxisY: Icon = ({
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
      data-slot='icon-ui-axis-y'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m14.6 6.42 1.29-1.3c1-1 1.5-1.5 2.12-1.5s1.12.5 2.12 1.5l1.3 1.3'
        stroke='currentColor'
      />
      <path
        d='M18.01 4.06v13.07c0 .81 0 1.22-.11 1.54a2 2 0 0 1-1.22 1.21c-.32.12-.73.12-1.54.12'
        stroke='currentColor'
      />
      <path d='M8.82 20h2.37' stroke='currentColor' />
      <path d='M2.57 20h2.36' stroke='currentColor' />
    </svg>
  )
}
