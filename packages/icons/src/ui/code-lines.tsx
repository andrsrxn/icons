import type { Icon } from './types'

export const IconCodeLines: Icon = ({
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
      data-slot='icon-ui-code-lines'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M8.78 6H2.67' stroke='currentColor' />
      <path d='M21.42 6h-8.91' stroke='currentColor' />
      <path d='M21.42 12h-4.16' stroke='currentColor' />
      <path d='M13.75 12H2.67' stroke='currentColor' />
      <path d='M21.42 18H9.78' stroke='currentColor' />
      <path d='M6 18H2.67' stroke='currentColor' />
    </svg>
  )
}
