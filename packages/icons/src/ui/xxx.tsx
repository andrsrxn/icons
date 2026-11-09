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
      <path d='M21.53 20.54H2.47' stroke='currentColor' />
      <path d='M21.53 3.5H2.47' stroke='currentColor' />
      <path d='m2.47 15.33 4.61-6.66' stroke='currentColor' />
      <path d='m9.7 15.33 4.6-6.66' stroke='currentColor' />
      <path d='m16.92 15.33 4.6-6.66' stroke='currentColor' />
      <path d='m7.08 15.33-4.6-6.66' stroke='currentColor' />
      <path d='M14.3 15.33 9.7 8.67' stroke='currentColor' />
      <path d='m21.53 15.33-4.61-6.66' stroke='currentColor' />
    </svg>
  )
}
