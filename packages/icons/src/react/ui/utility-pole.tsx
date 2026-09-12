import type { Icon } from './types'

export const IconUtilityPole: Icon = ({
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
      data-slot='icon-ui-utility-pole'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M12 22.21V1.8' stroke='currentColor' />
      <path d='M21.9 4.5H2.1' stroke='currentColor' />
      <path d='M16.95 9.18h-9.9' stroke='currentColor' />
      <path d='M4.8 2.69V6.3' stroke='currentColor' />
      <path d='M19.18 2.69V6.3' stroke='currentColor' />
    </svg>
  )
}
