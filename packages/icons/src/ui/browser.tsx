import type { Icon } from './types'

export const IconBrowser: Icon = ({
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
      data-slot='icon-ui-browser'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='1.73' y='4' width='20.53' height='4.84' rx='1' fill='currentColor' />
      <rect x='1.73' y='4' width='20.53' height='16' rx='3' stroke='currentColor' />
      <path d='M22.27 8.84H1.73' stroke='currentColor' />
    </svg>
  )
}
