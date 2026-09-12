import type { Icon } from './types'

export const IconTextAlignCenter: Icon = ({
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
      data-slot='icon-ui-text-align-center'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M2.73 5.18h18.54' stroke='currentColor' />
      <path d='M2.73 14.27h18.54' stroke='currentColor' />
      <path d='M6.1 9.73h11.8' stroke='currentColor' />
      <path d='M6.1 18.82h11.8' stroke='currentColor' />
    </svg>
  )
}
