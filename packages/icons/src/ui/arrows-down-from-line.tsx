import type { Icon } from './types'

export const IconArrowsDownFromLine: Icon = ({
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
      data-slot='icon-ui-arrows-down-from-line'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='m4.06 18.3.2.2c1.34 1.34 2 2 2.83 2s1.5-.66 2.84-2l.2-.2' stroke='currentColor' />
      <path
        d='m12.84 18.3.2.2c1.34 1.34 2 2 2.84 2 .82 0 1.5-.66 2.83-2l.2-.2'
        stroke='currentColor'
      />
      <path d='M7.1 5.18v14.85' stroke='currentColor' />
      <path d='M15.88 5.17v14.86' stroke='currentColor' />
      <path d='M18.84 1.78H4.14' stroke='currentColor' />
    </svg>
  )
}
