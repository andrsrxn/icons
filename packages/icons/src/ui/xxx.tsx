import type { Icon } from './types'

export const IconXxx: Icon = ({
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
      data-slot='icon-ui-xxx'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='m17.17 15.49 4.84-6.98' stroke='currentColor' />
      <path d='m9.58 15.49 4.84-6.98' stroke='currentColor' />
      <path d='M2 15.49 6.82 8.5' stroke='currentColor' />
      <path d='M22 15.49 17.18 8.5' stroke='currentColor' />
      <path d='M14.42 15.49 9.58 8.5' stroke='currentColor' />
      <path d='M6.83 15.49 1.99 8.5' stroke='currentColor' />
      <path d='M22.26 20.17H1.74' stroke='currentColor' />
      <path d='M22.26 3.86H1.74' stroke='currentColor' />
    </svg>
  )
}
