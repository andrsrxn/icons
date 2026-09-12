import type { Icon } from './types'

export const IconPlusMinus: Icon = ({
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
      data-slot='icon-ui-plus-minus'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M10.5 6.62H2.72' stroke='currentColor' />
      <path d='M21.27 17.15h-7.21' stroke='currentColor' />
      <path d='M6.62 2.74v7.76' stroke='currentColor' />
      <path d='M20.96 3.05 3.04 20.96' stroke='currentColor' />
    </svg>
  )
}
