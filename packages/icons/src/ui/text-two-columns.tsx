import type { Icon } from './types'

export const IconTextTwoColumns: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

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
      data-slot='icon-ui-text-two-columns'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M2.7 5.18h7.23' stroke='currentColor' />
      <path d='M14.07 5.18h7.22' stroke='currentColor' />
      <path d='M2.7 14.27h7.23' stroke='currentColor' />
      <path d='M14.07 14.27h7.22' stroke='currentColor' />
      <path d='M2.7 9.73h7.23' stroke='currentColor' />
      <path d='M14.07 9.73h7.22' stroke='currentColor' />
      <path d='M2.7 18.82h7.23' stroke='currentColor' />
      <path d='M14.07 18.82h7.22' stroke='currentColor' />
    </svg>
  )
}
