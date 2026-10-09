import type { Icon } from './types'

export const IconLadder: Icon = ({
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
      data-slot='icon-ui-ladder'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' d='M18.28 5.2v13.28H5.72V5.2z' fill='currentColor' />
      <path d='M20.78 12H3.22' stroke='currentColor' />
      <path d='M20.78 18.8H3.22' stroke='currentColor' />
      <path d='M20.78 5.2H3.22' stroke='currentColor' />
      <path d='M5.72 2.3v19.4' stroke='currentColor' />
      <path d='M18.28 2.3v19.4' stroke='currentColor' />
    </svg>
  )
}
