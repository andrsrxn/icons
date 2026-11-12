import type { Icon } from './types'

export const IconGridLines: Icon = ({
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
      data-slot='icon-ui-grid-lines'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M16.3 2.6v18.8' stroke='currentColor' />
      <path d='M2.6 7.72h18.8' stroke='currentColor' />
      <path d='M2.6 16.37h18.8' stroke='currentColor' />
      <path d='M7.74 2.6v18.8' stroke='currentColor' />
    </svg>
  )
}
