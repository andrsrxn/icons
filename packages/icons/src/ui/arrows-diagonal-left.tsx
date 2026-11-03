import type { Icon } from './types'

export const IconArrowsDiagonalLeft: Icon = ({
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
      data-slot='icon-ui-arrows-diagonal-left'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='m3.5 3.59 16.67 16.67' stroke='currentColor' />
      <path d='M13.9 21.2h3.3c1.89 0 2.83 0 3.42-.58s.58-1.53.58-3.41v-3.3' stroke='currentColor' />
      <path d='M10.1 2.8H6.8c-1.89 0-2.83 0-3.42.58S2.8 4.9 2.8 6.79v3.3' stroke='currentColor' />
    </svg>
  )
}
