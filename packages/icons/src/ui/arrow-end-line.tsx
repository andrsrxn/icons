import type { Icon } from './types'

export const IconArrowEndLine: Icon = ({
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
      data-slot='icon-ui-arrow-end-line'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m11.27 4.92 4.25 4.24c1.33 1.33 2 2 2 2.83s-.66 1.5-2 2.83l-4.25 4.25'
        stroke='currentColor'
      />
      <path d='M2.35 12h14.7' stroke='currentColor' />
      <path d='M21.29 19.35V4.65' stroke='currentColor' />
    </svg>
  )
}
