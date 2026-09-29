import type { Icon } from './types'

export const IconArrowUpLine: Icon = ({
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
      data-slot='icon-ui-arrow-up-line'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M19.08 12.84 14.84 8.6c-1.33-1.34-2-2-2.83-2s-1.5.66-2.83 2l-4.25 4.24'
        stroke='currentColor'
      />
      <path d='M12 21.76V7.06' stroke='currentColor' />
      <path d='M4.65 2.83h14.7' stroke='currentColor' />
    </svg>
  )
}
