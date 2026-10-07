import type { Icon } from './types'

export const IconArrowUpFromLine: Icon = ({
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
      data-slot='icon-ui-arrow-up-from-line'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m19.08 8.8-4.24-4.25c-1.33-1.34-2-2-2.83-2s-1.5.66-2.83 2L4.93 8.79'
        stroke='currentColor'
      />
      <path d='M12 17.72V3.02' stroke='currentColor' />
      <path d='M4.65 21.36h14.7' stroke='currentColor' />
    </svg>
  )
}
