import type { Icon } from './types'

export const IconArrowEndDot: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-arrow-end-dot'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='m21.41 7.67.05.95c.1 2.05.15 3.08-.48 3.7-.62.63-1.65.58-3.7.48l-.96-.04'
        stroke='currentColor'
      />
      <path
        d='M20.99 12.31a10.6 10.6 0 0 0-9.3-4.97 9.33 9.33 0 0 0-9.32 9.32'
        stroke='currentColor'
      />
      <path
        d='M11.86 14.56a1 1 0 1 1-2 0 1 1 0 0 1 2 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
