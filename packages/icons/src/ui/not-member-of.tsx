import type { Icon } from './types'

export const IconNotMemberOf: Icon = ({
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
      data-slot='icon-ui-not-member-of'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M19.5 5h-8a7 7 0 1 0 0 14h7.27' stroke='currentColor' />
      <path d='M4.5 12h15' stroke='currentColor' />
      <path d='m2.72 2.72 18.56 18.56' stroke='currentColor' />
    </svg>
  )
}
