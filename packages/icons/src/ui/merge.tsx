import type { Icon } from './types'

export const IconMerge: Icon = ({
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
      data-slot='icon-ui-merge'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M16.59 6.36 14.83 4.6c-1.33-1.33-2-2-2.83-2-.82 0-1.5.67-2.83 2L7.41 6.36'
        stroke='currentColor'
      />
      <path d='M12 13.23V2.99' stroke='currentColor' />
      <path d='M3.92 21.31 12 13.23' stroke='currentColor' />
      <path d='M20.08 21.31 12 13.23' stroke='currentColor' />
    </svg>
  )
}
