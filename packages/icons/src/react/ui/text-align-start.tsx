import type { Icon } from './types'

export const IconTextAlignStart: Icon = ({
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
      data-slot='icon-ui-text-align-start'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M2.68 5.18h18.64' stroke='currentColor' />
      <path d='M2.68 14.27h18.64' stroke='currentColor' />
      <path d='M2.68 9.73h11.86' stroke='currentColor' />
      <path d='M2.68 18.82h11.86' stroke='currentColor' />
    </svg>
  )
}
