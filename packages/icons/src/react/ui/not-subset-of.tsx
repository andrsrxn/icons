import type { Icon } from './types'

export const IconNotSubsetOf: Icon = ({
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
      data-slot='icon-ui-not-subset-of'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M18 5h-6.96a5.5 5.5 0 1 0 0 11H18' stroke='currentColor' />
      <path d='m2.75 2.75 18.5 18.5' stroke='currentColor' />
      <path d='M5.11 19.46h14.12' stroke='currentColor' />
    </svg>
  )
}
