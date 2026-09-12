import type { Icon } from './types'

export const IconRegex: Icon = ({
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
      data-slot='icon-ui-regex'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='2.65' y='12.66' width='8.5' height='8.5' rx='2' fill='currentColor' />
      <rect x='2.65' y='12.66' width='8.5' height='8.5' rx='2' stroke='currentColor' />
      <path d='M17.09 12.66V2.84' stroke='currentColor' />
      <path d='m21.35 5.3-8.5 4.91' stroke='currentColor' />
      <path d='m12.85 5.3 8.5 4.91' stroke='currentColor' />
    </svg>
  )
}
