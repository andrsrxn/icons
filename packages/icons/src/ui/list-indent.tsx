import type { Icon } from './types'

export const IconListIndent: Icon = ({
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
      data-slot='icon-ui-list-indent'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M10.42 17.85h10.84' stroke='currentColor' />
      <path d='M10.42 11.98h10.84' stroke='currentColor' />
      <path d='M10.42 6.1h10.84' stroke='currentColor' />
      <path
        d='m2.73 9.45 1.62.72c1.75.79 2.62 1.18 2.62 1.83s-.87 1.04-2.62 1.82l-1.62.73'
        stroke='currentColor'
      />
    </svg>
  )
}
