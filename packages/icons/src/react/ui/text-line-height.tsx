import type { Icon } from './types'

export const IconTextLineHeight: Icon = ({
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
      data-slot='icon-ui-text-line-height'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M2.64 6.11 3.75 5c.67-.67 1-1 1.42-1s.75.33 1.41 1L7.7 6.1' stroke='currentColor' />
      <path
        d='M2.64 17.88 3.75 19c.67.67 1 1 1.42 1s.75-.33 1.41-1l1.12-1.12'
        stroke='currentColor'
      />
      <path d='M5.17 4.48v5.51' stroke='currentColor' />
      <path d='M5.17 14.04v5.51' stroke='currentColor' />
      <path d='M11 6h10.37' stroke='currentColor' />
      <path d='M11 12h10.37' stroke='currentColor' />
      <path d='M11 18h10.37' stroke='currentColor' />
    </svg>
  )
}
