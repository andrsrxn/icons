import type { Icon } from './types'

export const IconNotSupersetOf: Icon = ({
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
      data-slot='icon-ui-not-superset-of'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M5.1 5h7.4a5.5 5.5 0 1 1 0 11H5.54' stroke='currentColor' />
      <path d='m2.7 2.7 18.6 18.6' stroke='currentColor' />
      <path d='M5.11 19.46h14.12' stroke='currentColor' />
    </svg>
  )
}
