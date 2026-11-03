import type { Icon } from './types'

export const IconEqualTriple: Icon = ({
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
      data-slot='icon-ui-equal-triple'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M1.81 9H6' stroke='currentColor' />
      <path d='M18.02 9h4.17' stroke='currentColor' />
      <path d='M9.82 9h4.36' stroke='currentColor' />
      <path d='M1.81 15H6' stroke='currentColor' />
      <path d='M18.02 15h4.17' stroke='currentColor' />
      <path d='M9.82 15h4.36' stroke='currentColor' />
    </svg>
  )
}
