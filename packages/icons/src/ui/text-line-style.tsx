import type { Icon } from './types'

export const IconTextLineStyle: Icon = ({
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
      data-slot='icon-ui-text-line-style'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M6.42 6H2.59' stroke='currentColor' />
      <path d='M10.08 12h-7.5' stroke='currentColor' />
      <path d='M21.32 6H17.5' stroke='currentColor' />
      <path d='M21.32 12h-7.4' stroke='currentColor' />
      <path d='M13.92 6h-3.84' stroke='currentColor' />
      <path d='M21.32 18H2.6' stroke='currentColor' />
    </svg>
  )
}
