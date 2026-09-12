import type { Icon } from './types'

export const IconListCheck: Icon = ({
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
      data-slot='icon-ui-list-check'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M21.38 6H10.34' stroke='currentColor' />
      <path d='M21.38 12H10.34' stroke='currentColor' />
      <path d='M21.38 18H10.34' stroke='currentColor' />
      <path d='m2.65 6.1.62.77c.36.44.54.66.78.66s.42-.22.77-.66L7 4.17' stroke='currentColor' />
      <path d='m2.65 12.1.62.77c.36.44.54.66.78.66s.42-.22.77-.66L7 10.17' stroke='currentColor' />
      <path d='m2.65 18.1.62.77c.36.44.54.66.78.66s.42-.22.77-.66L7 16.17' stroke='currentColor' />
    </svg>
  )
}
