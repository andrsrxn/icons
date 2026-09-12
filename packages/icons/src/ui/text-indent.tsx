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
        d='m3 4 .3.1c2.5.77 3.74 1.16 3.74 1.9 0 .73-1.25 1.13-3.75 1.9L3 8'
        stroke='currentColor'
      />
    </svg>
  )
}
