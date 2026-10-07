import type { Icon } from './types'

export const IconTan: Icon = ({
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
      data-slot='icon-ui-tan'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M17.43 8.17v7.71' stroke='currentColor' />
      <path d='m17.43 8.17 4.87 7.66' stroke='currentColor' />
      <path d='M22.3 8.12v7.71' stroke='currentColor' />
      <path d='M4.25 8.12v7.76' stroke='currentColor' />
      <path d='M1.39 8.12H7.1' stroke='currentColor' />
      <path d='M9.49 13.58h3.86' stroke='currentColor' />
      <path d='m11.42 7.87-3.19 8.01' stroke='currentColor' />
      <path d='m11.45 7.87 3.2 8.01' stroke='currentColor' />
    </svg>
  )
}
