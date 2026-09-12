import type { Icon } from './types'

export const IconTextAlignEnd: Icon = ({
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
      data-slot='icon-ui-text-align-end'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M2.74 5.18h18.52' stroke='currentColor' />
      <path d='M2.74 14.27h18.52' stroke='currentColor' />
      <path d='M9.48 9.73h11.78' stroke='currentColor' />
      <path d='M9.48 18.82h11.78' stroke='currentColor' />
    </svg>
  )
}
