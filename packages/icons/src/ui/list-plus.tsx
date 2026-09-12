import type { Icon } from './types'

export const IconListPlus: Icon = ({
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
      data-slot='icon-ui-list-plus'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M21.19 6H2.8' stroke='currentColor' />
      <path d='M21.19 12H2.8' stroke='currentColor' />
      <path d='M12 18H2.81' stroke='currentColor' />
      <path d='M21.19 17.96h-5.5' stroke='currentColor' />
      <path d='M18.45 15.2v5.5' stroke='currentColor' />
    </svg>
  )
}
