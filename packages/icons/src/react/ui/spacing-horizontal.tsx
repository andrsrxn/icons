import type { Icon } from './types'

export const IconSpacingHorizontal: Icon = ({
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
      data-slot='icon-ui-spacing-horizontal'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M4.56 18.15H19.1' stroke='currentColor' />
      <path
        d='m16.84 14.66.66.66c1.34 1.34 2 2 2 2.83s-.66 1.5-2 2.83l-.66.67'
        stroke='currentColor'
      />
      <path d='m7 14.74-.58.58c-1.33 1.34-2 2-2 2.83s.66 1.5 2 2.83l.58.59' stroke='currentColor' />
      <path d='M5.96 2.65v8.65' stroke='currentColor' />
      <path d='M11.96 2.65v8.65' stroke='currentColor' />
      <path d='M17.96 2.65v8.65' stroke='currentColor' />
    </svg>
  )
}
