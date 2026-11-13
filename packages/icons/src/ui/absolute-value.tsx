import type { Icon } from './types'

export const IconAbsoluteValue: Icon = ({
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
      data-slot='icon-ui-absolute-value'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M2.83 2.6v18.8' stroke='currentColor' />
      <path d='M21.17 2.6v18.8' stroke='currentColor' />
      <path d='m7.4 7.4 9.2 9.2' stroke='currentColor' />
      <path d='m16.6 7.4-9.2 9.2' stroke='currentColor' />
    </svg>
  )
}
