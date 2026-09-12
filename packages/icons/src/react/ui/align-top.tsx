import type { Icon } from './types'

export const IconAlignTop: Icon = ({
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
      data-slot='icon-ui-align-top'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='3.77' y='5.15' width='6.43' height='17.17' rx='2' fill='currentColor' />
      <rect opacity='.2' x='13.8' y='5.15' width='6.43' height='12.88' rx='2' fill='currentColor' />
      <rect x='3.77' y='5.15' width='6.43' height='17.17' rx='2' stroke='currentColor' />
      <rect x='13.8' y='5.15' width='6.43' height='12.88' rx='2' stroke='currentColor' />
      <path d='M2.81 1.78H21.2' stroke='currentColor' />
    </svg>
  )
}
