import type { Icon } from './types'

export const IconArrowsLeftFromLine: Icon = ({
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
      data-slot='icon-ui-arrows-left-from-line'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='m4.74 4.25-.2.2c-1.34 1.34-2 2-2 2.84s.66 1.5 2 2.83l.2.2' stroke='currentColor' />
      <path d='m4.74 13.03-.2.2c-1.34 1.34-2 2-2 2.84s.66 1.5 2 2.83l.2.2' stroke='currentColor' />
      <path d='M17.86 7.29H3.01' stroke='currentColor' />
      <path d='M17.86 16.07H3.01' stroke='currentColor' />
      <path d='M21.26 19.03V4.33' stroke='currentColor' />
    </svg>
  )
}
