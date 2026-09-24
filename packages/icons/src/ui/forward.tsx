import type { Icon } from './types'

export const IconForward: Icon = ({
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
      data-slot='icon-ui-forward'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M20.42 11.4H9.75a6 6 0 0 0-5.98 5.98' stroke='currentColor' />
      <path
        d='m16.58 6.62 1.96 1.95c1.34 1.34 2 2 2 2.83s-.66 1.5-2 2.83l-1.96 1.97'
        stroke='currentColor'
      />
    </svg>
  )
}
