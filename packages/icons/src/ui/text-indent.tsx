import type { Icon } from './types'

export const IconTextIndent: Icon = ({
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
      data-slot='icon-ui-text-indent'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M2.74 17.85h18.52' stroke='currentColor' />
      <path d='M2.74 11.98h18.52' stroke='currentColor' />
      <path d='M10.42 6.1h10.84' stroke='currentColor' />
      <path
        d='m2.74 3.34 1.58.68c1.81.79 2.72 1.18 2.72 1.84 0 .65-.9 1.05-2.72 1.83l-1.58.69'
        stroke='currentColor'
      />
    </svg>
  )
}
