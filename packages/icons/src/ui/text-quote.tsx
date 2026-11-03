import type { Icon } from './types'

export const IconTextQuote: Icon = ({
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
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-text-quote'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M16.28 6H2.62' stroke='currentColor' />
      <path d='M21.27 12H7.68' stroke='currentColor' />
      <path d='M2.62 10.95v8.1' stroke='currentColor' />
      <path d='M21.27 18H7.68' stroke='currentColor' />
    </svg>
  )
}
